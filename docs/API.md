# TruthRecruit API Documentation

## 📡 API Overview

The TruthRecruit API provides company analysis services through RESTful endpoints. The API analyzes companies based on LinkedIn URLs and returns comprehensive hiring intelligence.

**Base URL:** `https://truthrecruit.com/api` (production) or `http://localhost:3000/api` (development)

## 🔐 Authentication

Currently, the API is publicly accessible without authentication for the MVP. Future versions will implement API key authentication.

## 📊 Endpoints

### POST /api/analyze

Analyzes a company based on its LinkedIn URL and returns comprehensive hiring intelligence.

**Endpoint:** `POST /api/analyze`

**Content-Type:** `application/json`

#### Request Body

```typescript
interface AnalysisRequest {
  linkedinUrl: string;      // Required: LinkedIn company page URL
  userEmail?: string;       // Optional: User email for analytics
}
```

**Example Request:**
```json
{
  "linkedinUrl": "https://www.linkedin.com/company/microsoft/",
  "userEmail": "user@example.com"
}
```

#### Response

**Success Response (200 OK):**
```typescript
interface AnalysisResponse {
  success: true;
  data: CompanyAnalysis;
  processingTime: number;   // Time in milliseconds
}
```

**Error Response (4xx/5xx):**
```typescript
interface AnalysisResponse {
  success: false;
  error: string;
  processingTime: number;
}
```

#### Example Success Response

```json
{
  "success": true,
  "data": {
    "companyId": "abc123def456",
    "company": {
      "id": "abc123def456",
      "name": "Microsoft",
      "linkedinUrl": "https://www.linkedin.com/company/microsoft/",
      "industry": "Technology",
      "size": "100,001+ employees",
      "employeeCount": 200000,
      "location": "Redmond, WA",
      "description": "At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.",
      "logo": "https://logo.clearbit.com/microsoft.com",
      "website": "https://www.microsoft.com",
      "founded": 1975
    },
    "hiringAuthenticityScore": 85,
    "ghostJobProbability": 15,
    "overallScore": 82,
    "sentiment": {
      "overallRating": 4.4,
      "reviewCount": 15420,
      "positivePercentage": 78,
      "negativePercentage": 22,
      "recentTrend": "improving",
      "keyInsights": [
        "Strong work-life balance praised by employees",
        "Excellent career development opportunities",
        "Competitive compensation and benefits",
        "Some concerns about bureaucracy in large teams"
      ]
    },
    "jobPostings": [
      {
        "id": "job1",
        "title": "Senior Software Engineer",
        "department": "Engineering",
        "location": "Remote",
        "postedDate": "2025-01-06T00:00:00.000Z",
        "isRemote": true,
        "experienceLevel": "Senior",
        "applicantCount": 150
      }
    ],
    "lastAnalyzed": "2025-01-13T00:00:00.000Z",
    "recommendations": [
      "✅ Strong hiring authenticity - good chance of genuine opportunities",
      "✅ Low ghost job risk - postings appear legitimate",
      "✅ High employee satisfaction - positive work environment likely",
      "📈 Employee sentiment trending upward - company may be improving"
    ]
  },
  "processingTime": 2340
}
```

#### Error Responses

**Invalid LinkedIn URL (400 Bad Request):**
```json
{
  "success": false,
  "error": "Please enter a valid LinkedIn company page URL",
  "processingTime": 45
}
```

**Scraping Failed (500 Internal Server Error):**
```json
{
  "success": false,
  "error": "Failed to fetch company data",
  "processingTime": 1200
}
```

**Rate Limit Exceeded (429 Too Many Requests):**
```json
{
  "success": false,
  "error": "Rate limit exceeded. Please try again later.",
  "processingTime": 10
}
```

## 📋 Data Models

### Company

```typescript
interface Company {
  id: string;                    // Unique company identifier
  name: string;                  // Company name
  linkedinUrl: string;           // Original LinkedIn URL
  industry: string;              // Business industry
  size: string;                  // Employee size range
  employeeCount: number;         // Approximate employee count
  location: string;              // Primary location
  description?: string;          // Company description
  logo?: string;                // Company logo URL
  website?: string;             // Company website
  founded?: number;             // Founded year
}
```

### CompanyAnalysis

```typescript
interface CompanyAnalysis {
  companyId: string;                    // Reference to company
  company: Company;                     // Full company object
  hiringAuthenticityScore: number;      // 0-100 hiring authenticity
  ghostJobProbability: number;          // 0-100 ghost job likelihood
  overallScore: number;                // 0-100 overall rating
  sentiment: SentimentAnalysis;         // Employee sentiment data
  jobPostings: JobPosting[];           // Recent job postings
  lastAnalyzed: Date;                  // Analysis timestamp
  recommendations: string[];            // Action recommendations
}
```

### SentimentAnalysis

```typescript
interface SentimentAnalysis {
  overallRating: number;              // 1-5 star rating
  reviewCount: number;                // Total reviews analyzed
  positivePercentage: number;         // % positive reviews
  negativePercentage: number;         // % negative reviews
  recentTrend: 'improving' | 'declining' | 'stable';
  keyInsights: string[];              // Key sentiment insights
}
```

