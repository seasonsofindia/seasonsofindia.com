# Seasons of India - Modern Restaurant Website

A lightweight, modern React website for Seasons of India restaurant.

## 🚀 Features

- ✅ Responsive design for all devices
- ✅ Rotating hero image animation
- ✅ Scrolling logo functionality
- ✅ Interactive menu with categories and tags
- ✅ SEO optimized with structured data
- ✅ Fast loading and lightweight
- ✅ Modern React with TypeScript

## 📁 Project Structure

```
src/
├── restaurant/
│   ├── RestaurantApp.tsx      # Main app component
│   ├── pages/
│   │   └── Restaurant.tsx     # Main restaurant page
│   ├── components/
│   │   ├── Header.tsx         # Navigation with scrolling logo
│   │   ├── Hero.tsx          # Hero section with rotating image
│   │   ├── MenuSection.tsx   # Interactive menu display
│   │   ├── Contact.tsx       # Contact information
│   │   └── Footer.tsx        # Footer
│   └── data/
│       └── menuData.ts       # Menu items and categories
├── components/ui/            # Reusable UI components
└── lib/                      # Utilities
```

## 🛠️ Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📦 Deployment

The built files will be in the `dist/` folder, ready to deploy to any static hosting service:

- **Netlify/Vercel:** Drag and drop the `dist` folder
- **Traditional hosting:** Upload `dist` contents to your web server
- **CDN:** All assets are optimized for CDN delivery

## 🎯 Key Features

### Rotating Hero Image
Smooth CSS animation on the hero food image that rotates continuously.

### Scrolling Logo
Header logo dynamically resizes based on scroll position for better UX.

### Interactive Menu
- Organized by categories (Thali, Appetizers, Mains, etc.)
- Each item displays tags and pricing
- Responsive two-column layout

### SEO Optimized
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data for search engines
- Fast loading for better rankings

## 🔧 Technology Stack

- **React 18** - Modern UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool
- **Radix UI** - Accessible components

## 📱 Browser Support

Works on all modern browsers including:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## 🚀 Performance

- Lightweight bundle size
- Optimized images
- Fast loading times
- CDN-ready assets

## 🪟 Windows PowerShell troubleshooting

If you see an error like `npm.ps1 cannot be loaded` when running `npm run dev` on Windows PowerShell, it's caused by PowerShell's execution policy blocking unsigned scripts. To fix it for your user (safe and persistent), run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

This allows locally created scripts (such as the `npm` wrapper scripts installed with Node) while keeping protections for scripts downloaded from the internet. If your machine is managed by corporate Group Policy, contact your admin — the policy may be enforced at a higher level and cannot be changed by this command.