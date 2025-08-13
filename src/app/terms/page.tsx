import { Card, CardContent } from '@/components/ui';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-width section-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 13, 2025
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="max-w-none p-8 space-y-8 text-gray-700">
            <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using TruthRecruit ("Service", "Platform", "Website"), operated by TruthRecruit Inc. ("Company", "we", "us", "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our Service.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Description of Service</h2>
            <p className="mb-4">
              TruthRecruit provides company analysis and hiring intelligence services for job seekers. Our Service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Company hiring authenticity analysis</li>
              <li>Ghost job detection and probability assessment</li>
              <li>Employee sentiment analysis</li>
              <li>Hiring pattern and trend analysis</li>
              <li>Company culture and workplace insights</li>
              <li>Recommendation and guidance services</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. User Accounts and Registration</h2>
            <p className="mb-4">
              To access certain features of our Service, you may be required to register for an account. When you register for an account, you must:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your password and identification</li>
              <li>Promptly update your account information if it changes</li>
              <li>Accept all risks of unauthorized access to your account</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Acceptable Use</h2>
            <p className="mb-4">You agree not to use the Service:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>For any obscene or immoral purpose or to encourage anyone to engage in obscene or immoral activities</li>
              <li>To interfere with or circumvent the security features of the Service or any related website</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Data and Privacy</h2>
            <p className="mb-4">
              We are committed to protecting your privacy and handling your data responsibly:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We collect only the minimum data necessary to provide our Service</li>
              <li>We do not store or track your personal job search activities</li>
              <li>Company analysis results are generated in real-time and not permanently stored</li>
              <li>We comply with applicable data protection regulations including GDPR and CCPA</li>
              <li>For detailed information, please review our Privacy Policy</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Subscription and Payment Terms</h2>
            <p className="mb-4">
              Our Service offers both free and paid subscription tiers:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Free accounts include limited monthly analyses</li>
              <li>Premium subscriptions are billed monthly at $9.99/month</li>
              <li>Payment is due in advance of each billing period</li>
              <li>You may cancel your subscription at any time</li>
              <li>Refunds are available within 30 days of payment</li>
              <li>Price changes will be communicated 30 days in advance</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Intellectual Property Rights</h2>
            <p className="mb-6">
              The Service and its original content, features, and functionality are and will remain the exclusive property of TruthRecruit Inc. and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Disclaimers and Limitations</h2>
            <p className="mb-4">
              Our Service is provided for informational and educational purposes only:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Analysis results are based on publicly available information and algorithmic assessment</li>
              <li>We do not guarantee the accuracy, completeness, or currency of any information</li>
              <li>Results should be considered as one factor among many in career decision-making</li>
              <li>We are not responsible for employment decisions made based on our analysis</li>
              <li>The Service is provided "as is" without warranties of any kind</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall TruthRecruit Inc., its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, punitive, consequential, or special damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Indemnification</h2>
            <p className="mb-6">
              You agree to defend, indemnify, and hold harmless TruthRecruit Inc. and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Termination</h2>
            <p className="mb-6">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. Upon termination, your right to use the Service will cease immediately.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Governing Law</h2>
            <p className="mb-6">
              These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">13. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">14. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Email: legal@truthrecruit.com</li>
              <li>Address: TruthRecruit Inc., 123 Innovation Drive, San Francisco, CA 94107</li>
              <li>Phone: (555) 123-TRUTH</li>
            </ul>

            <div className="bg-primary-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-primary-800">
                <strong>Note:</strong> These Terms of Service are effective as of the date last updated above. 
                By continuing to use TruthRecruit after any changes to these terms, you agree to be bound by the revised terms.
              </p>
            </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}