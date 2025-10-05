import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../App'

function MovieCard({ movie }) {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID)
  
  const handleFavoriteClick = (e) => {
    e.preventDefault()
    if (isFavorite) {
      removeFromFavorites(movie.imdbID)
    } else {
      addToFavorites(movie)
    }
  }

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`} className="movie-link">
        <div className="movie-poster-container">
          {!imageLoaded && !imageError && (
            <div className="poster-loading">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
          )}
          
          {imageError ? (
            <div className="poster-error">
              <i className="fas fa-film"></i>
              <span>No Image</span>
            </div>
          ) : (
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'}
              alt={movie.Title}
              className={`movie-poster ${imageLoaded ? 'loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
          
          <div className="movie-overlay">
            <button
              className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
              onClick={handleFavoriteClick}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <i className={`fas fa-heart ${isFavorite ? 'filled' : ''}`}></i>
            </button>
            
            <div className="movie-rating">
              <i className="fas fa-star"></i>
              <span>{movie.imdbRating || 'N/A'}</span>
            </div>
            
            <div className="play-overlay">
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>
        
        <div className="movie-info">
          <h3 className="movie-title" title={movie.Title}>{movie.Title}</h3>
          <div className="movie-details">
            <span className="movie-year">{movie.Year}</span>
            {movie.Type && <span className="movie-type">{movie.Type}</span>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard