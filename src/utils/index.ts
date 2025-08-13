import { SCORE_THRESHOLDS } from '@/lib/constants';
import { ScoreBreakdown } from '@/types';

export const formatScore = (score: number): string => {
  return Math.round(score).toString();
};

export const getScoreLabel = (score: number): string => {
  if (score >= SCORE_THRESHOLDS.EXCELLENT) return 'Excellent';
  if (score >= SCORE_THRESHOLDS.GOOD) return 'Good';
  if (score >= SCORE_THRESHOLDS.FAIR) return 'Fair';
  return 'Poor';
};

export const getScoreColor = (score: number): string => {
  if (score >= SCORE_THRESHOLDS.EXCELLENT) return 'success';
  if (score >= SCORE_THRESHOLDS.GOOD) return 'primary';
  if (score >= SCORE_THRESHOLDS.FAIR) return 'warning';
  return 'danger';
};

export const getScoreEmoji = (score: number): string => {
  if (score >= SCORE_THRESHOLDS.EXCELLENT) return '🟢';
  if (score >= SCORE_THRESHOLDS.GOOD) return '🔵';
  if (score >= SCORE_THRESHOLDS.FAIR) return '🟡';
  return '🔴';
};

export const calculateOverallScore = (breakdown: ScoreBreakdown): number => {
  const weights = {
    hiringVelocity: 0.25,
    responseRate: 0.25,
    jobPostingDuration: 0.20,
    employeeSatisfaction: 0.20,
    companyStability: 0.10,
  };

  return (
    breakdown.hiringVelocity * weights.hiringVelocity +
    breakdown.responseRate * weights.responseRate +
    breakdown.jobPostingDuration * weights.jobPostingDuration +
    breakdown.employeeSatisfaction * weights.employeeSatisfaction +
    breakdown.companyStability * weights.companyStability
  );
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const extractCompanySlug = (linkedinUrl: string): string | null => {
  try {
    const url = new URL(linkedinUrl);
    const pathParts = url.pathname.split('/');
    const companyIndex = pathParts.findIndex(part => part === 'company');
    
    if (companyIndex !== -1 && pathParts[companyIndex + 1]) {
      return pathParts[companyIndex + 1];
    }
    
    return null;
  } catch {
    return null;
  }
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};