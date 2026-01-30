# Portfolio Application

A modern, fully responsive portfolio website built with React, Vite, and TailwindCSS. This application showcases UX/PM projects with detailed case studies, work gallery, and contact information.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite for blazing-fast development
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Dark Theme**: Professional dark mode design matching Stitch UI designs
- **Dynamic Routing**: React Router for seamless navigation
- **Project Case Studies**: Detailed project pages in `/projects` directory
- **Filterable Work Gallery**: Category-based project filtering
- **Netlify Ready**: Pre-configured for instant deployment

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   └── ProjectCard.jsx  # Project card component
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page with hero & featured projects
│   │   ├── Work.jsx         # Filterable project gallery
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact & skills page
│   │   └── projects/        # Project case study pages
│   │       └── ProjectDetail.jsx
│   ├── data/                # Data files
│   │   └── projects.js      # Project data & configurations
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & Tailwind config
├── public/
│   └── _redirects           # Netlify SPA routing
├── netlify.toml             # Netlify deployment config
└── tailwind.config.js       # Tailwind configuration

```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **PostCSS** - CSS processing

## 📦 Installation

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

## 🌐 Development

The development server runs on `http://localhost:5173/` (or next available port).

### Available Routes

- `/` - Home page with hero section and featured projects
- `/work` - Complete work gallery with category filters
- `/about` - About page with mission and philosophy
- `/contact` - Contact page with process, skills, and contact info
- `/projects/:projectId` - Individual project case study pages

## 📝 Adding New Projects

To add a new project case study:

1. **Add project data** in `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 'your-project-slug',
    title: 'Your Project Title',
    category: 'HealthTech', // or FinTech, Strategy, Agile
    shortDescription: 'Brief description',
    // ... add all required fields
  }
];
```

2. **Add to featured/work arrays** if needed:

```javascript
export const featuredProjects = [
  {
    id: 1,
    category: 'YourCategory',
    title: 'Project Title',
    description: 'Description',
    image: 'image-url',
    link: '/projects/your-project-slug'
  }
];
```

3. The project will automatically be available at `/projects/your-project-slug`

## 🎨 Customization

### Colors

Update colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#135bec', // Change primary color
      dark: {
        bg: '#0a0a0a',
        card: '#1a1a1a',
        border: '#2a2a2a',
      }
    }
  }
}
```

### Content

- **Personal Info**: Update name, title, and stats in `src/pages/Home.jsx`
- **Skills**: Modify skills array in `src/pages/Contact.jsx`
- **Social Links**: Update links in `src/components/Footer.jsx` and `src/components/Header.jsx`

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

### Option 2: Deploy via Git

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will auto-detect the build settings from `netlify.toml`
4. Deploy!

### Build Settings (Auto-configured)

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Environment Variables

No environment variables required for basic setup. Add `.env` file if you need API keys or other secrets.

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ using React + Vite + TailwindCSS
