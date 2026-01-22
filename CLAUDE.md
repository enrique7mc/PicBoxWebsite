# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PicBox Website is a React 19 + TypeScript landing site for PicBox, a digital photo frame iOS/iPadOS app. It uses Vite 7 for building and is deployed on Vercel.

## Common Commands

- `npm run dev` - Start development server
- `npm run build` - Production build (runs TypeScript check + Vite build)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture

**Page Structure:**
- `/` → WaitlistPage (pre-launch waitlist signup)
- `/app` → ShowcasePage (post-launch app showcase)

**Component Hierarchy:**
- Pages (`/src/pages`) compose Sections (`/src/components/sections`)
- Sections use Layout components (`/src/components/layout`) and UI components (`/src/components/ui`)

**Key Technologies:**
- React Router v6 for routing
- Framer Motion for animations
- React Hook Form for form handling
- CSS Modules for component styling
- CSS Variables in `/src/styles/globals.css` for design tokens

**Design System (in globals.css):**
- Fonts: Instrument Serif (headings), Work Sans (body)
- Colors: Warm gold (#C4A77D), Sage green (#8B9D77), Dusty rose (#C9A9A6)
- Uses responsive clamp() values for typography and spacing

## Assets

Screenshots and images are stored in `src/assets/screenshots/`:
- `hero.jpeg` - Main app screenshot (used in WaitlistHero and ShowcaseHero)
- `ken-burns.jpeg` - Ken Burns effect demo (used in FeatureTeaser and FeaturesGrid)
- `face-detection.jpeg` - Face detection feature (used in FeatureTeaser and FeaturesGrid)
- `auto-start.jpeg` - Auto-start feature (used in FeatureTeaser)
- `lifestyle.jpeg` - iPad in home setting (used in LifestylePreview)

The `MockupPlaceholder` component accepts an `image` prop to display screenshots within the iPad frame mockup.

## Environment Variables

Copy `.env.example` to `.env` and configure:
- `VITE_WAITLIST_ID` - FreeWaitlists.com waitlist ID

## Deployment

Configured for Vercel with SPA rewrites and static asset caching (see `vercel.json`).

- `vercel --prod` - Deploy to production via Vercel CLI

## Next Steps

### Waitlist Setup

1. Create an account at [FreeWaitlists.com](https://freewaitlists.com)
2. Create a new waitlist for PicBox
3. Copy your waitlist ID from the dashboard
4. Create `.env` file from `.env.example` and add your waitlist ID
5. Test the form - without the ID, it runs in demo mode with simulated responses

### Image Optimization

The current screenshots are quite large (especially lifestyle.jpeg at ~8MB). Consider:
- Compressing images with ImageOptim, Squoosh, or similar tools
- Converting to WebP format for better compression
- Using responsive images with srcset for different screen sizes
