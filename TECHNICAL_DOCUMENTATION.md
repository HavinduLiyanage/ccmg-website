# CCMG Website - Technical Documentation

## Project Overview
- **Name**: CCMG Website (Colombo Consultants & Management Group)
- **Version**: 1.0.0
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Technology Stack

### Core Dependencies
```json
{
  "next": "14.0.4",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.16",
  "lucide-react": "^0.294.0",
  "@headlessui/react": "^1.7.17"
}
```

### Development Dependencies
```json
{
  "@types/node": "^20.10.4",
  "@types/react": "^18.2.42",
  "@types/react-dom": "^18.2.17",
  "autoprefixer": "^10.4.16",
  "eslint": "^8.55.0",
  "eslint-config-next": "14.0.4",
  "postcss": "^8.4.32",
  "tailwindcss": "^3.3.6",
  "typescript": "^5.3.3"
}
```

## Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── about/page.tsx     # About page (865 lines)
│   ├── contact/page.tsx   # Contact page
│   ├── projects/page.tsx  # Projects page
│   ├── services/page.tsx  # Services page (819 lines)
│   ├── sustainability/page.tsx # Sustainability page
│   ├── team/page.tsx      # Team page
│   ├── globals.css        # Global styles (122 lines)
│   ├── layout.tsx         # Root layout (28 lines)
│   └── page.tsx           # Homepage (880 lines)
└── components/            # Reusable components
    ├── Navigation.tsx     # Main navigation (112 lines)
    └── Footer.tsx         # Footer component (107 lines)
```

## Architecture

### App Router Structure
- **Layout**: Global navigation and footer wrapper
- **Pages**: Individual route components
- **Components**: Reusable UI elements
- **Styling**: Tailwind CSS with custom design system

### Component Hierarchy
```
RootLayout
├── Navigation (Global)
├── Page Content (Dynamic)
└── Footer (Global)
```

## Design System

### Color Palette
```css
/* Primary Colors */
--primary-dark: #1A1A1A      /* Main text, headings */
--primary-medium: #2A2A2A     /* Secondary text */
--primary-light: #F8F9FA      /* Background sections */

/* Accent Colors */
--accent-green: #22C55E       /* Primary accent */
--accent-dark-green: #16A34A  /* Hover states */
--accent-forest-green: #166534 /* Darker accents */

/* Neutral Colors */
--neutral-white: #FFFFFF       /* Pure white */
--neutral-light-gray: #F5F5F5 /* Light backgrounds */
--neutral-medium-gray: #E5E7EB /* Borders, dividers */
--neutral-dark-gray: #6B7280   /* Secondary text */
--neutral-charcoal: #374151    /* Body text */
```

### Typography
- **Font**: System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Scale**: xs (0.75rem) to 5xl (3rem)
- **Weights**: 400 (normal) to 700 (bold)

### Spacing System
```css
xs: 4px    /* 0.25rem */
sm: 8px    /* 0.5rem */
md: 16px   /* 1rem */
lg: 24px   /* 1.5rem */
xl: 32px   /* 2rem */
2xl: 48px  /* 3rem */
3xl: 60px  /* 3.75rem */
4xl: 80px  /* 5rem */
```

## Key Components

### Navigation Component
**File**: `src/components/Navigation.tsx` (112 lines)
**Features**:
- Sticky header with scroll effects
- Mobile hamburger menu
- Active page highlighting
- Smooth animations

**Key Implementation**:
```typescript
// Scroll detection
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

### Footer Component
**File**: `src/components/Footer.tsx` (107 lines)
**Features**:
- Company contact information
- Quick navigation links
- Social media links
- Copyright information

### Homepage
**File**: `src/app/page.tsx` (880 lines)
**Sections**:
- Hero section with animated background
- Company introduction
- Services preview (4 core services)
- Featured projects (3 projects)
- Sustainability banner
- Testimonials (3 testimonials)
- Footer CTA

**Key Features**:
- Animated gradient backgrounds
- Interactive service cards
- Project showcase with hover effects
- Client testimonials with ratings

## Styling System

### Tailwind Configuration
```javascript
// tailwind.config.js (94 lines)
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { /* Custom color palette */ },
      fontFamily: { /* Typography system */ },
      spacing: { /* Custom spacing scale */ },
      borderRadius: { /* Border radius tokens */ },
      boxShadow: { /* Shadow system */ },
      animation: { /* Custom animations */ }
    }
  }
}
```

### Global Styles
**File**: `src/app/globals.css` (122 lines)
```css
/* Design System Variables */
:root {
  --primary-dark: #1A1A1A;
  --accent-green: #22C55E;
  /* ... other variables */
}

/* Utility Classes */
@layer components {
  .btn-primary { /* Button styles */ }
  .card { /* Card component styles */ }
  .section-container { /* Section layout */ }
  .section-title { /* Typography styles */ }
}

/* Custom Animations */
@keyframes fadeInUp { /* Animation keyframes */ }
@keyframes scaleIn { /* Scale animations */ }
```

## Animations & Interactions

### Framer Motion Implementation
```typescript
// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// Usage in components
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  {/* Content */}
</motion.div>
```

### Animation Categories
1. **Page Transitions**: Fade-in animations for page content
2. **Interactive Elements**: Hover effects on cards and buttons
3. **Background Animations**: Gradient animations and floating elements
4. **Loading States**: Skeleton loading animations

## Performance Optimizations

### Next.js Configuration
```javascript
// next.config.js (8 lines)
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
}
```

### Optimizations Implemented
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: App Router automatic code splitting
- **Lazy Loading**: Images and animations load as needed
- **Bundle Optimization**: Tree-shaking and minification

### Performance Metrics
- **Core Web Vitals**: LCP, FID, CLS optimization
- **Lighthouse Score**: Targeting 90+ scores
- **Loading Speed**: Sub-3 second load times

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Available Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## TypeScript Configuration

### Compiler Options
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## SEO & Metadata

### Root Layout Metadata
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'CCMG - Colombo Consultants & Management Group',
  description: 'Sri Lanka\'s trusted consultancy for projects, sustainability, and growth.',
  keywords: 'consultancy, management, sustainability, Sri Lanka, Gold Standard, projects',
}
```

### SEO Features
- **Semantic HTML**: Proper heading hierarchy
- **Meta Tags**: Comprehensive meta information
- **Structured Data**: JSON-LD schema markup
- **Mobile-First**: Mobile-optimized design
- **Fast Loading**: Sub-3 second load times

## Accessibility

### WCAG 2.1 Compliance
- **Level AA**: Target compliance level
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 ratio for text

### Implementation
```typescript
// Proper semantic HTML
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a role="menuitem" href="/">Home</a>
    </li>
  </ul>
</nav>

// ARIA labels for interactive elements
<button aria-label="Toggle mobile menu">
  <Menu className="w-6 h-6" />
</button>
```

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

### Responsive Patterns
- **Mobile First**: Base styles for mobile, enhanced for larger screens
- **Flexible Grids**: CSS Grid and Flexbox for responsive layouts
- **Typography Scaling**: Responsive font sizes using Tailwind breakpoints
- **Image Optimization**: Next.js Image component with responsive sizing

## Content Structure

### Services Offered
1. **Sustainability & ESG Advisory**
2. **Strategic Local Partnerships & Representation**
3. **PPP Structure, Policy & Stakeholder Engagement**
4. **IT & Digital Services Facilitation**

### Project Categories
- **Agriculture**: Sustainable farming initiatives
- **Infrastructure**: Urban development projects
- **Energy**: Renewable energy programs

### Team Structure
- **Managing Director & Founder**: Dr. Priyantha Silva
- **Director of Sustainability & ESG**: Ms. Sanduni Perera
- **Director of PPP & Partnerships**: Mr. Kamal Fernando
- **Director of Digital Services**: Ms. Ruvini Jayasinghe

## Deployment

### Recommended Platforms
1. **Vercel** (Recommended for Next.js)
2. **Netlify**
3. **Traditional Hosting**

### Build Process
```bash
# Production build
npm run build

# Start production server
npm start
```

### Environment Variables
```bash
# Production environment
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## Maintenance

### Regular Tasks
1. **Dependency Updates**: Monthly security updates
2. **Performance Monitoring**: Weekly performance checks
3. **Content Updates**: Regular content refresh
4. **Security Audits**: Quarterly security reviews

### Update Procedures
```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Troubleshooting

### Common Issues
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check TypeScript configuration
npx tsc --noEmit

# Rebuild Tailwind CSS
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css --watch
```

### Performance Issues
- **Bundle Size**: Monitor with `npm run build`
- **Image Optimization**: Use Next.js Image component
- **Animation Performance**: Optimize Framer Motion animations
- **Loading Speed**: Use Lighthouse for analysis

## Security Considerations

### Security Features
- **Automatic HTTPS**: Secure connections
- **Content Security Policy**: XSS protection
- **Input Validation**: Form validation and sanitization
- **Environment Variables**: Secure configuration

### Best Practices
- **No Sensitive Data**: No API keys in client code
- **Input Sanitization**: XSS prevention
- **HTTPS Only**: Secure connections
- **Regular Updates**: Security patch updates

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Maintainer**: Development Team 