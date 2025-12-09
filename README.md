# MFH - My Favorite Human

**Love lives in the details.**
Relationship intelligence companion that helps you remember what matters. Built on science, designed for love.

## About

This is the landing page for **MFH (My Favorite Human)**, built with the "Liquid Glass" design system to convey warmth, transparency, and modern elegance.

### Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Plus Jakarta Sans & Playfair Display
- **Deployment**: Vercel ready

## Features Implemented

- **Liquid Glass UI**: Custom glassmorphism, soft shadows, and gradients.
- **3D Interactive Hero**: CSS-only floating iPhone mockup.
- **Responsive Design**: Mobile-first approach for all sections.
- **Components**:
  - `HeroSection`
  - `FeaturesSection` (Daily Insight, Ask Muse, Heartboard)
  - `ScienceSection` (Love Maps, Magic Ratio)
  - `SocialProofSection`
  - `CTASection`

## Getting Started

First, run the development server:

```bash
npm run dev
# Server starts on port 3002
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages & layout
│   │   ├── globals.css      # Global styles (Tailwind + Liquid Glass vars)
│   │   └── page.tsx         # Main landing page assembly
│   ├── components/
│   │   ├── landing/         # Landing page specific sections
│   │   └── ui/              # Shadcn UI primitives
│   └── lib/                 # Utilities (cn, etc.)
├── public/                  # Static assets (images)
└── tailwind.config.js       # Design tokens & font config
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
