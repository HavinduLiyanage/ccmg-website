# CCMG Website v4

A modern, responsive website for Colombo Consultants & Management Group (CCMG), built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for business consulting
- **Responsive**: Mobile-first approach with excellent cross-device compatibility
- **Performance**: Optimized for Core Web Vitals and SEO
- **Accessibility**: WCAG compliant with proper semantic markup
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Analytics**: Google Analytics 4 and Meta Pixel integration
- **Cookie Consent**: GDPR-compliant cookie management
- **PWA Ready**: Web manifest and service worker support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4, Meta Pixel
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- Git for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd CCMG-Website_v4
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000

# Optional: Custom domain for production
NEXT_PUBLIC_SITE_URL=https://ccmg.lk
```

### 4. Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing & Quality Assurance

### Linting

```bash
npm run lint
```

### Build Testing

```bash
npm run build
```

### Production Build Test

```bash
npm run build
npm run start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm run start
```

### Environment Variables for Production

Ensure these are set in your production environment:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics 4 ID
- `NEXT_PUBLIC_META_PIXEL_ID`: Your Meta Pixel ID
- `NEXT_PUBLIC_SITE_URL`: Your production domain

## 📱 PWA Configuration

The website includes Progressive Web App features:

- Web manifest (`/public/site.webmanifest`)
- Theme colors and icons
- Standalone display mode
- Offline capability (when service worker is implemented)

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: JSON-LD schema markup (ready for implementation)
- **Canonical URLs**: Prevent duplicate content issues

## 📊 Analytics & Tracking

- **Google Analytics 4**: Page views, events, and conversions
- **Meta Pixel**: Facebook advertising and conversion tracking
- **Cookie Consent**: GDPR-compliant tracking consent
- **Event Tracking**: CTA clicks, form submissions, page interactions

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    dark: '#0A1722',
    medium: '#1B2A34',
    light: '#F8F9FA'
  },
  accent: {
    green: '#0E5E4A',
    dark: '#0E3A2E',
    forest: '#166534',
    gold: '#C29A3A'
  }
}
```

### Typography

Fonts are configured in `globals.css`:

- **Primary**: Inter (sans-serif)
- **Display**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── services/          # Services overview
│   ├── sustainability/    # Sustainability & ESG
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/             # Reusable components
│   ├── Analytics.tsx      # Analytics integration
│   ├── CookieConsent.tsx  # Cookie management
│   ├── Footer.tsx         # Site footer
│   └── Navigation.tsx     # Site navigation
public/                     # Static assets
├── images/                 # Image assets
├── videos/                 # Video assets
├── robots.txt             # Search engine instructions
├── sitemap.xml            # XML sitemap
└── site.webmanifest       # PWA manifest
```

## 🔧 Performance Optimization

- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Analysis**: Built-in bundle analyzer for optimization

## 🚀 Launch Checklist

### Pre-Launch

- [ ] Set up production environment variables
- [ ] Configure Google Analytics 4
- [ ] Set up Meta Pixel
- [ ] Test all forms and CTAs
- [ ] Verify mobile responsiveness
- [ ] Check accessibility (WCAG compliance)
- [ ] Test performance (Core Web Vitals)
- [ ] Verify SEO meta tags
- [ ] Test social media sharing

### Launch Day

- [ ] Deploy to production
- [ ] Verify all pages load correctly
- [ ] Test analytics tracking
- [ ] Monitor error logs
- [ ] Check search console for indexing
- [ ] Verify sitemap submission

### Post-Launch

- [ ] Monitor performance metrics
- [ ] Track user engagement
- [ ] Monitor conversion rates
- [ ] Gather user feedback
- [ ] Plan content updates

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed
2. **Image Loading**: Check image paths and Next.js Image configuration
3. **Analytics**: Verify environment variables are set correctly
4. **Styling**: Clear browser cache and restart dev server

### Performance Issues

- Use Next.js Image component for all images
- Implement lazy loading for non-critical components
- Monitor Core Web Vitals in Google PageSpeed Insights

## 📞 Support

For technical support or questions:

- **Email**: tech@ccmg.lk
- **Documentation**: Check the TECHNICAL_DOCUMENTATION.md file
- **Issues**: Create an issue in the repository

## 📄 License

This project is proprietary to CCMG. All rights reserved.

---

**CCMG - Connecting insight to impact across Sri Lanka and beyond.** 