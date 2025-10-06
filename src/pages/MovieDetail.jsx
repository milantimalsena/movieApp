import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FavoritesContext } from '../App'

const API_KEY = '9b6f5d2a'
const API_URL = 'https://www.omdbapi.com'

function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext)
  
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const isFavorite = favorites.some(fav => fav.imdbID === id)

  useEffect(() => {
    fetchMovieDetails()
  }, [id])

  const fetchMovieDetails = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/?i=${id}&plot=full&apikey=${API_KEY}`)
      const data = await response.json()

      if (data.Response === 'True') {
        setMovie(data)
      } else {
        setError(data.Error || 'Movie not found')
      }
    } catch (err) {
      setError('Failed to fetch movie details')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(id)
    } else {
      addToFavorites(movie)
    }
  }

  if (loading) {
    return (
      <div className="movie-detail-loading">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Loading movie details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="movie-detail-error">
        <div className="error-content">
          <i className="fas fa-exclamation-triangle"></i>
          <h2>Movie Not Found</h2>
          <p>{error}</p>
          <button onClick={() => navigate(-1)} className="back-btn">
            <i className="fas fa-arrow-left"></i>
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="movie-detail">
      <div className="movie-hero">
        <div className="hero-background">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'} alt="" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="container">
            <button onClick={() => navigate(-1)} className="back-button">
              <i className="fas fa-arrow-left"></i>
              Back
            </button>
            
            <div className="movie-hero-info">
              <div className="movie-poster-large">
                <img 
                  src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'} 
                  alt={movie.Title}
                />
              </div>
              
              <div className="movie-details-main">
                <h1 className="movie-title-large">{movie.Title}</h1>
                
                <div className="movie-meta">
                  <span className="year">{movie.Year}</span>
                  <span className="runtime">{movie.Runtime}</span>
                  <span className="rating">{movie.Rated}</span>
                </div>
                
                <div className="movie-ratings">
                  {movie.imdbRating !== 'N/A' && (
                    <div className="rating-item">
                      <i className="fab fa-imdb"></i>
                      <span>{movie.imdbRating}/10</span>
                    </div>
                  )}
                  {movie.Metascore !== 'N/A' && (
                    <div className="rating-item">
                      <span className="metacritic">MC</span>
                      <span>{movie.Metascore}/100</span>
                    </div>
                  )}
                </div>
                
                <div className="movie-genres">
                  {movie.Genre.split(', ').map((genre, index) => (
                    <span key={index} className="genre-tag">{genre}</span>
                  ))}
                </div>
                
                <p className="movie-plot">{movie.Plot}</p>
                
                <div className="movie-actions">
                  <button 
                    className={`favorite-btn-large ${isFavorite ? 'favorited' : ''}`}
                    onClick={handleFavoriteClick}
                  >
                    <i className={`fas fa-heart ${isFavorite ? 'filled' : ''}`}></i>
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                  
                  <button className="watch-btn">
                    <i className="fas fa-play"></i>
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="movie-info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-column">
              <h3>Cast & Crew</h3>
              <div className="info-item">
                <strong>Director:</strong>
                <span>{movie.Director}</span>
              </div>
              <div className="info-item">
                <strong>Writer:</strong>
                <span>{movie.Writer}</span>
              </div>
              <div className="info-item">
                <strong>Actors:</strong>
                <span>{movie.Actors}</span>
              </div>
            </div>
            
            <div className="info-column">
              <h3>Details</h3>
              <div className="info-item">
                <strong>Country:</strong>
                <span>{movie.Country}</span>
              </div>
              <div className="info-item">
                <strong>Language:</strong>
                <span>{movie.Language}</span>
              </div>
              <div className="info-item">
                <strong>Release Date:</strong>
                <span>{movie.Released}</span>
              </div>
              <div className="info-item">
                <strong>Box Office:</strong>
                <span>{movie.BoxOffice || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail