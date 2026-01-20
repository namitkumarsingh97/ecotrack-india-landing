# EcoTrack India - ESG Compliance Platform

ESG reporting made simple for Indian SMBs. Track sustainability metrics, calculate ESG scores, and generate compliance-ready reports.

## Project Overview

EcoTrack India is a comprehensive ESG (Environmental, Social, Governance) compliance platform built specifically for Indian small and medium businesses. The platform helps businesses track sustainability metrics, calculate ESG scores, and generate audit-ready reports aligned with BRSR, GRI, and other Indian compliance frameworks.

## Technologies Used

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd ecotrack-india-landing

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```sh
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── landing/      # Landing page specific components
│   └── ui/           # shadcn-ui components
├── pages/            # Page components
├── lib/              # Utility functions
└── App.tsx           # Main application component
```

## Features

- **ESG Tracking**: Comprehensive data collection for Environmental, Social, and Governance metrics
- **Automated Scoring**: AI-powered ESG score calculation
- **Report Generation**: PDF and Excel export capabilities
- **BRSR Compliance**: Aligned with Indian regulatory requirements
- **Multi-Industry Support**: Templates for 9+ industries
- **Responsive Design**: Works seamlessly on all devices

## Development

### Code Style

The project uses ESLint for code linting. Run the linter with:

```sh
npm run lint
```

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

## License

Copyright © 2026 EcoTrack India. All rights reserved.
