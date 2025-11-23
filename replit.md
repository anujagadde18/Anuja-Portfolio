# Anuja Gadde - Professional Portfolio

## Project Overview
A professional portfolio website showcasing Anuja Gadde's product leadership, AI/ML research expertise, and Amazon marketplace analytics experience. Built with React, Express, and modern design principles.

## Key Features

### 1. **Hero Section**
- Professional introduction with gradient name styling
- Positioned as "Head of Product | AI Researcher & Explorer"
- Social media links (LinkedIn, GitHub, Medium, Google Cloud)
- Professional headshot
- Smooth scroll navigation to sections

### 2. **About Section**
- Career highlights and key achievements
- MS in Engineering Management from University of Houston
- 5+ years of experience in data analytics, ML engineering, and product management
- Focus on AI/ML research and exploration
- Current role callout highlighting work at Refund Hawk

### 3. **Experience Timeline**
- **Refund Hawk** (2024 - Present): Head of Product
  - Working directly with Amazon seller and vendor product data
  - Leading product strategy and client-facing initiatives
  - Building AI-powered tools and analytics dashboards
- **Natural Fiber Welding** (2020 - 2024): Senior Data Analyst
  - ML model deployment and data pipeline engineering
  - A/B testing and analytics frameworks

### 4. **Amazon Marketplace Expertise**
- Dedicated section highlighting specialized experience
- Seller and vendor data analysis capabilities
- Performance optimization and growth intelligence
- Customer experience enhancement

### 5. **Featured Projects**
- GenAI Multimodal Assistant (LangChain, Gemini Pro)
- Amazon Marketplace Analytics Platform
- ML-Powered Customer Churn Prediction
- CSV Chatbot for A/B Test Analysis
- All projects link to GitHub repos and Medium articles

### 6. **Skills Showcase**
- Product Management: Strategy, roadmap, stakeholder management
- AI/ML Expertise: GenAI, LangChain, GPT-4, ML models
- Data & Analytics: Python, SQL, R, Snowflake, Power BI
- Tools & Platforms: AWS, Airflow, Docker, Google Cloud

### 7. **Writing & Thought Leadership**
- Integration with Medium profile (@anujagadde18)
- 6+ featured articles on AI, ML, and product analytics
- Topics: GenAI, spatial AI, causal inference, agentic AI
- Direct links to read articles on Medium

### 8. **Contact Section**
- **Functional contact form** with backend integration
- Form validation (name, email, message)
- Success/error handling with toast notifications
- Email submission logging (ready for email service integration)
- Direct links to LinkedIn, GitHub, Medium, email

### 9. **Dark Mode Support**
- Full theme toggle functionality
- Consistent design in both light and dark modes
- Persists user preference in localStorage

## Technical Stack

### Frontend
- **React 18** with TypeScript
- **Wouter** for client-side routing
- **TanStack Query** for data fetching and mutations
- **Tailwind CSS** for styling
- **Shadcn UI** component library
- **Framer Motion** ready for animations
- **Lucide React** icons

### Backend
- **Express.js** server
- **Zod** for validation
- Contact form API endpoint (`POST /api/contact`)
- Ready for email service integration (SendGrid, Resend, AWS SES)

### Design System
- Custom color palette with professional blue/gray tones
- Inter font family for clean, modern typography
- JetBrains Mono for code snippets
- Consistent spacing and component styling
- Hover and active states with elevation system

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation with smooth scroll
│   │   ├── HeroSection.tsx      # Landing section
│   │   ├── AboutSection.tsx     # Career overview
│   │   ├── ExperienceSection.tsx # Work history
│   │   ├── AmazonExpertiseSection.tsx # Amazon specialization
│   │   ├── ProjectsSection.tsx  # Featured work
│   │   ├── SkillsSection.tsx    # Technical skills
│   │   ├── WritingSection.tsx   # Medium articles
│   │   ├── ContactSection.tsx   # Contact info + form
│   │   ├── ContactForm.tsx      # Form component
│   │   ├── Footer.tsx           # Site footer
│   │   └── ThemeProvider.tsx    # Dark mode context
│   ├── pages/
│   │   ├── Home.tsx             # Main portfolio page
│   │   └── not-found.tsx        # 404 page
│   └── App.tsx                  # App root with routing
│
server/
├── routes.ts                    # API routes (contact form)
└── storage.ts                   # Storage interface (not used)

attached_assets/
├── Pi7-Image-Cropper (1)_1763932342001.jpeg  # Professional headshot
└── generated_images/            # Project screenshots
    ├── genai_chatbot_project.png
    ├── amazon_analytics_dashboard.png
    ├── ml_model_visualization.png
    └── a/b_testing_dashboard.png
```

## API Endpoints

### POST /api/contact
Submit contact form message.

**Request:**
```json
{
  "name": "string",
  "email": "string (valid email)",
  "message": "string (min 10 chars)"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for your message! I'll get back to you soon."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message"
}
```

## Running the Application

```bash
# Start development server
npm run dev
```

The application runs on port 5000 and includes:
- Express backend API
- Vite development server for frontend
- Hot module replacement
- Automatic workflow restart on file changes

## Future Enhancements

### Ready for Production
- **Email Service Integration**: Add SendGrid, Resend, or AWS SES to actually send contact form emails
- **Analytics**: Add Google Analytics or Plausible for visitor tracking
- **Medium RSS Feed**: Dynamically pull latest articles instead of hardcoded list
- **Resume Download**: Add PDF resume download functionality
- **SEO Optimization**: Add sitemap.xml and enhanced meta tags

### User Preferences
- Long-term goal: Transition to entrepreneurship building AI-powered products
- Career focus: Product leadership roles with AI/ML innovation
- Current exploration: Researching cutting-edge AI/ML applications

## Contact Information
- **Email**: anujagadde18@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/anuja-gadde/
- **GitHub**: https://github.com/anujagadde18
- **Medium**: https://medium.com/@anujagadde18

## Recent Changes
- **Nov 23, 2024**: Initial portfolio build with all sections
- **Nov 23, 2024**: Added functional contact form with backend API
- **Nov 23, 2024**: Integrated actual professional photo
- **Nov 23, 2024**: Positioned as "AI Researcher & Explorer"
- **Nov 23, 2024**: Consolidated Amazon work into Refund Hawk role
- **Nov 23, 2024**: End-to-end testing completed successfully
