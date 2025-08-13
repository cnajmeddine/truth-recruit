# TruthRecruit - Technical Documentation

> "See through the hiring fog" - Company Intelligence for Job Seekers

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Getting Started](#getting-started)
4. [API Documentation](#api-documentation)
5. [Components Documentation](#components-documentation)
6. [Services Documentation](#services-documentation)
7. [Development Guidelines](#development-guidelines)
8. [Deployment](#deployment)
9. [Testing Strategy](#testing-strategy)
10. [Contributing](#contributing)

## 🚀 Project Overview

TruthRecruit is a modern web application built with Next.js 14 that helps job seekers analyze companies before applying. It provides real-time intelligence on hiring practices, employee satisfaction, and ghost job detection.

### Key Features

- **Hiring Authenticity Score**: Real hiring velocity vs. posted jobs ratio
- **Ghost Job Detection**: AI-powered analysis to identify fake job postings
- **Employee Sentiment Analysis**: Real-time analysis of employee satisfaction
- **Company Intelligence**: Comprehensive company profiling and analysis

### Technology Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (serverless functions)
- **Styling**: Tailwind CSS with custom design system
- **Data Processing**: Custom scraping services with rate limiting
- **Type Safety**: Full TypeScript implementation

## 🏗 Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page
│   ├── api/              # API routes
│   │   └── analyze/      # Company analysis endpoint
│   └── report/           # Dynamic report pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components (Header, Footer)
│   └── features/         # Feature-specific components
├── lib/                  # Utility libraries
│   ├── constants/        # Application constants
│   └── validations/      # Input validation functions
├── services/             # Business logic services
│   ├── scraping/         # Data scraping services
│   └── scoring/          # Scoring algorithm services
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

### Modular Monolithic Approach

The application follows a modular monolithic architecture:

- **Separation of Concerns**: Clear boundaries between UI, business logic, and data layers
- **Feature-based Organization**: Components and services organized by feature
- **Shared Infrastructure**: Common utilities, types, and configurations
- **Scalable Structure**: Easy to extract modules into microservices later

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- TypeScript knowledge

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

### Environment Variables

Create a `.env.local` file:

```bash
# Add any API keys for production deployment
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Development Workflow

1. **Start development server**: `npm run dev`
2. **Visit**: `http://localhost:3000`
3. **Make changes**: Files auto-reload in development
4. **Type check**: Run `npm run type-check` before commits
5. **Lint**: Run `npm run lint` to check code style

## 📡 API Documentation

### POST /api/analyze

Analyzes a company based on LinkedIn URL.

**Request Body:**
```json
{
  "linkedinUrl": "https://www.linkedin.com/company/microsoft/",
  "userEmail": "user@example.com" // optional
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "companyId": "abc123",
    "company": { /* Company object */ },
    "hiringAuthenticityScore": 85,
    "ghostJobProbability": 15,
    "overallScore": 82,
    "sentiment": { /* SentimentAnalysis object */ },
    "jobPostings": [ /* JobPosting array */ ],
    "lastAnalyzed": "2025-01-01T00:00:00.000Z",
    "recommendations": [ /* string array */ ]
  },
  "processingTime": 1234
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Invalid LinkedIn URL",
  "processingTime": 100
}
```

## 🧩 Components Documentation

### UI Components (`src/components/ui/`)

#### Button
```tsx
<Button variant="primary" size="lg" isLoading={false}>
  Click me
</Button>
```

Props:
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'  
- `isLoading`: boolean
- `leftIcon`, `rightIcon`: ReactNode

#### Input
```tsx
<Input 
  label="Company URL"
  placeholder="https://linkedin.com/company/..."
  error="Invalid URL"
  leftIcon={<IconComponent />}
/>
```

#### Card
```tsx
<Card variant="elevated" padding="lg">
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Feature Components (`src/components/features/`)

#### CompanyAnalyzer
Main component for URL input and analysis initiation.

#### ScoreCard
Displays individual metric scores with trends and details.

#### CompanyHeader
Displays company information and branding.

#### RecommendationsList
Shows actionable recommendations based on analysis.

#### JobPostingsTable
Displays recent job postings in a formatted table.

## ⚙️ Services Documentation

### Scraping Services (`src/services/scraping/`)

#### LinkedInScraper
```typescript
const scraper = new LinkedInScraper();
const result = await scraper.scrapeCompanyProfile(linkedinUrl);
const jobs = await scraper.scrapeJobPostings(companySlug);
```

#### GlassdoorScraper  
```typescript
const scraper = new GlassdoorScraper();
const sentiment = await scraper.scrapeSentimentData(companyName);
```

### Scoring Services (`src/services/scoring/`)

#### HiringAuthenticityScorer
```typescript
const scorer = new HiringAuthenticityScorer();
const score = scorer.calculateHiringAuthenticityScore(company, jobs, sentiment);
const ghostProb = scorer.calculateGhostJobProbability(company, jobs);
```

#### CompanyAnalyzer
```typescript
const analyzer = new CompanyAnalyzer();
const analysis = await analyzer.analyzeCompany(company, jobs, sentiment);
```

## 📋 Development Guidelines

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **Naming**: camelCase for variables, PascalCase for components
- **File Structure**: Index exports for clean imports
- **Comments**: Only for complex business logic

### Component Guidelines

- **Single Responsibility**: One component per file
- **Props Interface**: Always define TypeScript interfaces
- **Accessibility**: Include ARIA labels and semantic HTML
- **Performance**: Use React.memo for expensive components
- **Testing**: Include unit tests for complex components

### State Management

- **Local State**: useState for component-specific state
- **Server State**: Native fetch with loading/error states  
- **Global State**: Context API for shared UI state
- **Caching**: Simple in-memory caching for API responses

### API Design

- **RESTful**: Follow REST conventions
- **Error Handling**: Consistent error response format
- **Validation**: Input validation on all endpoints
- **Rate Limiting**: Implement for scraping services
- **Documentation**: OpenAPI/Swagger for production

## 🚀 Deployment

### Production Build

```bash
# Build the application
npm run build

# Test production build locally
npm start
```

### Deployment Platforms

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Configuration

Production environment variables:
```bash
NEXT_PUBLIC_APP_URL=https://truthrecruit.com
NODE_ENV=production
```

## 🧪 Testing Strategy

### Testing Pyramid

1. **Unit Tests**: Components and utility functions
2. **Integration Tests**: API endpoints and service integration  
3. **E2E Tests**: Critical user journeys

### Test Structure (Future Implementation)

```bash
__tests__/
├── components/       # Component tests
├── services/        # Service tests  
├── utils/           # Utility tests
└── e2e/            # End-to-end tests
```

### Testing Tools (Recommended)

- **Jest**: Unit testing framework
- **React Testing Library**: Component testing
- **MSW**: API mocking
- **Playwright**: E2E testing

## 🤝 Contributing

### Development Process

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`  
5. **Open** Pull Request

### Code Review Checklist

- [ ] TypeScript types properly defined
- [ ] Components follow naming conventions
- [ ] No console.logs in production code
- [ ] Error handling implemented
- [ ] Performance considerations addressed
- [ ] Accessibility standards met

### Commit Message Format

```
type(scope): description

feat(analyzer): add ghost job detection algorithm
fix(ui): resolve button loading state issue  
docs(api): update endpoint documentation
refactor(scoring): optimize calculation performance
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Best Practices](https://react.dev/learn)

## 📞 Support

For technical questions or issues:
- Create an issue in the repository
- Check existing documentation
- Review code examples in the codebase

---

**Built with ❤️ for job seekers everywhere**