import { useContext } from 'react'
import { FavoritesContext } from '../App'
import MovieGrid from '../components/MovieGrid'

function Favorites() {
  const { favorites } = useContext(FavoritesContext)

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="page-header">
          <h1>
            <i className="fas fa-heart"></i>
            My Favorites
          </h1>
          <p>Your personal collection of favorite movies</p>
        </div>

        {favorites.length === 0 ? (
          <div className="empty-favorites">
            <div className="empty-content">
              <i className="fas fa-heart-broken"></i>
              <h3>No favorites yet</h3>
              <p>Start adding movies to your favorites by clicking the heart icon on any movie card</p>
              <a href="/" className="browse-btn">
                <i className="fas fa-search"></i>
                Browse Movies
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="favorites-stats">
              <span className="favorites-count">
                {favorites.length} movie{favorites.length !== 1 ? 's' : ''} in your collection
              </span>
            </div>
            <MovieGrid movies={favorites} />
          </>
        )}
      </div>
    </div>
  )
}

export default Favorites