import { Company, JobPosting, SentimentAnalysis } from '@/types';

interface HiringAuthenticityFactors {
  hiringVelocity: number;
  responseRate: number;
  jobPostingDuration: number;
  jobQualityScore: number;
  companyMaturity: number;
}

export class HiringAuthenticityScorer {
  calculateHiringAuthenticityScore(
    company: Company,
    jobPostings: JobPosting[],
    sentiment: SentimentAnalysis
  ): number {
    const factors = this.analyzeFacotrs(company, jobPostings, sentiment);
    
    const weights = {
      hiringVelocity: 0.3,
      responseRate: 0.25,
      jobPostingDuration: 0.2,
      jobQualityScore: 0.15,
      companyMaturity: 0.1,
    };

    const weightedScore = 
      factors.hiringVelocity * weights.hiringVelocity +
      factors.responseRate * weights.responseRate +
      factors.jobPostingDuration * weights.jobPostingDuration +
      factors.jobQualityScore * weights.jobQualityScore +
      factors.companyMaturity * weights.companyMaturity;

    return Math.round(Math.min(100, Math.max(0, weightedScore)));
  }

  private analyzeFacotrs(
    company: Company,
    jobPostings: JobPosting[],
    sentiment: SentimentAnalysis
  ): HiringAuthenticityFactors {
    return {
      hiringVelocity: this.calculateHiringVelocity(jobPostings),
      responseRate: this.estimateResponseRate(sentiment),
      jobPostingDuration: this.analyzeJobPostingDuration(jobPostings),
      jobQualityScore: this.assessJobQuality(jobPostings),
      companyMaturity: this.assessCompanyMaturity(company),
    };
  }

  private calculateHiringVelocity(jobPostings: JobPosting[]): number {
    if (jobPostings.length === 0) return 30;

    const recentPostings = jobPostings.filter(job => {
      const daysSincePosted = Math.floor(
        (Date.now() - job.postedDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      return daysSincePosted <= 30;
    });

    // Higher score for moderate posting rate (not too many, not too few)
    if (recentPostings.length >= 5 && recentPostings.length <= 15) return 85;
    if (recentPostings.length >= 3 && recentPostings.length <= 20) return 70;
    if (recentPostings.length >= 1) return 60;
    return 40;
  }

  private estimateResponseRate(sentiment: SentimentAnalysis): number {
    // Use overall rating and positive percentage as proxy for response rate
    const ratingScore = (sentiment.overallRating / 5) * 100;
    const positivityBonus = sentiment.positivePercentage * 0.3;
    
    return Math.min(100, ratingScore + positivityBonus);
  }

  private analyzeJobPostingDuration(jobPostings: JobPosting[]): number {
    if (jobPostings.length === 0) return 50;

    const averageDaysPosted = jobPostings.reduce((total, job) => {
      const days = Math.floor(
        (Date.now() - job.postedDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      return total + days;
    }, 0) / jobPostings.length;

    // Sweet spot: 7-30 days (indicates active hiring but not desperate)
    if (averageDaysPosted >= 7 && averageDaysPosted <= 30) return 90;
    if (averageDaysPosted >= 1 && averageDaysPosted <= 60) return 70;
    if (averageDaysPosted >= 60 && averageDaysPosted <= 90) return 50;
    return 30;
  }

  private assessJobQuality(jobPostings: JobPosting[]): number {
    if (jobPostings.length === 0) return 50;

    // Assess based on reasonable requirements and diverse positions
    const departments = new Set(jobPostings.map(job => job.department));
    const experienceLevels = new Set(jobPostings.map(job => job.experienceLevel));
    
    let qualityScore = 70; // Base score
    
    // Bonus for diversity in departments
    if (departments.size > 2) qualityScore += 15;
    else if (departments.size > 1) qualityScore += 10;
    
    // Bonus for diversity in experience levels
    if (experienceLevels.size > 2) qualityScore += 10;
    else if (experienceLevels.size > 1) qualityScore += 5;
    
    // Penalty for too many postings (could indicate desperation or ghost jobs)
    if (jobPostings.length > 50) qualityScore -= 20;
    else if (jobPostings.length > 25) qualityScore -= 10;
    
    return Math.min(100, Math.max(0, qualityScore));
  }

  private assessCompanyMaturity(company: Company): number {
    const currentYear = new Date().getFullYear();
    const age = company.founded ? currentYear - company.founded : 0;
    
    // Bonus for established companies (but not penalty for startups)
    if (age >= 10) return 90;
    if (age >= 5) return 80;
    if (age >= 2) return 70;
    return 60; // Startups get benefit of doubt
  }

  calculateGhostJobProbability(
    company: Company,
    jobPostings: JobPosting[]
  ): number {
    let ghostScore = 0;
    
    // Factor 1: Too many similar positions
    const titleCounts = jobPostings.reduce((acc, job) => {
      acc[job.title] = (acc[job.title] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const duplicateTitles = Object.values(titleCounts).filter(count => count > 3);
    if (duplicateTitles.length > 0) ghostScore += 30;
    
    // Factor 2: Unrealistic posting frequency
    if (jobPostings.length > 30) ghostScore += 25;
    else if (jobPostings.length > 20) ghostScore += 15;
    
    // Factor 3: All postings very recent (could indicate mass posting)
    const allRecent = jobPostings.every(job => {
      const days = Math.floor(
        (Date.now() - job.postedDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      return days <= 3;
    });
    
    if (allRecent && jobPostings.length > 10) ghostScore += 20;
    
    // Factor 4: Unrealistic requirements combinations
    const seniorCount = jobPostings.filter(job => 
      job.experienceLevel === 'Senior'
    ).length;
    
    if (seniorCount / jobPostings.length > 0.8) ghostScore += 15;
    
    return Math.min(100, ghostScore);
  }
}