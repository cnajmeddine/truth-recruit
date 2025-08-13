'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input, Button, LoadingSpinner } from '@/components/ui';
import { validateLinkedInUrl } from '@/lib/validations';

export const CompanyAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateLinkedInUrl(url);
    if (!validation.isValid) {
      setError(validation.error || '');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ linkedinUrl: url }),
      });

      const data = await response.json();

      if (data.success) {
        router.push(`/report/${data.data.companyId}`);
      } else {
        setError(data.error || 'Failed to analyze company');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Analyze Any Company
          </h2>
          <p className="text-lg text-gray-600">
            Paste a LinkedIn company URL to get instant hiring intelligence
          </p>
        </div>

        <div className="space-y-4">
          <Input
            variant="large"
            type="url"
            placeholder="https://www.linkedin.com/company/example-company/"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            error={error}
            leftIcon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            }
          />
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            isLoading={isLoading}
            disabled={!url.trim()}
          >
            {isLoading ? 'Analyzing Company...' : 'Analyze Company'}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Free analysis • Takes 30-60 seconds • No signup required
          </p>
        </div>
      </form>

      {/* Sample URLs */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          Try these examples:
        </h3>
        <div className="space-y-2">
          {[
            'https://www.linkedin.com/company/microsoft/',
            'https://www.linkedin.com/company/google/',
            'https://www.linkedin.com/company/netflix/',
          ].map((exampleUrl, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setUrl(exampleUrl)}
              className="block w-full text-left text-sm text-primary-600 hover:text-primary-700 p-2 rounded hover:bg-white transition-colors"
            >
              {exampleUrl}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};