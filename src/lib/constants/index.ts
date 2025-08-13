export const SCORE_THRESHOLDS = {
  EXCELLENT: 80,
  GOOD: 60,
  FAIR: 40,
  POOR: 20,
} as const;

export const SCORE_COLORS = {
  EXCELLENT: 'success',
  GOOD: 'primary',
  FAIR: 'warning',
  POOR: 'danger',
} as const;

export const COMPANY_SIZES = [
  '1-10 employees',
  '11-50 employees', 
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1001-5000 employees',
  '5001-10000 employees',
  '10001+ employees',
] as const;

export const INDUSTRIES = [
  'Technology',
  'Financial Services',
  'Healthcare',
  'Education',
  'Manufacturing',
  'Retail',
  'Consulting',
  'Media & Communications',
  'Non-profit',
  'Government',
  'Other',
] as const;

export const APP_CONFIG = {
  name: 'TruthRecruit',
  tagline: 'See through the hiring fog',
  description: 'Company intelligence for job seekers',
  version: '1.0.0',
} as const;

export const API_ENDPOINTS = {
  ANALYZE_COMPANY: '/api/analyze',
  GET_COMPANY: '/api/companies',
  HEALTH_CHECK: '/api/health',
} as const;