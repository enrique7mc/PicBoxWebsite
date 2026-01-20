# PicBox Website

Landing website for PicBox - a digital photo frame app for iOS/iPadOS.

## Features

- **Pre-launch Waitlist Page** (`/`) - Collect email signups before launch
- **Showcase Page** (`/app`) - Drive App Store downloads post-launch

## Tech Stack

- Vite + React 18 + TypeScript
- React Router v6
- Framer Motion
- React Hook Form
- CSS Modules

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```
VITE_WAITLIST_ID=your_waitlist_id
VITE_WAITLIST_API_KEY=your_api_key
```

Get your credentials at [freewaitlists.com](https://freewaitlists.com).

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy

The `vercel.json` configuration handles SPA routing automatically.

## Project Structure

```
src/
├── components/
│   ├── ui/           # Button, Input, Typography, AccentSquare
│   ├── layout/       # Header, Footer, PageWrapper
│   └── sections/     # Hero, Features, WaitlistForm, etc.
├── pages/
│   ├── WaitlistPage.tsx    # Route: /
│   └── ShowcasePage.tsx    # Route: /app
├── styles/
│   └── globals.css   # CSS variables, typography scale
└── App.tsx
```
