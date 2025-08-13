export interface Company {
  id: string;
  name: string;
  linkedinUrl: string;
  industry: string;
  size: string;
  employeeCount: number;
  location: string;
  description?: string;
  logo?: string;
  website?: string;
  founded?: number;
}

export interface CompanyAnalysis {
  companyId: string;
  company: Company;
  hiringAuthenticityScore: number;
  ghostJobProbability: number;
  overallScore: number;
  sentiment: SentimentAnalysis;
  jobPostings: JobPosting[];
  lastAnalyzed: Date;
  recommendations: string[];
}

export interface SentimentAnalysis {
  overallRating: number;
  reviewCount: number;
  positivePercentage: number;
  negativePercentage: number;
  recentTrend: 'improving' | 'declining' | 'stable';
  keyInsights: string[];
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  postedDate: Date;
  isRemote: boolean;
  experienceLevel: string;
  applicantCount?: number;
}

export interface ScoreBreakdown {
  hiringVelocity: number;
  responseRate: number;
  jobPostingDuration: number;
  employeeSatisfaction: number;
  companyStability: number;
}

export interface AnalysisRequest {
  linkedinUrl: string;
  userEmail?: string;
}

export interface AnalysisResponse {
  success: boolean;
  data?: CompanyAnalysis;
  error?: string;
  processingTime: number;
}