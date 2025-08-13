import { Card, CardContent } from '@/components/ui';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-width section-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 13, 2025
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="max-w-none p-8 text-gray-700">
            <div className="bg-primary-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Our Privacy Commitment</h3>
              <p className="text-primary-700">
                At TruthRecruit, we believe your privacy is fundamental. We designed our service to collect minimal data, 
                never track your job searches, and give you complete control over your information.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Account Information:</strong> Email address, name, and password (if you create an account)</li>
              <li><strong>Company URLs:</strong> LinkedIn URLs you submit for analysis</li>
              <li><strong>Contact Information:</strong> When you contact support or provide feedback</li>
              <li><strong>Payment Information:</strong> Processed securely by Stripe (we never see your card details)</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-gray-900">Information We Automatically Collect</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Usage Data:</strong> Pages visited, features used, time spent on service</li>
              <li><strong>Device Information:</strong> Browser type, operating system, screen resolution</li>
              <li><strong>Log Data:</strong> IP address, timestamps, error logs for debugging</li>
              <li><strong>Analytics:</strong> Anonymized usage patterns to improve our service</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. How We Use Your Information</h2>
            <p className="mb-4 text-gray-700">We use your information only for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Service Delivery:</strong> To provide company analysis and generate reports</li>
              <li><strong>Account Management:</strong> To create and manage your account</li>
              <li><strong>Customer Support:</strong> To respond to your questions and provide assistance</li>
              <li><strong>Service Improvement:</strong> To understand usage patterns and improve features</li>
              <li><strong>Security:</strong> To detect fraud, abuse, and protect our service</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-green-800 mb-2">What We DON'T Do</h4>
              <ul className="text-green-700 space-y-1">
                <li>✗ We don't sell your personal information to third parties</li>
                <li>✗ We don't track which companies you're interested in applying to</li>
                <li>✗ We don't create profiles of your job search behavior</li>
                <li>✗ We don't share your analysis history with employers</li>
                <li>✗ We don't use your data for advertising purposes</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Information Sharing and Disclosure</h2>
            <p className="mb-4 text-gray-700">We may share your information in the following limited circumstances:</p>
            
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Service Providers</h3>
            <p className="mb-4 text-gray-700">
              We work with trusted third-party service providers who assist us in operating our service:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Payment Processing:</strong> Stripe for secure payment processing</li>
              <li><strong>Analytics:</strong> PostHog for anonymized usage analytics</li>
              <li><strong>Email:</strong> SendGrid for transactional emails</li>
              <li><strong>Infrastructure:</strong> Vercel and AWS for hosting and data storage</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-gray-900">Legal Requirements</h3>
            <p className="mb-6 text-gray-700">
              We may disclose your information if required by law, such as in response to a court order, 
              government request, or to protect our rights and safety.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Data Retention and Security</h2>
            
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Data Retention</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Account Data:</strong> Retained while your account is active</li>
              <li><strong>Analysis Results:</strong> Not permanently stored; generated fresh each time</li>
              <li><strong>Usage Logs:</strong> Automatically deleted after 90 days</li>
              <li><strong>Support Communications:</strong> Retained for 2 years for quality purposes</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-gray-900">Security Measures</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>All data transmitted using SSL/TLS encryption</li>
              <li>Passwords hashed using industry-standard algorithms</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and employee security training</li>
              <li>Incident response plan for any security breaches</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Your Privacy Rights</h2>
            <p className="mb-4 text-gray-700">You have the following rights regarding your personal information:</p>
            
            <h3 className="text-lg font-semibold mb-3 text-gray-900">General Rights</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your information</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-gray-900">GDPR Rights (EU Residents)</h3>
            <p className="mb-4 text-gray-700">If you're in the EU, you have additional rights under GDPR:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Right to withdraw consent at any time</li>
              <li>Right to restrict processing in certain circumstances</li>
              <li>Right to lodge a complaint with your data protection authority</li>
              <li>Right to be informed about automated decision-making</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-gray-900">CCPA Rights (California Residents)</h3>
            <p className="mb-6 text-gray-700">California residents have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Know what personal information we collect and why</li>
              <li>Delete personal information we have about you</li>
              <li>Opt-out of the sale of personal information (we don't sell data)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Cookies and Tracking</h2>
            <p className="mb-4 text-gray-700">We use cookies and similar technologies for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
              <li><strong>Analytics Cookies:</strong> To understand how you use our service</li>
              <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
            </ul>
            <p className="mb-6 text-gray-700">
              You can control cookies through your browser settings. Note that disabling cookies may affect site functionality.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. International Data Transfers</h2>
            <p className="mb-6 text-gray-700">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place, including Standard Contractual Clauses 
              and adequacy decisions where applicable.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Children's Privacy</h2>
            <p className="mb-6 text-gray-700">
              Our service is not intended for children under 16. We do not knowingly collect 
              personal information from children. If you believe we have collected information 
              from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Changes to This Policy</h2>
            <p className="mb-6 text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by email or through our service. Changes become effective when 
              posted unless otherwise stated.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Contact Us</h2>
            <p className="mb-4 text-gray-700">
              If you have questions about this Privacy Policy or want to exercise your rights, 
              please contact us:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Email:</strong> privacy@truthrecruit.com</li>
              <li><strong>Address:</strong> TruthRecruit Inc., 123 Innovation Drive, San Francisco, CA 94107</li>
              <li><strong>Phone:</strong> (555) 123-TRUTH</li>
              <li><strong>Response Time:</strong> We respond to privacy requests within 30 days</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Questions or Concerns?</h4>
              <p className="text-blue-700 text-sm">
                We're committed to transparency and protecting your privacy. If you have any questions 
                about how we handle your information or want to discuss your privacy options, 
                don't hesitate to reach out to our privacy team.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}