import { CompanyAnalyzer } from '@/components/features/CompanyAnalyzer';
import { Card } from '@/components/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Stop Applying to
              <span className="text-primary-600 block">Ghost Jobs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant intelligence on any company&apos;s hiring practices, 
              employee satisfaction, and legitimacy before you apply.
            </p>
          </div>

          <CompanyAnalyzer />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Discover
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive analysis in under 60 seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hiring Authenticity Score</h3>
              <p className="text-gray-600">
                Real hiring velocity vs. posted jobs ratio with response rate analysis
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ghost Job Detection</h3>
              <p className="text-gray-600">
                AI-powered analysis to identify fake job postings and unrealistic requirements
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Employee Sentiment</h3>
              <p className="text-gray-600">
                Real-time analysis of employee satisfaction and company culture insights
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Job Seekers
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands who&apos;ve avoided bad opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 mb-3">
                    &quot;Saved me from applying to a company that had 200+ identical job postings. 
                    Definitely a ghost job situation!&quot;
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-gray-500">Software Engineer</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 mb-3">
                    &quot;The sentiment analysis helped me understand the company culture 
                    before my interview. I felt much more prepared.&quot;
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Marcus Rodriguez</div>
                    <div className="text-gray-500">Product Manager</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-width section-padding text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make Smarter Career Decisions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start with a free company analysis today
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Analyze Your Next Opportunity
          </button>
        </div>
      </section>
    </div>
  );
}