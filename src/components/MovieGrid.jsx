import MovieCard from './MovieCard'

function MovieGrid({ movies, loading, error }) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Loading movies...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <i className="fas fa-exclamation-triangle"></i>
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-content">
          <i className="fas fa-film"></i>
          <h3>No movies found</h3>
          <p>Try searching with different keywords</p>
        </div>
      </div>
    )
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default MovieGrid