import { NextRequest, NextResponse } from 'next/server';
import { LinkedInScraper, GlassdoorScraper } from '@/services/scraping';
import { CompanyAnalyzer } from '@/services/scoring';
import { validateLinkedInUrl } from '@/lib/validations';
import { AnalysisRequest, AnalysisResponse } from '@/types';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const body: AnalysisRequest = await request.json();
    const { linkedinUrl } = body;

    // Validate input
    const validation = validateLinkedInUrl(linkedinUrl);
    if (!validation.isValid) {
      return NextResponse.json<AnalysisResponse>({
        success: false,
        error: validation.error,
        processingTime: Date.now() - startTime,
      }, { status: 400 });
    }

    // Initialize services
    const linkedinScraper = new LinkedInScraper();
    const glassdoorScraper = new GlassdoorScraper();
    const companyAnalyzer = new CompanyAnalyzer();

    // Scrape company data
    const companyResult = await linkedinScraper.scrapeCompanyProfile(linkedinUrl);
    if (!companyResult.success || !companyResult.company) {
      return NextResponse.json<AnalysisResponse>({
        success: false,
        error: companyResult.error || 'Failed to fetch company data',
        processingTime: Date.now() - startTime,
      }, { status: 500 });
    }

    // Scrape job postings
    const jobPostings = await linkedinScraper.scrapeJobPostings(
      companyResult.company.name || 'unknown'
    );

    // Scrape sentiment data
    const sentimentResult = await glassdoorScraper.scrapeSentimentData(
      companyResult.company.name || 'unknown'
    );
    
    if (!sentimentResult.success || !sentimentResult.sentiment) {
      return NextResponse.json<AnalysisResponse>({
        success: false,
        error: sentimentResult.error || 'Failed to fetch sentiment data',
        processingTime: Date.now() - startTime,
      }, { status: 500 });
    }

    // Analyze company
    const analysis = await companyAnalyzer.analyzeCompany(
      companyResult.company as any,
      jobPostings,
      sentimentResult.sentiment
    );

    // Store analysis result (in a real app, this would go to a database)
    // For prototype, we'll just return it
    
    return NextResponse.json<AnalysisResponse>({
      success: true,
      data: analysis,
      processingTime: Date.now() - startTime,
    });

  } catch (error) {
    console.error('Analysis API error:', error);
    return NextResponse.json<AnalysisResponse>({
      success: false,
      error: 'Internal server error',
      processingTime: Date.now() - startTime,
    }, { status: 500 });
  }
}