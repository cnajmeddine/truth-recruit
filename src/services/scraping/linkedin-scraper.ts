import * as cheerio from 'cheerio';
import { Company } from '@/types';
import { extractCompanySlug, generateId } from '@/utils';

interface LinkedInScrapingResult {
  success: boolean;
  company?: Partial<Company>;
  error?: string;
}

export class LinkedInScraper {
  private baseHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
  };

  async scrapeCompanyProfile(linkedinUrl: string): Promise<LinkedInScrapingResult> {
    try {
      const companySlug = extractCompanySlug(linkedinUrl);
      if (!companySlug) {
        return { success: false, error: 'Invalid LinkedIn URL' };
      }

      // For prototype, we'll simulate API responses with mock data
      // In production, this would make actual HTTP requests with proper rate limiting
      const mockCompany = this.generateMockCompanyData(companySlug, linkedinUrl);
      
      return { success: true, company: mockCompany };
    } catch (error) {
      console.error('LinkedIn scraping error:', error);
      return { success: false, error: 'Failed to fetch company data' };
    }
  }

  private generateMockCompanyData(slug: string, linkedinUrl: string): Partial<Company> {
    const mockCompanies = {
      'microsoft': {
        name: 'Microsoft',
        industry: 'Technology',
        size: '100,001+ employees',
        employeeCount: 200000,
        location: 'Redmond, WA',
        description: 'At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.',
        website: 'https://www.microsoft.com',
        founded: 1975,
        logo: 'https://logo.clearbit.com/microsoft.com',
      },
      'google': {
        name: 'Google',
        industry: 'Technology',
        size: '100,001+ employees',
        employeeCount: 150000,
        location: 'Mountain View, CA',
        description: 'Google\'s mission is to organize the world\'s information and make it universally accessible and useful.',
        website: 'https://www.google.com',
        founded: 1998,
        logo: 'https://logo.clearbit.com/google.com',
      },
      'netflix': {
        name: 'Netflix',
        industry: 'Entertainment',
        size: '10,001-50,000 employees',
        employeeCount: 12000,
        location: 'Los Gatos, CA',
        description: 'Netflix is the world\'s leading streaming entertainment service.',
        website: 'https://www.netflix.com',
        founded: 1997,
        logo: 'https://logo.clearbit.com/netflix.com',
      }
    };

    const baseCompany = mockCompanies[slug as keyof typeof mockCompanies] || {
      name: this.formatCompanyName(slug),
      industry: 'Technology',
      size: '1,000-5,000 employees',
      employeeCount: 2500,
      location: 'San Francisco, CA',
      description: 'A innovative company focused on delivering exceptional products and services.',
      website: `https://www.${slug}.com`,
      founded: 2010,
      logo: `https://logo.clearbit.com/${slug}.com`,
    };

    return {
      id: generateId(),
      linkedinUrl,
      ...baseCompany,
    };
  }

  private formatCompanyName(slug: string): string {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  async scrapeJobPostings(companySlug: string): Promise<any[]> {
    // Mock job postings data
    return [
      {
        id: generateId(),
        title: 'Senior Software Engineer',
        department: 'Engineering',
        location: 'Remote',
        postedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
        isRemote: true,
        experienceLevel: 'Senior',
        applicantCount: 150,
      },
      {
        id: generateId(),
        title: 'Product Manager',
        department: 'Product',
        location: 'San Francisco, CA',
        postedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 2 weeks ago
        isRemote: false,
        experienceLevel: 'Mid-level',
        applicantCount: 200,
      },
      {
        id: generateId(),
        title: 'Data Scientist',
        department: 'Data Science',
        location: 'New York, NY',
        postedDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), // 3 weeks ago
        isRemote: true,
        experienceLevel: 'Senior',
        applicantCount: 75,
      },
    ];
  }
}