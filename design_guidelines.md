# Design Guidelines: Anuja Gadde Professional Portfolio

## Design Approach

**Selected Approach**: Modern Portfolio with Product Leadership Emphasis

Drawing inspiration from successful product leader portfolios (Linear careers, Stripe leadership pages) combined with tech-forward elements that reflect AI/ML expertise. The design balances professional credibility with innovation, positioning Anuja as both a strategic product leader and technical expert.

**Core Principles**:
- Professional authority with approachable personality
- Clean, content-focused layouts with strategic visual hierarchy
- Data-driven storytelling through project showcases
- Modern without being trendy - built to last

---

## Typography System

**Font Families** (via Google Fonts):
- **Headlines**: Inter (weights: 700, 600)
- **Body**: Inter (weights: 400, 500)
- **Accents/Code**: JetBrains Mono (weight: 400) - for technical credibility

**Type Scale**:
- Hero headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section headers: text-3xl md:text-4xl, font-semibold
- Subsection headers: text-2xl md:text-3xl, font-semibold
- Card titles: text-xl font-semibold
- Body text: text-base leading-relaxed
- Small text/metadata: text-sm

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 md:py-24 lg:py-32
- Card spacing: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8, gap-12
- Container max-width: max-w-7xl

**Grid Strategy**:
- Hero: Full-width with centered content (max-w-4xl)
- About: Single column (max-w-3xl)
- Experience: Timeline layout (single column on mobile, elegant left-aligned timeline on desktop)
- Projects: 2-column grid (md:grid-cols-2, gap-8)
- Skills: 3-column grid (md:grid-cols-3, gap-6)
- Blog: 3-column grid (md:grid-cols-3, gap-6)

---

## Component Library

### Navigation
- Sticky header with blur backdrop (backdrop-blur-lg)
- Logo/name on left, navigation links on right
- Mobile: hamburger menu
- Links: About, Experience, Projects, Writing, Contact
- Subtle underline animation on hover

### Hero Section
- Height: min-h-screen with flex centering
- **Large Hero Image**: Professional headshot or workspace image (positioned right side on desktop, full-width on mobile)
- Left side: Text content with gradient text effect on name
- Headline structure: Name → Title → One-line value proposition
- Primary CTA: "View My Work" + Secondary: "Download Resume"
- Social icons below (LinkedIn, GitHub, Medium, Google Cloud) - size-6 with hover scale

### About Section
- Two-column layout on desktop (60/40 split: story left, quick facts right)
- Professional photo (rounded-lg, subtle shadow)
- Key achievements in bullet format with icon prefixes
- "Currently building..." callout box highlighting Refund Hawk role

### Experience Timeline
- Vertical timeline with connecting line
- Each entry: Company logo circle → Role & dates → Description → Key achievements (3-4 bullet points)
- Highlight Amazon marketplace expertise with data icon
- Refund Hawk (current): Emphasized with accent treatment

### Featured Projects
- Card-based grid with hover elevation
- Each card: Project thumbnail/screenshot → Title → Tech stack tags → Description → Links (Live Demo, GitHub, Article)
- Include: GenAI apps, ML models, Amazon analytics dashboards
- Tech tags: Small pills with rounded-full, distinct for each category (AI/ML/Data/Product)

### Skills Visualization
- Category-based grouping: Product Management | Technical Skills | AI/ML Expertise | Tools & Platforms
- Icon + label format
- Progress bars or proficiency indicators avoided (feels dated)
- Clean badge/pill design for each skill

### Blog Integration
- Pull 6 most recent Medium articles
- Card format: Featured image → Title → Excerpt → Read time → "Read on Medium" link
- Hover effect: subtle lift with shadow

### Contact Section
- Centered layout with compelling headline: "Let's Build Something Together"
- Primary email address
- Social links (larger icons, size-8)
- Optional: Simple contact form or calendar booking link
- Professional headshot or workspace image

### Footer
- Minimal design: Copyright | Built with love | Social links
- Current status indicator: "Currently: Head of Product @ Refund Hawk"

---

## Images

**Required Images**:
1. **Hero Image**: Professional headshot or modern workspace photo - positioned right side on desktop (40% width), creates asymmetric balance. Should convey leadership + technical expertise.
2. **About Section Photo**: Candid professional photo showing personality
3. **Project Screenshots**: 6-8 high-quality screenshots of GenAI apps, dashboards, ML visualizations
4. **Blog Article Thumbnails**: Featured images from Medium articles (automatically pulled)

**Image Treatment**: 
- Rounded corners (rounded-lg for cards, rounded-xl for larger images)
- Subtle shadows (shadow-md on cards, shadow-xl on hero)
- Overlay on hero if needed for text readability: bg-gradient-to-r from-black/60 to-transparent

---

## Animations

**Minimal, purposeful motion**:
- Page load: Subtle fade-up for hero content (delay stagger for headline, subheadline, CTAs)
- Scroll: Gentle fade-in for section headers only
- Hover: Scale (1.02) for project cards, underline slide for links
- NO: Parallax, continuous animations, scroll-triggered effects beyond fade-in

---

## Accessibility & Polish

- Focus states: Visible ring with accent treatment
- Alt text for all images
- Semantic HTML structure (header, main, section, footer)
- ARIA labels for icon-only buttons
- Keyboard navigation support
- High contrast ratios for all text

---

## Page Structure (Complete Flow)

1. **Hero** (min-h-screen): Name, headline, value prop, CTAs, social links, large hero image right side
2. **About** (py-24): Story + quick facts, current role highlight, photo
3. **Experience** (py-24): Timeline with Refund Hawk (current), Amazon work, Natural Fiber Welding
4. **Amazon Expertise Callout** (py-16): Dedicated section highlighting seller/vendor data work with visual element
5. **Featured Projects** (py-24): 6 project cards in 2-column grid
6. **Skills** (py-20): 4 category groups in responsive grid
7. **Writing** (py-24): Medium article cards, 3-column grid, "View All Articles" link
8. **Contact** (py-24): Headline, email, social links, optional form
9. **Footer** (py-8): Minimal with status + copyright

**Total sections: 9** - comprehensive, polished, production-ready portfolio that positions Anuja for senior product roles while showcasing technical depth.