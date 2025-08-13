import { Company, CompanyAnalysis, JobPosting, SentimentAnalysis, ScoreBreakdown } from '@/types';
import { HiringAuthenticityScorer } from './hiring-authenticity-scorer';
import { calculateOverallScore } from '@/utils';

export class CompanyAnalyzer {
  private hiringScorer = new HiringAuthenticityScorer();

  async analyzeCompany(
    company: Company,
    jobPostings: JobPosting[],
    sentiment: SentimentAnalysis
  ): Promise<CompanyAnalysis> {
    const hiringAuthenticityScore = this.hiringScorer.calculateHiringAuthenticityScore(
      company,
      jobPostings,
      sentiment
    );

    const ghostJobProbability = this.hiringScorer.calculateGhostJobProbability(
      company,
      jobPostings
    );

    const scoreBreakdown: ScoreBreakdown = {
      hiringVelocity: this.calculateHiringVelocityScore(jobPostings),
      responseRate: this.estimateResponseRateScore(sentiment),
      jobPostingDuration: this.calculateJobDurationScore(jobPostings),
      employeeSatisfaction: this.calculateSatisfactionScore(sentiment),
      companyStability: this.calculateStabilityScore(company, sentiment),
    };

    const overallScore = calculateOverallScore(scoreBreakdown);

    const recommendations = this.generateRecommendations(
      hiringAuthenticityScore,
      ghostJobProbability,
      sentiment,
      company
    );

    return {
      companyId: company.id,
      company,
      hiringAuthenticityScore,
      ghostJobProbability,
      overallScore,
      sentiment,
      jobPostings,
      lastAnalyzed: new Date(),
      recommendations,
    };
  }

  private calculateHiringVelocityScore(jobPostings: JobPosting[]): number {
    if (jobPostings.length === 0) return 40;
    
    const recentJobs = jobPostings.filter(job => {
      const days = (Date.now() - job.postedDate.getTime()) / (1000 * 60 * 60 * 24);
      return days <= 30;
    });

    // Optimal range: 3-10 recent postings
    if (recentJobs.length >= 3 && recentJobs.length <= 10) return 85;
    if (recentJobs.length >= 1 && recentJobs.length <= 15) return 70;
    if (recentJobs.length > 15) return 50;
    return 45;
  }

  private estimateResponseRateScore(sentiment: SentimentAnalysis): number {
    const baseScore = (sentiment.overallRating / 5) * 60;
    const trendBonus = sentiment.recentTrend === 'improving' ? 20 : 
                     sentiment.recentTrend === 'stable' ? 10 : -5;
    
    return Math.min(100, Math.max(0, baseScore + trendBonus + 20));
  }

  private calculateJobDurationScore(jobPostings: JobPosting[]): number {
    if (jobPostings.length === 0) return 50;

    const avgDuration = jobPostings.reduce((total, job) => {
      const days = (Date.now() - job.postedDate.getTime()) / (1000 * 60 * 60 * 24);
      return total + days;
    }, 0) / jobPostings.length;

    if (avgDuration >= 5 && avgDuration <= 25) return 90;
    if (avgDuration >= 1 && avgDuration <= 45) return 75;
    if (avgDuration <= 60) return 60;
    return 40;
  }

  private calculateSatisfactionScore(sentiment: SentimentAnalysis): number {
    return Math.round((sentiment.overallRating / 5) * 100);
  }

  private calculateStabilityScore(company: Company, sentiment: SentimentAnalysis): number {
    const age = company.founded ? new Date().getFullYear() - company.founded : 0;
    const ageScore = Math.min(50, age * 2); // Max 50 points for age
    
    const sentimentScore = sentiment.positivePercentage / 2; // Max 50 points
    
    return Math.round(ageScore + sentimentScore);
  }

  private generateRecommendations(
    hiringScore: number,
    ghostProbability: number,
    sentiment: SentimentAnalysis,
    company: Company
  ): string[] {
    const recommendations: string[] = [];

    // Hiring authenticity recommendations
    if (hiringScore >= 80) {
      recommendations.push('✅ Strong hiring authenticity - good chance of genuine opportunities');
    } else if (hiringScore >= 60) {
      recommendations.push('⚠️ Moderate hiring authenticity - research specific roles carefully');
    } else {
      recommendations.push('❌ Low hiring authenticity - proceed with caution');
    }

    // Ghost job recommendations
    if (ghostProbability <= 20) {
      recommendations.push('✅ Low ghost job risk - postings appear legitimate');
    } else if (ghostProbability <= 50) {
      recommendations.push('⚠️ Medium ghost job risk - verify job requirements and posting dates');
    } else {
      recommendations.push('❌ High ghost job risk - many postings may be fake or outdated');
    }

    // Sentiment-based recommendations
    if (sentiment.overallRating >= 4.0) {
      recommendations.push('✅ High employee satisfaction - positive work environment likely');
    } else if (sentiment.overallRating >= 3.5) {
      recommendations.push('⚠️ Mixed employee feedback - research team-specific reviews');
    } else {
      recommendations.push('❌ Poor employee satisfaction - consider workplace culture carefully');
    }

    // Trend-based recommendations
    if (sentiment.recentTrend === 'improving') {
      recommendations.push('📈 Employee sentiment trending upward - company may be improving');
    } else if (sentiment.recentTrend === 'declining') {
      recommendations.push('📉 Employee sentiment declining - investigate recent changes');
    }

    // Company maturity recommendations
    const age = company.founded ? new Date().getFullYear() - company.founded : 0;
    if (age < 2) {
      recommendations.push('🚀 Early-stage company - high potential but higher risk');
    } else if (age >= 10) {
      recommendations.push('🏢 Established company - likely stable but potentially less innovative');
    }

    return recommendations;
  }
}