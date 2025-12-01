# Anuja Gadde - Professional Portfolio

A modern, responsive portfolio website showcasing product leadership expertise, AI/ML research, and professional achievements. Built with React, TypeScript, and Express.

**Live Demo**: [Your deployed URL here]

---

## 🚀 Features

- **Professional Hero Section** - Captivating introduction with hero image
- **About Section** - Career journey and current focus on AI research
- **Experience Timeline** - Refund Hawk (Head of Product) + Natural Fiber Welding
- **Amazon Expertise** - Dedicated section highlighting marketplace analytics work
- **Featured Projects** - 4 showcase projects with GitHub/Medium links
- **Skills & Expertise** - Organized by category (Product, AI/ML, Data, Tools)
- **Writing Section** - Integrated Medium articles
- **Contact Form** - Fully functional with backend validation
- **Dark Mode** - Full light/dark theme support
- **Responsive Design** - Mobile-first, works on all devices

---

## 📋 Tech Stack

**Frontend:**
- React 18.3
- TypeScript 5.6
- Tailwind CSS 3.4
- shadcn/ui components
- Framer Motion (animations)
- React Hook Form (form handling)
- TanStack Query (data fetching)

**Backend:**
- Express.js 4.21
- Node.js (tsx for TypeScript execution)
- Zod (validation)
- Vite (dev server)

**Deployment:**
- Ready for Replit, Vercel, or any Node.js host

---

## 🔧 Setup & Installation

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:5000
   - Backend API: http://localhost:5000/api

4. **Type checking**
   ```bash
   npm run check
   ```

---

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── AmazonExpertiseSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── WritingSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   ├── examples/         # Component examples
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Main page
│   │   │   └── not-found.tsx
│   │   ├── lib/
│   │   │   ├── queryClient.ts   # TanStack Query setup
│   │   │   └── utils.ts
│   │   ├── hooks/
│   │   │   └── use-toast.ts
│   │   ├── App.tsx              # Main app component
│   │   ├── main.tsx
│   │   └── index.css            # Global styles
│   ├── index.html
│   └── vite.config.ts
│
├── server/
│   ├── routes.ts                # API endpoints
│   ├── app.ts                   # Express app setup
│   ├── storage.ts               # Storage interface
│   ├── index-dev.ts
│   └── index-prod.ts
│
├── shared/
│   └── schema.ts                # Zod schemas & types
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
├── postcss.config.js
├── components.json              # shadcn config
├── design_guidelines.md         # Design documentation
└── README.md
```

---

## 🎨 Customization

### Update Content

1. **Your Information** - Edit `client/src/pages/Home.tsx`:
   - Update hero section with your photo
   - Modify experience, projects, and skills

2. **Theme Colors** - Edit `client/src/index.css`:
   - CSS variables for light/dark mode
   - Primary, secondary, accent colors

3. **Social Links** - Update component files:
   - `HeroSection.tsx`
   - `Footer.tsx`
   - `ContactSection.tsx`

### Add Your Images

Replace images in components:
```tsx
import heroImage from "@assets/your-image.jpg";
```

Place your images in the appropriate location and update import paths.

---

## 📧 Contact Form Setup

The contact form is pre-configured but needs an email service to send emails:

### Option 1: Resend (Recommended)
```bash
npm install resend
```

Update `server/routes.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the contact endpoint:
await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'anujagadde18@gmail.com',
  subject: `Portfolio Contact: ${data.name}`,
  html: `<p>${data.message}</p><p>From: ${data.email}</p>`,
});
```

### Option 2: SendGrid
Similar setup - get API key from SendGrid and implement in routes.

### Option 3: Local Testing
Currently logs submissions to console. Add actual email in production.

---

## 🚀 Deployment

### Replit (Fastest)
1. Fork to Replit
2. Set up environment variables
3. Click "Deploy" button

### Vercel
```bash
npm run build
```

### Other Platforms
- Build: `npm run build`
- Start: `npm run start`
- Ensure Node.js 20+ runtime

---

## 🔐 Environment Variables

For production email sending:
```
RESEND_API_KEY=your_resend_key
# or
SENDGRID_API_KEY=your_sendgrid_key
```

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run check    # TypeScript type checking
npm run db:push  # Push database schema (if using DB)
```

---

## 🎯 Next Steps

- [ ] Add email service integration (Resend/SendGrid)
- [ ] Deploy to production
- [ ] Add analytics (Google Analytics/Plausible)
- [ ] Set up custom domain
- [ ] Add CI/CD pipeline
- [ ] Integrate blog CMS (optional)

---

## 📄 License

MIT - Feel free to use this as a template for your own portfolio

---

## 👤 Author

**Anuja Gadde**
- LinkedIn: https://www.linkedin.com/in/anuja-gadde/
- GitHub: https://github.com/anujagadde18
- Medium: https://medium.com/@anujagadde18

---

## 🤝 Support

For issues or questions, reach out via the contact form or email directly.
