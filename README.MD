# TruthRecruit - Company Intelligence for Job Seekers
*"See through the hiring fog"*

## 📊 Core Value Proposition
A web-based company profiler that analyzes companies in real-time to help job seekers identify legitimate opportunities, avoid ghost jobs, and make informed career decisions.

---

## 🎯 Key Performance Indicators (KPIs) We'll Provide

### 1. **Hiring Authenticity Score** (0-100)
- Real hiring velocity vs. posted jobs ratio
- Response rate to applications
- Job posting duration analysis
- Interview-to-hire conversion rate

### 2. **Ghost Job Detection**
- Percentage likelihood job is fake (AI-powered)
- Job posting age and refresh patterns
- Similar roles posted repeatedly
- Unrealistic qualification combinations

### 3. **Company Health Metrics**
- Financial stability score
- Recent funding/revenue trends
- Layoff risk assessment
- Employee growth/decline rate

### 4. **Employee Sentiment Analysis**
- Glassdoor sentiment trends (6-month moving average)
- LinkedIn employee engagement score
- Satisfaction by department
- Leadership approval ratings

### 5. **Recruiter Legitimacy Check**
- Recruiter profile verification
- Historical hiring success rate
- Response time patterns
- Communication authenticity score

### 6. **Market Intelligence**
- Salary competitiveness index
- Industry position ranking
- Competitor hiring comparison
- Skills demand trends

---

## 🎨 User Experience Flow

### Landing Page
```
1. Hero: "Paste any company's LinkedIn URL → Get instant hiring intelligence"
2. Search bar: LinkedIn company URL input
3. Sample report preview
4. Testimonials from job seekers
```

### Analysis Process
```
1. User pastes LinkedIn company URL
2. Loading screen with progress indicators:
   - "Scanning job postings..."
   - "Analyzing employee sentiment..."
   - "Checking financial health..."
   - "Detecting ghost patterns..."
3. Results page with comprehensive report
```

### Report Dashboard
```
- Executive Summary (traffic light system: 🟢🟡🔴)
- Interactive KPI cards with tooltips
- Timeline charts for trends
- Downloadable PDF report
- "Similar Companies" recommendations
```

---

## 🛠 Technology Stack

### Frontend
- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for data visualization
- **React Hook Form** for form handling

### Backend
- **Next.js API Routes** (serverless functions)
- **Prisma ORM** with PostgreSQL
- **Redis** for caching
- **OpenAI API** for sentiment analysis
- **Cheerio** for web scraping

### Infrastructure
- **Vercel** for deployment
- **Supabase** for database
- **Upstash Redis** for caching
- **Cloudflare** for CDN/security

### Analytics & Monitoring
- **PostHog** for user analytics
- **Sentry** for error tracking
- **Uptime Robot** for monitoring

---

## 📊 Data Sources & APIs

### Primary Data Sources

#### 1. **LinkedIn Data**
- **Method**: Web scraping (respectful rate limits)
- **Data**: Company info, employee count, job postings, recent hires
- **Tools**: Puppeteer + rotating proxies
- **Backup**: LinkedIn Sales Navigator API (if budget allows)

#### 2. **Glassdoor Data**
- **Method**: Web scraping with anti-detection
- **Data**: Reviews, ratings, salary data, interview experiences
- **Tools**: Playwright + CAPTCHA solving service

#### 3. **Company Financial Data**
- **Crunchbase API**: Funding, investors, employee count
- **Alpha Vantage API**: Public company financials
- **SEC Edgar API**: Public filings (free)

#### 4. **Job Posting Data**
- **Indeed API**: Job listings and posting dates
- **Adzuna API**: Salary trends and job market data
- **Google Jobs API**: Comprehensive job listings

#### 5. **News & Sentiment**
- **NewsAPI**: Recent company news
- **Twitter API**: Social sentiment
- **Reddit API**: Employee discussions (r/jobs, company subreddits)

### Specific API Endpoints

```javascript
// Crunchbase API
GET https://api.crunchbase.com/api/v4/entities/organizations/{company_name}

// Alpha Vantage
GET https://www.alphavantage.co/query?function=OVERVIEW&symbol={ticker}

// NewsAPI
GET https://newsapi.org/v2/everything?q={company_name}&sortBy=publishedAt

// Indeed API
GET https://api.indeed.com/ads/apisearch?publisher={key}&q={company_name}

// Adzuna API
GET https://api.adzuna.com/v1/api/jobs/{country}/search?app_id={id}&app_key={key}
```

---

## 🏗 Feature Roadmap