### JobPosting

```typescript
interface JobPosting {
  id: string;                        // Unique posting ID
  title: string;                     // Job title
  department: string;                // Department/team
  location: string;                  // Job location
  postedDate: Date;                  // Date posted
  isRemote: boolean;                 // Remote work option
  experienceLevel: string;           // Required experience level
  applicantCount?: number;           // Number of applicants
}
```

## 🔍 Request/Response Examples

### Successful Analysis Request

**cURL Example:**
```bash
curl -X POST https://truthrecruit.com/api/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "linkedinUrl": "https://www.linkedin.com/company/google/",
    "userEmail": "analyst@company.com"
  }'
```

**JavaScript/Fetch Example:**
```javascript
const response = await fetch('/api/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    linkedinUrl: 'https://www.linkedin.com/company/netflix/',
    userEmail: 'user@example.com'
  }),
});

const result = await response.json();

if (result.success) {
  console.log('Analysis completed:', result.data);
  console.log('Processing time:', result.processingTime + 'ms');
} else {
  console.error('Analysis failed:', result.error);
}
```

**React Hook Example:**
```javascript
const useCompanyAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const analyzeCompany = async (linkedinUrl) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ linkedinUrl }),
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error);
      }
      
      return result.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  return { analyzeCompany, loading, error };
};
```

## ⚡ Performance Considerations

### Response Times
- **Target Response Time:** < 3 seconds
- **Average Response Time:** 1.5-2.5 seconds
- **Timeout:** 30 seconds maximum

### Rate Limiting
- **Current Limit:** No rate limiting (MVP)
- **Future Limits:** 10 requests per minute per IP
- **Burst Handling:** Queue requests during high load

### Caching Strategy
- **Company Data:** Cached for 24 hours
- **Analysis Results:** Cached for 1 hour
- **Job Postings:** Cached for 6 hours

## 🚫 Error Handling

### Error Categories

**Client Errors (4xx):**
- `400 Bad Request`: Invalid input parameters
- `422 Unprocessable Entity`: Valid JSON but invalid data
- `429 Too Many Requests`: Rate limit exceeded

**Server Errors (5xx):**
- `500 Internal Server Error`: Unexpected server error
- `502 Bad Gateway`: Upstream service failure
- `503 Service Unavailable`: Service temporarily down
- `504 Gateway Timeout`: Request timeout

### Error Response Format

All errors follow a consistent format:
```json
{
  "success": false,
  "error": "Human-readable error message",
  "processingTime": 123,
  "code": "ERROR_CODE",        // Optional: Machine-readable code
  "details": {                 // Optional: Additional error context
    "field": "linkedinUrl",
    "reason": "Invalid URL format"
  }
}
```

### Client Error Handling Best Practices

```javascript
const handleAnalysisError = (error, result) => {
  switch (result?.error) {
    case 'Invalid LinkedIn URL':
      showUserMessage('Please check the LinkedIn URL format');
      break;
    case 'Rate limit exceeded':
      showUserMessage('Please wait a moment before trying again');
      break;
    case 'Failed to fetch company data':
      showUserMessage('Unable to analyze this company. Please try another.');
      break;
    default:
      showUserMessage('Something went wrong. Please try again later.');
  }
};
```

## 🔒 Security

### Input Validation
- LinkedIn URL format validation
- URL scheme validation (https only)
- Domain validation (linkedin.com only)
- Path validation (/company/ required)

### XSS Prevention
- All inputs sanitized before processing
- HTML entities escaped in responses
- CSP headers implemented

### CSRF Protection
- SameSite cookie attributes
- Origin header validation
- CSRF token validation (future)

## 📊 Monitoring & Analytics

### Request Metrics
- Request count by endpoint
- Response time percentiles (p50, p90, p99)
- Error rate by error type
- Success rate over time

### Business Metrics
- Most analyzed companies
- Analysis completion rate
- User engagement patterns
- Geographic usage distribution

### Performance Monitoring

```typescript
// Example monitoring integration
interface APIMetrics {
  endpoint: string;
  method: string;
  statusCode: number;
  responseTime: number;
  timestamp: Date;
  userAgent?: string;
  clientIP?: string;
}
```

## 🚀 Future API Enhancements

### Version 2.0 Features
- **Batch Analysis:** Analyze multiple companies in one request
- **Webhooks:** Real-time notifications for analysis completion
- **Comparison API:** Compare multiple companies side-by-side
- **Historical Data:** Track company changes over time

### Authentication & Authorization
```typescript
// Future API key authentication
interface AuthenticatedRequest {
  headers: {
    'Authorization': 'Bearer api_key_here'
    'X-API-Version': '2.0'
  }
}
```

### Advanced Filtering
```typescript
// Future advanced query parameters
interface AdvancedAnalysisRequest {
  linkedinUrl: string;
  includeHistorical: boolean;
  analysisDepth: 'basic' | 'detailed' | 'comprehensive';
  includeComparisons: string[];  // Other company URLs
}
```

---

**Note:** This API is currently in MVP stage. Production deployment will include additional security measures, rate limiting, and authentication requirements.