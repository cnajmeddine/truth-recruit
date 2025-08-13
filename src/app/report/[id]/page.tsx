'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CompanyAnalysis } from '@/types';
import { 
  CompanyHeader, 
  ScoreCard, 
  RecommendationsList, 
  JobPostingsTable 
} from '@/components/features';
import { LoadingSpinner, Button } from '@/components/ui';
import { formatScore, getScoreEmoji } from '@/utils';

export default function ReportPage() {
  const params = useParams();
  const [analysis, setAnalysis] = useState<CompanyAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For prototype, we'll simulate the data
    const mockAnalysis: CompanyAnalysis = {
      companyId: params.id as string,
      company: {
        id: params.id as string,
        name: 'Microsoft',
        linkedinUrl: 'https://www.linkedin.com/company/microsoft/',
        industry: 'Technology',
        size: '100,001+ employees',
        employeeCount: 200000,
        location: 'Redmond, WA',
        description: 'At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.',
        website: 'https://www.microsoft.com',
        founded: 1975,
        logo: 'https://logo.clearbit.com/microsoft.com',
      },
      hiringAuthenticityScore: 85,
      ghostJobProbability: 15,
      overallScore: 82,
      sentiment: {
        overallRating: 4.4,
        reviewCount: 15420,
        positivePercentage: 78,
        negativePercentage: 22,
        recentTrend: 'improving',
        keyInsights: [
          'Strong work-life balance praised by employees',
          'Excellent career development opportunities',
          'Competitive compensation and benefits',
          'Some concerns about bureaucracy in large teams',
        ],
      },
      jobPostings: [
        {
          id: '1',
          title: 'Senior Software Engineer',
          department: 'Engineering',
          location: 'Remote',
          postedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          isRemote: true,
          experienceLevel: 'Senior',
          applicantCount: 150,
        },
        {
          id: '2',
          title: 'Product Manager',
          department: 'Product',
          location: 'Redmond, WA',
          postedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
          isRemote: false,
          experienceLevel: 'Mid-level',
          applicantCount: 200,
        },
        {
          id: '3',
          title: 'Data Scientist',
          department: 'Data Science',
          location: 'Seattle, WA',
          postedDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
          isRemote: true,
          experienceLevel: 'Senior',
          applicantCount: 75,
        },
      ],
      lastAnalyzed: new Date(),
      recommendations: [
        '✅ Strong hiring authenticity - good chance of genuine opportunities',
        '✅ Low ghost job risk - postings appear legitimate',
        '✅ High employee satisfaction - positive work environment likely',
        '📈 Employee sentiment trending upward - company may be improving',
        '🏢 Established company - likely stable but potentially less innovative',
      ],
    };

    // Simulate API delay
    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setLoading(false);
    }, 1500);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <LoadingSpinner size="xl" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Analyzing Company...
            </h2>
            <p className="text-gray-600">
              This may take up to 60 seconds
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !analysis) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Analysis Failed
          </h2>
          <p className="text-gray-600">
            {error || 'Unable to load company analysis. Please try again.'}
          </p>
          <Link href="/">
            <Button>Try Another Company</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-width section-padding">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Analyze Another Company
          </Link>
        </div>

        {/* Company Header */}
        <CompanyHeader company={analysis.company} />

        {/* Overall Score Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl border border-primary-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Overall TruthScore
              </h2>
              <p className="text-gray-600">
                Comprehensive hiring intelligence score
              </p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-primary-600 mb-2">
                {formatScore(analysis.overallScore)}
              </div>
              <div className="text-2xl">
                {getScoreEmoji(analysis.overallScore)}
              </div>
            </div>
          </div>
        </div>

        {/* Score Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ScoreCard
            title="Hiring Authenticity"
            score={analysis.hiringAuthenticityScore}
            description="Likelihood of genuine hiring opportunities"
            trend="up"
            details={[
              'Based on job posting patterns',
              'Employee feedback analysis',
              'Historical hiring data'
            ]}
          />
          
          <ScoreCard
            title="Ghost Job Risk"
            score={100 - analysis.ghostJobProbability}
            description="Probability that job postings are legitimate"
            trend="stable"
            details={[
              'Posting duration analysis',
              'Requirement feasibility check',
              'Duplicate posting detection'
            ]}
          />
          
          <ScoreCard
            title="Employee Satisfaction"
            score={Math.round((analysis.sentiment.overallRating / 5) * 100)}
            description="Overall employee satisfaction rating"
            trend={analysis.sentiment.recentTrend === 'improving' ? 'up' : 
                   analysis.sentiment.recentTrend === 'declining' ? 'down' : 'stable'}
            details={[
              `${analysis.sentiment.reviewCount.toLocaleString()} reviews analyzed`,
              `${analysis.sentiment.positivePercentage}% positive sentiment`,
              `Rating: ${analysis.sentiment.overallRating}/5.0`
            ]}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RecommendationsList recommendations={analysis.recommendations} />
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Employee Insights
              </h3>
              <div className="space-y-3">
                {analysis.sentiment.keyInsights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-sm text-gray-700">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job Postings */}
        <JobPostingsTable jobPostings={analysis.jobPostings} />

        {/* CTA Section */}
        <div className="mt-12 text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Apply with Confidence?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Use this intelligence to craft targeted applications, prepare for interviews, 
            and make informed career decisions.
          </p>
          <div className="space-x-4">
            <Button size="lg">
              Get Premium Report
            </Button>
            <Link href="/">
              <Button variant="secondary" size="lg">
                Analyze Another Company
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}