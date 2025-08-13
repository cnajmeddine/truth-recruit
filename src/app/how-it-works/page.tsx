import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How TruthRecruit Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive company intelligence in three simple steps. 
            No more applying blindly to ghost jobs or toxic workplaces.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <Card className="flex-1">
                <CardContent>
                  <h3 className="text-2xl font-semibold mb-3">Paste LinkedIn URL</h3>
                  <p className="text-gray-600 mb-4">
                    Simply copy and paste any company's LinkedIn page URL. 
                    We support all companies with public LinkedIn profiles.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm text-primary-600">
                    https://www.linkedin.com/company/your-target-company/
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <Card className="flex-1">
                <CardContent>
                  <h3 className="text-2xl font-semibold mb-3">AI-Powered Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Our advanced algorithms analyze multiple data sources in real-time:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      LinkedIn company data and job postings
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      Employee reviews and sentiment analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      Hiring patterns and ghost job detection
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      Company stability and growth metrics
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <Card className="flex-1">
                <CardContent>
                  <h3 className="text-2xl font-semibold mb-3">Get Actionable Insights</h3>
                  <p className="text-gray-600 mb-4">
                    Receive a comprehensive report with clear recommendations 
                    to help you make informed career decisions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center p-3 bg-success-50 rounded-lg">
                      <div className="text-2xl font-bold text-success-600">85</div>
                      <div className="text-xs text-success-700">Hiring Score</div>
                    </div>
                    <div className="text-center p-3 bg-warning-50 rounded-lg">
                      <div className="text-2xl font-bold text-warning-600">15%</div>
                      <div className="text-xs text-warning-700">Ghost Risk</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600">
              The most comprehensive company intelligence platform for job seekers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Fresh data analysis, not outdated reviews from years ago
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👻</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Ghost Job Detection</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered analysis to identify fake or unrealistic job postings
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
                <p className="text-gray-600 text-sm">
                  Clear recommendations, not just raw data dumps
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">
                  Complete analysis in under 60 seconds
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Privacy Focused</h3>
                <p className="text-gray-600 text-sm">
                  We don't store your personal data or track your job searches
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Free to Start</h3>
                <p className="text-gray-600 text-sm">
                  Get your first company analysis completely free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Analysis Covers Everything
                </h2>
                <p className="text-lg text-gray-600">
                  Get the complete picture before you apply
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    📈 Hiring Intelligence
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      Hiring velocity and job posting patterns
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      Response rates and interview conversion
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      Ghost job probability assessment
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      Realistic vs unrealistic requirements
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    💼 Company Culture
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      Employee satisfaction trends
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      Work-life balance indicators
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      Management and leadership ratings
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      Career development opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card>
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Make Smarter Career Moves?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of job seekers who are using TruthRecruit to avoid ghost jobs 
                and toxic workplaces. Get your first analysis free.
              </p>
              <div className="space-x-4">
                <Link href="/">
                  <Button size="lg">
                    Try Free Analysis
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="secondary" size="lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}