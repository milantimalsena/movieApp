
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import MovieDetail from './pages/MovieDetail'
import Footer from './components/Footer'

// Create context for favorites
export const FavoritesContext = createContext()

function App() {
  const [favorites, setFavorites] = useState([])
  
  const addToFavorites = (movie) => {
    setFavorites(prev => {
      // Check if movie already exists in favorites
      if (prev.find(fav => fav.imdbID === movie.imdbID)) {
        return prev
      }
      return [...prev, movie]
    })
  }
  
  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.imdbID !== movieId))
  }

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      addToFavorites, 
      removeFromFavorites 
    }}>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FavoritesContext.Provider>
  )
}

export default App

