# MovieFlix - OTT Movie Streaming Platform

A modern, responsive OTT (Over-The-Top) movie streaming platform built with React and Vite. Browse, search, and manage your favorite movies with a beautiful Netflix-inspired interface.

## ✨ Features

- **🎬 Movie Search**: Search for movies using the OMDB API
- **❤️ Favorites Management**: Add/remove movies to your personal favorites collection
- **📱 Responsive Design**: Beautiful, mobile-first responsive layout
- **🎨 Modern UI**: Netflix-inspired dark theme with smooth animations
- **🔍 Movie Details**: Detailed movie pages with ratings, cast, and plot
- **🚀 Fast Loading**: Optimized with Vite for lightning-fast development and builds
- **🎯 Popular Movies**: Curated list of popular movies on homepage

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: CSS3 with modern features (Grid, Flexbox, CSS Variables)
- **Build Tool**: Vite
- **API**: OMDB API for movie data
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movieApp
```

2. Install dependencies:
```bash
npm install
```

3. Get your OMDB API key:
   - Visit [OMDB API](http://www.omdbapi.com/apikey.aspx)
   - Sign up for a free API key
   - Replace the API key in `src/pages/Home.jsx`

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
movieApp/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx          # Footer component
│   │   ├── MovieCard.jsx       # Individual movie card component
│   │   ├── MovieGrid.jsx       # Grid layout for movies
│   │   ├── Movies.jsx          # Legacy component (deprecated)
│   │   ├── Navbar.jsx          # Navigation bar
│   │   └── SearchBar.jsx       # Search input component
│   ├── pages/
│   │   ├── Favorites.jsx       # Favorites page
│   │   ├── Home.jsx            # Home page with search and popular movies
│   │   └── MovieDetail.jsx     # Individual movie detail page
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # Global styles
│   ├── index.css               # Base styles
│   └── main.jsx                # App entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Components

### Home Page
- Search functionality with popular search suggestions
- Grid of popular movies loaded on initial visit
- Search results display with loading states

### Movie Cards
- Hover effects with play overlay
- Favorite toggle functionality
- Movie ratings and metadata display
- Responsive design for different screen sizes

### Favorites System
- Context-based state management
- Persistent favorites during session
- Empty state with call-to-action

### Movie Detail Page
- Full movie information including plot, cast, crew
- Large hero section with background image
- Ratings from IMDB and Metacritic
- Genre tags and movie metadata

## 🎨 Design Features

- **Dark Theme**: Professional dark color scheme
- **Gradient Accents**: Red-to-teal gradients for visual appeal
- **Smooth Animations**: Hover effects and transitions
- **Glass Morphism**: Subtle backdrop blur effects
- **Typography**: Clean Inter font family
- **Icons**: Font Awesome icons throughout
- **Loading States**: Spinner animations for better UX

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for tablets and desktops
- Collapsible navigation for mobile
- Adaptive grid layouts
- Touch-friendly interactions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Future Enhancements

- [ ] User authentication and accounts
- [ ] Movie watchlists and categories
- [ ] Video streaming integration
- [ ] Social features (reviews, ratings)
- [ ] Advanced filtering and sorting
- [ ] Offline mode with service workers
- [ ] Progressive Web App (PWA) features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for movie data
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for Inter font family
- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://reactjs.org/) for the powerful UI library

---

**MovieFlix** - Your ultimate destination for discovering and managing your favorite movies! 🎬+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
