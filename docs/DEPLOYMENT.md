# TruthRecruit Deployment Guide

## 🚀 Deployment Overview

TruthRecruit is designed for easy deployment using modern cloud platforms. This guide covers deployment options from development to production.

## 📋 Prerequisites

### Development Requirements
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- TypeScript knowledge

### Production Requirements
- Cloud hosting account (Vercel recommended)
- Domain name (optional)
- Environment variables configured
- CI/CD pipeline setup (optional)

## 🛠 Local Development Setup

### 1. Clone and Install

```bash
# Clone repository
git clone https://github.com/your-username/truth-recruit.git
cd truth-recruit

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local
```

### 2. Environment Configuration

Create `.env.local` file:
```bash
# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Future API Keys (for production)
# LINKEDIN_API_KEY=your_key_here
# GLASSDOOR_API_KEY=your_key_here
# OPENAI_API_KEY=your_key_here
```

### 3. Start Development Server

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### 4. Verify Installation

- Visit `http://localhost:3000`
- Test company analysis with example URLs
- Check browser console for errors
- Verify all pages load correctly

## 🌐 Production Deployment Options

### Option 1: Vercel (Recommended)

Vercel provides the easiest deployment path for Next.js applications.

#### Automatic Deployment

1. **Connect Repository:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy from project directory
   vercel
   ```

2. **Configure Environment Variables:**
   - Go to Vercel Dashboard
   - Select your project
   - Navigate to Settings > Environment Variables
   - Add production environment variables

3. **Custom Domain (Optional):**
   - Navigate to Settings > Domains
   - Add your custom domain
   - Configure DNS records as instructed

#### Manual Deployment

```bash
# Build application
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy with specific configuration
vercel --prod --env NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Option 2: Netlify

Alternative deployment platform with similar ease of use.

#### Deploy Steps

1. **Build Configuration:**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "18"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod --dir=.next
   ```

### Option 3: Docker Deployment

For containerized deployments on any platform.

#### Dockerfile

```dockerfile
# Use official Node.js runtime
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build application
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set correct permissions for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Build and Run

```bash
# Build Docker image
docker build -t truth-recruit .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_APP_URL=https://your-domain.com \
  truth-recruit
```

### Option 4: AWS Deployment

For enterprise deployments requiring more control.

#### AWS Amplify

```bash
# Install AWS Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify project
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

#### AWS ECS (Docker)

```yaml
# docker-compose.yml for AWS ECS
version: '3.8'
services:
  truth-recruit:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_APP_URL=https://your-domain.com
      - NODE_ENV=production
```

## 🔐 Environment Variables

### Development Variables

```bash
# .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
NEXT_PUBLIC_ANALYTICS_ID=dev_analytics_id
```

### Production Variables

```bash
# Production environment
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
NEXT_PUBLIC_ANALYTICS_ID=prod_analytics_id

# Future API Keys
LINKEDIN_API_KEY=your_production_key
GLASSDOOR_API_KEY=your_production_key
OPENAI_API_KEY=your_production_key

# Database (future)
DATABASE_URL=postgresql://user:pass@host:port/db

# Redis Cache (future)
REDIS_URL=redis://user:pass@host:port

# Monitoring
SENTRY_DSN=your_sentry_dsn
```

### Environment Variable Management

**Vercel:**
```bash
# Set via CLI
vercel env add NEXT_PUBLIC_APP_URL

# Or via dashboard
# Go to Settings > Environment Variables
```

**Docker:**
```bash
# Via environment file
docker run --env-file .env.production truth-recruit

# Via command line
docker run -e NEXT_PUBLIC_APP_URL=https://domain.com truth-recruit
```

## 🚦 CI/CD Pipeline

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run lint
        run: npm run lint
      
      - name: Build application
        run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

### GitLab CI/CD

Create `.gitlab-ci.yml`:

```yaml
stages:
  - test
  - build
  - deploy

