# 🚀 ASOCEITY Portfolio

A cybersecurity-themed portfolio website built with React, Three.js, and Laravel backend integration. Features a Mr. Robot-inspired terminal interface with dynamic data loading and interactive animations.

## 🎯 Features

- **Terminal Interface**: Interactive hacker-style terminal with ASCII art
- **3D Animations**: Three.js particle systems and rotating elements
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Backend Integration**: Laravel API with fallback data for offline resilience
- **Contact Form**: Real-time form submission with rate limiting
- **Toast Notifications**: Success/error feedback with react-toastify
- **SEO Optimized**: Client-side routing with React Router

## 🛠️ Tech Stack

### Frontend
- **React 19** with modern hooks
- **Vite** for build tooling and HMR
- **Tailwind CSS** for utility-first styling
- **Three.js** for 3D graphics
- **Lucide React** for consistent iconography
- **React Router** for navigation
- **Axios** for API integration

### Backend
- **Laravel** API with RESTful endpoints
- **MongoDB/MySQL** for data persistence
- **Rate limiting** and CSRF protection

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/AbdullahYA1/fscoity.git
cd fscoity
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
# Copy environment file
cp .env.development .env

# Update API endpoints in .env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
VITE_CONTACT_ENDPOINT=http://localhost:8000/api/contact
```

4. **Start development server**
```bash
npm run dev
```

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run preview
```

### Environment Variables
Create `.env.production`:
```env
VITE_API_BASE_URL=https://your-api-domain.com/api
VITE_CONTACT_ENDPOINT=https://your-api-domain.com/api/contact
```

### Deploy to Vercel/Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables in your hosting platform

## 🧪 Testing

```bash
# Lint code
npm run lint

# Build production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── About/           # About section
│   ├── Contact/         # Contact form
│   ├── Hero/            # Landing section
│   ├── Navigation/      # Header navigation
│   └── shared/          # Shared animations & styles
├── pages/
│   ├── home/            # Terminal landing page
│   └── portfolio/       # Main portfolio page
└── assets/              # Static assets

```

## 🎨 Key Features

### Terminal Interface
- Interactive command system (`sudo cv` to access portfolio)
- Real-time typing animations
- Responsive ASCII art panels
- Mobile-optimized layouts

### Portfolio Sections
- **About**: Personal introduction with animated cards
- **Skills**: Progress bars with glow effects
- **Experience**: Timeline with company details
- **Education**: Academic background
- **Certificates**: Professional certifications
- **Projects**: Featured work with tech stacks
- **Contact**: Functional contact form

### Performance Optimizations
- Code splitting for vendor libraries
- Lazy loading of components
- Optimized bundle sizes
- Three.js performance tuning

## 🔧 Configuration

### API Integration
The app uses environment variables for API configuration:
- `VITE_API_BASE_URL`: Backend API base URL
- `VITE_CONTACT_ENDPOINT`: Contact form submission endpoint

### Fallback Data
Includes comprehensive fallback data for offline functionality when backend is unavailable.

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Abdullah Yousef Alowais**
- Backend Engineer & Full Stack Developer
- Cybersecurity Red Teamer
- Location: Riyadh, Saudi Arabia

---

*Built with ❤️ and ☕ in Saudi Arabia*
