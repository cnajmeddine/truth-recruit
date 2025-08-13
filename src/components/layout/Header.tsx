'use client';

import Link from 'next/link';
import { APP_CONFIG } from '@/lib/constants';

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{APP_CONFIG.name}</h1>
              <p className="text-xs text-gray-500 -mt-1">{APP_CONFIG.tagline}</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/how-it-works" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </a>
            <a 
              href="/examples" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Examples
            </a>
            <a 
              href="/pricing" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="btn-secondary hidden sm:inline-flex">
              Sign In
            </button>
            <button className="btn-primary">
              Try Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};