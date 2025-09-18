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

## ⚠️ Windows PowerShell troubleshooting

If you see an error like:

```
File C:\Program Files\nodejs\npm.ps1 cannot be loaded. The file C:\Program Files\nodejs\npm.ps1 is not digitally signed.
You cannot run this script on the current system.
```

This is a Windows PowerShell execution policy restriction that blocks the `npm` wrapper script (`npm.ps1`). It commonly appears when running `npm` in PowerShell and can make `npm run` fail even though the project is intact.

Permanent fixes and safe workarounds:

- Recommended (change PowerShell policy for current user):

   1. Open PowerShell as your user (not Administrator) and run:

       ```powershell
       Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
       ```

       This allows locally created scripts and signed remote scripts to run for your user account only. It is safe for development machines and avoids lowering system-wide security.

- Alternative (use the `npm.cmd` shim instead of `npm` inside PowerShell):

   - Run commands with `npm.cmd` (for example `npm.cmd install`, `npm.cmd run dev`) — this bypasses the PowerShell wrapper and works without changing policy.

- Even better: use a Node version manager (recommended) such as `nvm-windows` so Node and npm are installed per-user and manage PATH cleanly.

Notes and tips:

- After changing the policy, close and reopen PowerShell.
- To check your current policy run: `Get-ExecutionPolicy -List`.
- Only change execution policy if you understand the implications; `RemoteSigned` for `CurrentUser` is a reasonable, low-risk setting for development.

If you're still stuck after applying one of these fixes, run `npm.cmd run dev` from the project folder and paste the full terminal output here so I can help further.