variables:
  NODE_VERSION: "18"

test:
  stage: test
  image: node:18-alpine
  script:
    - npm ci
    - npm run type-check
    - npm run lint
  only:
    - merge_requests
    - main

build:
  stage: build
  image: node:18-alpine
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - .next/
    expire_in: 1 hour
  only:
    - main

deploy:
  stage: deploy
  image: node:18-alpine
  script:
    - npm install -g vercel
    - vercel --token $VERCEL_TOKEN --prod
  only:
    - main
```

## 📊 Performance Optimization

### Build Optimization

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Generate standalone output
  output: 'standalone',
  
  // Image optimization
  images: {
    domains: ['media.licdn.com', 'logo.clearbit.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Bundle analyzer (development)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
      return config;
    },
  }),
};

module.exports = nextConfig;
```

### Caching Strategy

**Vercel Configuration:**
```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "s-maxage=300, stale-while-revalidate=600"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 🔍 Monitoring & Observability

### Health Checks

Create API health check endpoint:
```typescript
// src/app/api/health/route.ts
export async function GET() {
  return Response.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version,
    environment: process.env.NODE_ENV,
  });
}
```

### Error Tracking (Sentry)

```bash
# Install Sentry
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
});
```

### Analytics Integration

```typescript
// lib/analytics.ts
export const trackEvent = (event: string, properties?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, properties);
  }
};

// Usage in components
trackEvent('company_analyzed', {
  company_name: companyName,
  analysis_time: processingTime,
});
```

## 🚨 Troubleshooting

### Common Deployment Issues

**Build Failures:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm ci
npm run build
```

**Environment Variable Issues:**
```bash
# Check environment variables
npm run env-check

# Verify in runtime
console.log('Environment:', process.env.NODE_ENV);
```

**Memory Issues:**
```javascript
// next.config.js - Increase memory limit
const nextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};
```

**Deployment Timeout:**
```javascript
// Increase timeout for API routes
export const maxDuration = 30; // seconds
```

### Debug Mode

Enable debug logging:
```bash
# Development
DEBUG=* npm run dev

# Production
NODE_OPTIONS="--inspect" npm start
```

## 📈 Scaling Considerations

### Performance Monitoring

Set up monitoring for:
- API response times
- Memory usage
- Error rates
- User engagement metrics

### Auto-scaling

**Vercel:** Automatic scaling based on traffic
**AWS ECS:** Configure auto-scaling groups
**Google Cloud Run:** Automatic container scaling

### CDN Configuration

```javascript
// next.config.js
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://cdn.your-domain.com' 
    : undefined,
};
```

## 🔒 Security Checklist

### Pre-deployment Security

- [ ] Environment variables secured
- [ ] API endpoints rate limited
- [ ] Input validation implemented
- [ ] XSS protection enabled
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Dependencies updated
- [ ] No secrets in code
- [ ] Error messages sanitized
- [ ] CORS policies configured

### Post-deployment Security

- [ ] SSL certificate valid
- [ ] Security headers verified
- [ ] Rate limiting functional
- [ ] Error tracking configured
- [ ] Backup procedures tested
- [ ] Monitoring alerts set up

## 🎯 Go-Live Checklist

### Technical Readiness

- [ ] Application builds successfully
- [ ] All tests pass
- [ ] Performance benchmarks met
- [ ] Security scan completed
- [ ] Environment variables configured
- [ ] Domain name configured
- [ ] SSL certificate active
- [ ] CDN configured
- [ ] Monitoring active
- [ ] Backup strategy in place

### Business Readiness

- [ ] Analytics tracking implemented
- [ ] Error monitoring configured
- [ ] User feedback system ready
- [ ] Support documentation complete
- [ ] Team trained on deployment process
- [ ] Rollback plan documented
- [ ] Communication plan ready

---

**Ready to deploy? Choose your deployment method and follow the specific guide above. For production deployments, ensure all security and monitoring measures are in place.**