### MVP (Week 1-2)
- [ ] Company URL input and validation
- [ ] Basic LinkedIn scraping (company info, employee count)
- [ ] Glassdoor sentiment scraping
- [ ] Simple scoring algorithm
- [ ] Basic report generation

### Version 1.0 (Week 3-4)
- [ ] Ghost job detection algorithm
- [ ] Financial health integration
- [ ] News sentiment analysis
- [ ] Interactive dashboard
- [ ] PDF report export

### Version 1.5 (Week 5-6)
- [ ] Recruiter verification system
- [ ] Salary competitiveness analysis
- [ ] Company comparison tool
- [ ] Email alerts for changes

### Version 2.0 (Week 7-8)
- [ ] Chrome extension
- [ ] API for other tools
- [ ] Advanced ML models
- [ ] Company database

---

## 💰 Monetization Strategy

### Freemium Model
- **Free**: 3 company analyses per month
- **Pro ($9.99/month)**: Unlimited analyses, PDF exports, email alerts
- **Teams ($29.99/month)**: Multiple users, collaboration features

### Additional Revenue
- **Affiliate**: Job board partnerships
- **Data licensing**: Sell anonymized insights
- **Premium reports**: Deep-dive analyses ($49.99 each)

---

## 🚀 Go-to-Market Strategy

### Launch Week 1
1. **Reddit Launch**: r/jobs, r/careerguidance, r/cscareerquestions
2. **ProductHunt**: Prepare for launch
3. **LinkedIn Content**: Post about ghost jobs problem
4. **Twitter Thread**: Share findings about company research

### Growth Tactics
- **SEO Content**: "How to research companies before applying"
- **YouTube**: Company analysis case studies
- **Newsletter**: Weekly hiring intelligence reports
- **Partnerships**: Career coaches, recruiting YouTubers

---

## 🔧 Technical Implementation Priority

### Phase 1: Data Collection
```javascript
// Company LinkedIn scraper
const scrapeCompany = async (linkedinUrl) => {
  // Extract company name, size, industry
  // Get recent job postings
  // Analyze posting patterns
}

// Sentiment analysis
const analyzeSentiment = async (reviews) => {
  // OpenAI API for sentiment scoring
  // Trend analysis over time
}
```

### Phase 2: Scoring Algorithm
```javascript
// Ghost job probability
const calculateGhostScore = (jobPostings) => {
  // Check posting duration
  // Analyze qualification requirements
  // Compare with company hiring patterns
}

// Overall company score
const generateReport = (allData) => {
  // Weighted scoring system
  // Traffic light indicators
  // Actionable recommendations
}
```

### Phase 3: User Interface
- Responsive design (mobile-first)
- Fast loading with skeleton screens
- Interactive charts and graphs
- Clear call-to-actions

---

## 📈 Success Metrics

### Technical KPIs
- **Page load time**: <2 seconds
- **API response time**: <5 seconds
- **Uptime**: 99.9%
- **Data accuracy**: >90%

### Business KPIs
- **User acquisition**: 1000 users in month 1
- **Retention**: 30% monthly active users
- **Conversion**: 5% free-to-paid
- **NPS Score**: >50

### Content KPIs
- **Analysis completion rate**: >80%
- **Report shares**: >20% of users
- **Return usage**: >40% within 30 days

---

## ⚠️ Risk Mitigation

### Technical Risks
- **Rate limiting**: Implement respectful scraping with delays
- **Anti-bot measures**: Use residential proxies, rotate user agents
- **API changes**: Build fallback data sources
- **Legal issues**: Respect robots.txt, implement fair use

### Business Risks
- **Competition**: Focus on unique insights and user experience
- **Data accuracy**: Implement verification mechanisms
- **Scalability**: Use serverless architecture

---

## 🎯 Next Steps

1. **Domain & Hosting**: Register domain, set up Vercel
2. **MVP Development**: Start with basic LinkedIn scraping
3. **API Keys**: Get access to Crunchbase, NewsAPI, etc.
4. **Design System**: Create brand identity and UI components
5. **Landing Page**: Build and deploy MVP
6. **First Company**: Test with a known company
7. **Beta Testing**: Get 10 beta users for feedback
8. **Launch**: Reddit + social media announcement

---

## 💡 Unique Selling Points

1. **Real-time analysis** vs. static company reviews
2. **Job seeker focused** vs. recruiter tools
3. **Ghost job detection** vs. general company info
4. **Actionable insights** vs. raw data dumps
5. **Free tier** vs. expensive enterprise tools

**TruthRecruit positions itself as the "Carfax for job hunting" - essential due diligence before making a career move.**