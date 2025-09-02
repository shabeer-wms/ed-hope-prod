# 🎓 EdHop - Educational Excellence Platform

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7a84963-f949-4016-bc04-5bf4b0bc216e/deploy-status)](https://app.netlify.com/projects/ed-hope/deploys)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> 🌟 A modern, responsive educational platform built with React, TypeScript, and Tailwind CSS. Empowering students with world-class IELTS training, study abroad guidance, and comprehensive educational services.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Demo](#-demo)
- [📸 Screenshots](#-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Configuration](#-configuration)
- [📦 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

## ✨ Features

### 🎯 Core Features
- **📚 IELTS Training Programs** - Comprehensive preparation courses
- **🌍 Study Abroad Guidance** - Expert consultation for international education
- **🏆 100% Success Rate** - Proven track record of student achievements
- **👨‍🏫 Expert Instructors** - World-class faculty and mentors
- **📱 Responsive Design** - Seamless experience across all devices
- **🎨 Modern UI/UX** - Clean, intuitive, and accessible interface

### 🔧 Technical Features
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Type Safe** - Full TypeScript support
- 📱 **Mobile First** - Responsive design with Tailwind CSS
- 🎨 **Component Based** - Modular React architecture
- 🔍 **SEO Optimized** - Search engine friendly
- ♿ **Accessible** - WCAG 2.1 compliant
- 🚀 **PWA Ready** - Progressive Web App capabilities

## 🚀 Demo

🌐 **Live Site**: [EdHop Educational Platform](https://ed-hope.netlify.app)

## 📸 Screenshots

<div align="center">

### 🖥️ Desktop View
![Desktop Homepage](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=EdHop+Desktop+View)

### 📱 Mobile View
![Mobile Homepage](https://via.placeholder.com/300x600/4F46E5/FFFFFF?text=EdHop+Mobile+View)

</div>

## 🛠️ Tech Stack

### Frontend
- **⚛️ React 18.3.1** - Modern React with Hooks
- **📘 TypeScript 5.5.3** - Type-safe JavaScript
- **🎨 Tailwind CSS 3.4.1** - Utility-first CSS framework
- **🔗 React Router DOM 7.8.2** - Client-side routing
- **🎯 Lucide React** - Beautiful SVG icons

### Build Tools
- **⚡ Vite 5.4.2** - Next generation frontend tooling
- **🔧 ESLint** - Code linting and formatting
- **📦 PostCSS** - CSS processing
- **🔄 Autoprefixer** - CSS vendor prefixing

### Deployment
- **🌐 Netlify** - Continuous deployment and hosting
- **🔄 Git** - Version control

## ⚡ Quick Start

### Prerequisites
- 📦 **Node.js** (v18 or higher)
- 🧶 **npm** or **yarn**
- 🔧 **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shabeer-wms/ed-hope-prod.git
   cd ed-hop
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📁 Project Structure

```
ed-hop/
├── 📁 public/
│   └── _redirects          # Netlify redirects
├── 📁 src/
│   ├── 📁 assets/         # Images and static files
│   │   ├── edhop-logo-dark.png
│   │   └── edhop-logo-light.png
│   ├── 📁 components/     # Reusable components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── 📁 pages/         # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── CoursesPage.tsx
│   │   ├── AdmissionsPage.tsx
│   │   ├── GalleryPage.tsx
│   │   └── ContactPage.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite type definitions
├── 📄 index.html         # HTML template
├── 📄 package.json       # Dependencies and scripts
├── 📄 tailwind.config.js # Tailwind configuration
├── 📄 vite.config.ts     # Vite configuration
├── 📄 tsconfig.json      # TypeScript configuration
└── 📄 README.md          # This file
```

## 🎨 Design System

### 🎨 Color Palette
- **Primary**: Indigo shades for branding
- **Accent**: Complementary accent colors
- **Neutral**: Gray tones for text and backgrounds
- **Semantic**: Success, warning, and error states

### 📝 Typography
- **Font Family**: Poppins (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

### 📐 Spacing
- **Consistent**: 4px base unit spacing system
- **Responsive**: Adaptive spacing across breakpoints

## 📱 Responsive Design

Built with a mobile-first approach:

- 📱 **Mobile** (320px+): Optimized touch interfaces
- 📄 **Tablet** (768px+): Adaptive layouts
- 🖥️ **Desktop** (1024px+): Full-featured experience
- 🖥️ **Large** (1280px+): Enhanced spacing and typography

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Development
VITE_APP_TITLE=EdHop Educational Platform
VITE_API_URL=your_api_url_here

# Analytics (Optional)
VITE_GA_TRACKING_ID=your_ga_id_here
```

### Tailwind CSS Customization
Modify `tailwind.config.js` for custom themes:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { /* Your primary colors */ },
        accent: { /* Your accent colors */ }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  }
}
```

## 📦 Deployment

### 🌐 Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy** automatically on git push

### 🔧 Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **💻 Commit** your changes: `git commit -m 'Add amazing feature'`
4. **📤 Push** to the branch: `git push origin feature/amazing-feature`
5. **🔄 Open** a Pull Request

### 📋 Development Guidelines

- ✅ Follow TypeScript best practices
- ✅ Use conventional commit messages
- ✅ Write clear, self-documenting code
- ✅ Add comments for complex logic
- ✅ Test across different devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

### 🏢 EdHop Educational Platform
- 🌐 **Website**: [ed-hope.netlify.app](https://ed-hope.netlify.app)
- 📧 **Email**: info@edhop.com
- 📱 **Phone**: +1 (555) 123-4567
- 📍 **Address**: 123 Education Street, Learning City, LC 12345

### 👨‍💻 Development Team
- **Developer**: [Shabeer WMS](https://github.com/shabeer-wms)
- **Repository**: [ed-hope-prod](https://github.com/shabeer-wms/ed-hope-prod)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

[![GitHub stars](https://img.shields.io/github/stars/shabeer-wms/ed-hope-prod?style=social)](https://github.com/shabeer-wms/ed-hope-prod/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/shabeer-wms/ed-hope-prod?style=social)](https://github.com/shabeer-wms/ed-hope-prod/network/members)

**by www.pro26.in**

</div>