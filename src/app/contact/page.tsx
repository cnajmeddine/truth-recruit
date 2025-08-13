'use client';

import { useState } from 'react';
import { Card, CardContent, Button, Input } from '@/components/ui';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="container-width section-padding max-w-2xl mx-auto text-center">
          <Card>
            <CardContent className="p-12">
              <div className="text-6xl mb-6">✅</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Message Sent Successfully!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for contacting us. Our team will get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need help? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Methods */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Get in Touch
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                          <span className="text-xl">📧</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-gray-600 text-sm mb-2">support@truthrecruit.com</p>
                          <p className="text-gray-500 text-xs">Response within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                          <span className="text-xl">💬</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Live Chat</h3>
                          <p className="text-gray-600 text-sm mb-2">Available 9 AM - 5 PM PST</p>
                          <p className="text-gray-500 text-xs">Monday to Friday</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                          <span className="text-xl">📞</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <p className="text-gray-600 text-sm mb-2">(555) 123-TRUTH</p>
                          <p className="text-gray-500 text-xs">Business hours only</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                          <span className="text-xl">📍</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Address</h3>
                          <p className="text-gray-600 text-sm">
                            123 Innovation Drive<br />
                            San Francisco, CA 94107<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Quick Links */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold mb-4">Quick Help</h3>
                    <div className="space-y-3">
                      <a href="/help" className="block text-primary-600 hover:text-primary-700 text-sm">
                        → View Help Center
                      </a>
                      <a href="/pricing" className="block text-primary-600 hover:text-primary-700 text-sm">
                        → Pricing Information
                      </a>
                      <a href="/how-it-works" className="block text-primary-600 hover:text-primary-700 text-sm">
                        → How It Works
                      </a>
                      <a href="/privacy" className="block text-primary-600 hover:text-primary-700 text-sm">
                        → Privacy Policy
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="feature">Feature Request</option>
                        <option value="bug">Bug Report</option>
                        <option value="partnership">Partnership</option>
                        <option value="press">Press Inquiry</option>
                      </select>
                    </div>

                    <Input
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief description of your inquiry"
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please provide details about your question or request..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder:text-gray-400 resize-vertical"
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Response Time</h4>
                          <p className="text-gray-600 text-xs">
                            We typically respond within 24 hours. Premium users receive priority support 
                            with faster response times.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Other Ways to Get Help
                </h2>
                <p className="text-lg text-gray-600">
                  Choose the support option that works best for you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Knowledge Base</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Browse our comprehensive help articles and tutorials
                  </p>
                  <a href="/help" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Visit Help Center →
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎥</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Video Tutorials</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Watch step-by-step guides on how to use TruthRecruit
                  </p>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Watch Tutorials →
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👥</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Community Forum</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Connect with other users and share job search insights
                  </p>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Join Community →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}