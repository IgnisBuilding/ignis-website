# IGNIS - Smart Fire Detection & Evacuation System

A production-ready website built with Next.js 14, TypeScript, Tailwind CSS, and Payload CMS.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Payload CMS** - Headless CMS with admin dashboard
- **Resend** - Email service for contact form
- **MongoDB** - Database

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   cd ignis-website
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your values:
   - `MONGODB_URI` - Your MongoDB connection string
   - `PAYLOAD_SECRET` - A random secret string
   - `RESEND_API_KEY` - Get from https://resend.com (optional for dev)

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Website: http://localhost:3000
   - Admin Dashboard: http://localhost:3000/admin

## Project Structure

```
ignis-website/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── technology/       # Technology page
│   │   ├── solutions/        # Solutions page
│   │   ├── architecture/     # Architecture page
│   │   ├── contact/          # Contact page
│   │   └── api/contact/      # Contact form API
│   ├── components/
│   │   ├── layout/           # Header, Footer
│   │   ├── sections/         # Page sections
│   │   └── ui/               # Reusable UI components
│   ├── payload/
│   │   ├── collections/      # CMS content types
│   │   └── payload.config.ts # CMS configuration
│   └── lib/                  # Utilities
├── public/                   # Static assets
└── tailwind.config.ts        # Tailwind configuration
```

## Features

### Website
- 6 fully responsive pages
- Working contact form with validation
- Optimized Tailwind CSS (compiled, not CDN)
- SEO-ready with proper meta tags
- Smooth animations and transitions

### Admin Dashboard (Payload CMS)
- Manage team members
- Update timeline/milestones
- View contact form submissions
- Edit site settings
- Media library

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Railway
Good option for Payload CMS + MongoDB all-in-one:
1. Create new project
2. Add MongoDB and Node.js services
3. Configure environment variables
4. Deploy

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `PAYLOAD_SECRET` | Random string for Payload CMS |
| `RESEND_API_KEY` | Resend.com API key for emails |
| `CONTACT_EMAIL` | Email to receive form submissions |
| `NEXT_PUBLIC_SITE_URL` | Your site URL |

## Contact Form Setup

The contact form works out of the box for development. For production:

1. Sign up at https://resend.com
2. Get your API key
3. Add verified domain or use onboarding@resend.dev for testing
4. Add `RESEND_API_KEY` to environment variables

## License

© 2025 IGNIS – Final Year Project (FAST-NUCES)
