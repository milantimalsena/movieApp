import { Link, useLocation } from 'react-router-dom'
import { useState, useContext } from 'react'
import { FavoritesContext } from '../App'

function Navbar() {
  const location = useLocation()
  const { favorites } = useContext(FavoritesContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <i className="fas fa-film"></i>
          <span>MovieFlix</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-home"></i>
            Home
          </Link>
          <Link 
            to="/favorites" 
            className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-heart"></i>
            Favorites
            {favorites.length > 0 && (
              <span className="favorites-count">{favorites.length}</span>
            )}
          </Link>
        </div>
        
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar