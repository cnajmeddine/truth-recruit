import Link from 'next/link';
import { Card, CardContent, Button, Badge } from '@/components/ui';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your job search needs. Start free, upgrade when you need more.
          </p>
          <div className="inline-flex items-center bg-primary-50 px-4 py-2 rounded-full text-primary-700 text-sm font-medium">
            <span className="text-lg mr-2">🎉</span>
            Limited time: Get 50% off your first month with code TRUTH50
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Free Tier */}
            <Card className="relative">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">$0</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600">
                    Perfect for casual job seekers exploring opportunities
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">3 company analyses per month</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Basic hiring authenticity score</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Ghost job probability detection</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Employee sentiment overview</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Basic recommendations</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">✗</span>
                    <span className="text-gray-400">PDF report downloads</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">✗</span>
                    <span className="text-gray-400">Historical trend analysis</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">✗</span>
                    <span className="text-gray-400">Priority support</span>
                  </div>
                </div>

                <Link href="/" className="block">
                  <Button variant="secondary" className="w-full">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Tier */}
            <Card className="relative border-2 border-primary-200 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="primary" className="px-4 py-2">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary-600">$9.99</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600">
                    For serious job seekers who want the complete picture
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700 font-medium">Unlimited company analyses</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Advanced scoring algorithms</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Detailed ghost job analysis</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Deep employee sentiment insights</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Personalized recommendations</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">PDF report downloads</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">6-month historical trends</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Company comparison tool</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Email alerts for changes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Priority customer support</span>
                  </div>
                </div>

                <Button className="w-full">
                  Start 14-Day Free Trial
                </Button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  No credit card required • Cancel anytime
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enterprise Section */}
          <Card className="mb-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Something More?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Perfect for recruiters, HR teams, and career coaches who need advanced features 
                and bulk analysis capabilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl">👥</span>
                  </div>
                  <h4 className="font-semibold mb-1">Team Accounts</h4>
                  <p className="text-sm text-gray-600">Multi-user access and collaboration</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-1">Bulk Analysis</h4>
                  <p className="text-sm text-gray-600">Analyze hundreds of companies at once</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl">🔌</span>
                  </div>
                  <h4 className="font-semibold mb-1">API Access</h4>
                  <p className="text-sm text-gray-600">Integrate with your existing tools</p>
                </div>
              </div>
              <Button variant="secondary">
                Contact Sales
              </Button>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-900">How accurate is your data?</h3>
                  <p className="text-gray-600 text-sm">
                    Our algorithms analyze multiple data sources in real-time with 90%+ accuracy. 
                    We continuously improve our models based on user feedback.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-900">Can I cancel anytime?</h3>
                  <p className="text-gray-600 text-sm">
                    Yes! Cancel your subscription anytime with no questions asked. 
                    Your premium features remain active until the end of your billing period.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-900">Do you offer refunds?</h3>
                  <p className="text-gray-600 text-sm">
                    We offer a 30-day money-back guarantee. If you're not satisfied with 
                    TruthRecruit, we'll refund your payment in full.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-900">What companies can you analyze?</h3>
                  <p className="text-gray-600 text-sm">
                    Any company with a public LinkedIn page. We support companies of all sizes 
                    across all industries worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-900">Is my data secure?</h3>
                  <p className="text-gray-600 text-sm">
                    Absolutely. We don't store your personal information or track your searches. 
                    All analysis is done in real-time and not stored.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-900">How often is data updated?</h3>
                  <p className="text-gray-600 text-sm">
                    Our data is refreshed continuously. Every analysis uses the most current 
                    information available from our data sources.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Card>
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Stop Wasting Time on Bad Opportunities
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of job seekers who are making smarter career decisions with TruthRecruit. 
                  Start with a free analysis today.
                </p>
                <div className="space-x-4">
                  <Link href="/">
                    <Button size="lg">
                      Try Free Now
                    </Button>
                  </Link>
                  <Button variant="secondary" size="lg">
                    Start Premium Trial
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  No spam, no hidden fees, cancel anytime
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}