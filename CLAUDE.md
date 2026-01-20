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
- `VITE_FREE_WAITLISTS_API_KEY` - FreeWaitlists.com API key
- `VITE_FREE_WAITLISTS_UUID` - FreeWaitlists.com waitlist UUID

## Deployment

Configured for Vercel with SPA rewrites and static asset caching (see `vercel.json`).
