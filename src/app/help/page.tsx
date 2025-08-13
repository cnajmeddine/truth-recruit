import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions and learn how to get the most out of TruthRecruit
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pr-12"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🎯</span>
                  <h3 className="text-lg font-semibold text-gray-900">How to Interpret Your Company Score</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Learn what the hiring authenticity score means and how to use it in your job search decisions.
                </p>
                <span className="text-primary-600 text-sm font-medium">Read more →</span>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">👻</span>
                  <h3 className="text-lg font-semibold text-gray-900">Understanding Ghost Job Detection</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how our AI identifies fake job postings and what red flags to watch for.
                </p>
                <span className="text-primary-600 text-sm font-medium">Read more →</span>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💰</span>
                  <h3 className="text-lg font-semibold text-gray-900">Free vs Premium Features</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Compare what's included in our free tier versus premium subscription benefits.
                </p>
                <span className="text-primary-600 text-sm font-medium">Read more →</span>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔧</span>
                  <h3 className="text-lg font-semibold text-gray-900">Troubleshooting Analysis Issues</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Common problems and solutions when analyzing companies or viewing reports.
                </p>
                <span className="text-primary-600 text-sm font-medium">Read more →</span>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📊</span>
                  <h3 className="text-lg font-semibold text-gray-900">Making Sense of Employee Sentiment</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  How we analyze employee reviews and what the sentiment trends mean for you.
                </p>
                <span className="text-primary-600 text-sm font-medium">Read more →</span>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔒</span>
                  <h3 className="text-lg font-semibold text-gray-900">Privacy and Data Security</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how we protect your privacy and what data we collect during analysis.
                </p>
                <span className="text-primary-600 text-sm font-medium">Read more →</span>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Getting Started */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">How do I analyze a company?</h3>
                  <p className="text-gray-600 text-sm">
                    Simply paste any company's LinkedIn URL into our analyzer on the homepage. 
                    The analysis takes 30-60 seconds and provides comprehensive insights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">Do I need to create an account?</h3>
                  <p className="text-gray-600 text-sm">
                    No account needed for basic analysis. Premium features require registration 
                    for unlimited analyses and advanced reports.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">What companies can you analyze?</h3>
                  <p className="text-gray-600 text-sm">
                    Any company with a public LinkedIn page. We support companies of all sizes 
                    across industries worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">How accurate is your analysis?</h3>
                  <p className="text-gray-600 text-sm">
                    Our AI algorithms achieve 90%+ accuracy by analyzing multiple data sources. 
                    Results should be one factor in your decision-making process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Account & Billing */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account & Billing</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">How do I upgrade to Premium?</h3>
                  <p className="text-gray-600 text-sm">
                    Visit our pricing page and click "Start Premium Trial" for a 14-day free trial. 
                    No credit card required upfront.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">Can I cancel my subscription anytime?</h3>
                  <p className="text-gray-600 text-sm">
                    Yes! Cancel anytime from your account settings. Your premium features 
                    remain active until the end of your billing period.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">Do you offer refunds?</h3>
                  <p className="text-gray-600 text-sm">
                    We offer a 30-day money-back guarantee. Contact support if you're not 
                    satisfied with TruthRecruit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">How do I update my payment method?</h3>
                  <p className="text-gray-600 text-sm">
                    Go to Account Settings → Billing to update your payment information. 
                    Changes take effect on your next billing cycle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Technical Support */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Technical Support
                </h2>
                <p className="text-lg text-gray-600">
                  Common technical issues and solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    🚨 Common Issues
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">Analysis taking too long</h4>
                      <p className="text-gray-600 text-sm">
                        Wait up to 2 minutes. Refresh if no progress after 3 minutes.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">"Invalid LinkedIn URL" error</h4>
                      <p className="text-gray-600 text-sm">
                        Ensure you're using the company page URL, not a job posting or profile.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">Report not loading</h4>
                      <p className="text-gray-600 text-sm">
                        Clear browser cache and cookies, then try again.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">Payment processing failed</h4>
                      <p className="text-gray-600 text-sm">
                        Check card details and try again. Contact support if issue persists.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    💡 Tips & Best Practices
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">Use the correct LinkedIn URL format</h4>
                      <p className="text-gray-600 text-sm">
                        linkedin.com/company/company-name/ works best
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">Analyze multiple competitors</h4>
                      <p className="text-gray-600 text-sm">
                        Compare similar companies to get better context for your decisions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">Check company size</h4>
                      <p className="text-gray-600 text-sm">
                        Our analysis is most accurate for companies with 50+ employees.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">Use recent analyses</h4>
                      <p className="text-gray-600 text-sm">
                        Company situations change quickly - analyze again if it's been over a month.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <Card>
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">💬</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Live Chat</h3>
                  <p className="text-sm text-gray-600">Available 9 AM - 5 PM PST</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">📧</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Email Support</h3>
                  <p className="text-sm text-gray-600">Response within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">📚</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Video Tutorials</h3>
                  <p className="text-sm text-gray-600">Step-by-step guides</p>
                </div>
              </div>
              <div className="space-x-4">
                <Link href="/contact">
                  <Button size="lg">
                    Contact Support
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  Watch Tutorials
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}