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

## Environment Variables

Copy `.env.example` to `.env` and configure:
- `VITE_WAITLIST_ID` - FreeWaitlists.com waitlist ID
- `VITE_WAITLIST_API_KEY` - FreeWaitlists.com API key

## Deployment

Configured for Vercel with SPA rewrites and static asset caching (see `vercel.json`).

## Next Steps

### Waitlist Setup

1. Create an account at [FreeWaitlists.com](https://freewaitlists.com)
2. Create a new waitlist for PicBox
3. Copy your waitlist ID and API key from the dashboard
4. Create `.env` file from `.env.example` and add your credentials
5. Test the form - without credentials, it runs in demo mode with simulated responses

### Screenshots Needed

The site uses `MockupPlaceholder` components that need to be replaced with real iPad screenshots. All screenshots should be taken on an iPad to match the mockup frames.

**Waitlist Page (/) - 4 screenshots:**

| Location | Label | Recommended Content |
|----------|-------|---------------------|
| WaitlistHero | Hero Screenshot | Main app view with a beautiful photo displayed, slight angle works well |
| FeatureTeaser | Ken Burns Demo | Photo mid-animation showing pan/zoom effect, or before/after comparison |
| FeatureTeaser | Face Detection | Photo with visible face detection overlay or indicator |
| FeatureTeaser | Auto Start | Settings screen showing auto-start option, or app launching |

**Showcase Page (/app) - 3 screenshots:**

| Location | Label | Recommended Content |
|----------|-------|---------------------|
| ShowcaseHero | Main App Screenshot | Hero shot of app displaying a stunning photo, clean and inviting |
| FeaturesGrid | Ken Burns Demo | Same as waitlist or different angle showing the cinematic effect |
| FeaturesGrid | Face Detection | Same as waitlist or showing the smart framing in action |

**Lifestyle Image (both pages):**

| Location | Component | Recommended Content |
|----------|-----------|---------------------|
| Waitlist & Showcase | LifestylePreview | iPad on a side table/nightstand with the app displaying a photo. Warm, inviting home environment. |

**Lifestyle Image Tips:**
- Show the iPad in a real home setting (nightstand, side table, kitchen counter, or shelf)
- Include context elements: lamp, plant, book, coffee cup—items that make it feel lived-in
- Use soft, natural lighting (morning light works great)
- The iPad screen should show a beautiful photo (family, nature, or pets)
- Aim for 4:3 aspect ratio, minimum 1600×1200px
- Slight angle works better than straight-on to show depth
- Avoid cluttered backgrounds—keep focus on the iPad as a photo frame

**App Screenshot Tips:**
- Use landscape orientation for all iPad screenshots
- Choose photos with good lighting and emotional appeal (family moments, nature, pets)
- For Ken Burns demo: capture mid-animation or show the movement path
- For Face Detection: use a photo with clear faces to demonstrate the feature
- Aim for 2732×2048px (iPad Pro 12.9") or 2388×1668px (iPad Pro 11") resolution
- Keep consistent lighting/style across all screenshots for visual cohesion
- The mockups have slight rotation, so perfectly centered compositions work best
