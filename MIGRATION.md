# Restaurant Standalone Migration Guide

This folder contains a complete, independent restaurant website ready for GitHub migration.

## What's Included

### Core Files
- `index.html` - Main entry point (renamed from restaurant.html)
- `package.json` - Dependencies and scripts (minimal, optimized)
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Styling configuration
- `build.sh` - Build script

### Source Code
- `src/main.tsx` - Application entry point
- `src/index.css` - Global styles with design tokens
- `src/lib/utils.ts` - Utility functions
- `src/restaurant/` - All restaurant components and data
- `src/components/ui/` - Only necessary UI components

### Assets
- `public/assets/` - Only 3 essential images (logo, hero, background)

## Features Preserved
✅ Rotating hero image animation  
✅ Scrolling logo functionality  
✅ Two-column menu layout  
✅ Subcategories and tags  
✅ Legacy menu items (exact match)  
✅ Responsive design  
✅ SEO optimization  
✅ Structured data  

## Migration Steps

1. **Create New Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Standalone restaurant website"
   ```

2. **Development:**
   ```bash
   npm install
   npm run dev
   ```

3. **Production Build:**
   ```bash
   npm run build
   # Files output to dist/
   ```

## 📊 Size & Performance

- **Bundle Size:** Optimized and minimal
- **Dependencies:** Only essential packages
- **Loading Speed:** Fast with optimized assets
- **CDN Ready:** Static assets optimized for CDN delivery

## 🌐 Deployment Options

### Static Hosting
- **Netlify:** Drag and drop `dist/` folder
- **Vercel:** Connect GitHub repo for auto-deployment
- **GitHub Pages:** Upload `dist/` contents

### Traditional Hosting
- Build with `npm run build`
- Upload `dist/` contents to web server
- Point domain to the folder

### CDN Integration
- All assets in `public/assets/` are CDN-ready
- Optimized file sizes and formats
- Cache-friendly structure

## 🔄 Migration Benefits

✨ **Removed from Legacy:**
- All unused legacy files and assets
- Bootstrap dependencies  
- jQuery and legacy JavaScript
- Duplicate and outdated files

✨ **Modern Advantages:**
- React 18 with TypeScript
- Tailwind CSS design system
- Vite build system for fast development
- Modern ES modules
- Tree-shaking for smaller bundles
- Hot module replacement

This standalone website is production-ready and completely independent - no legacy dependencies or bloat!