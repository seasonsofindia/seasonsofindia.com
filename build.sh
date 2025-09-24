#!/bin/bash

echo "Building Seasons of India Restaurant Website..."
echo "========================================"

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the restaurant site
echo "Building restaurant site..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "========================================"
    echo "✅ Restaurant site built successfully!"
    echo "📁 Files are ready in: dist/"
    echo "🚀 To deploy: Copy dist/ to your web server"
    echo "🌐 Entry point: dist/index.html"
    echo "========================================"
else
    echo "❌ Build failed. Please check for errors above."
    exit 1
fi