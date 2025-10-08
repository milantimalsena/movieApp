import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import { mockMoviesDatabase, getMoviesByCategory, getRandomMovies } from '../data/moviesData'
import { MovieAPIService } from '../services/legalMovieAPIs'

// Initialize the legal movie API service
const movieAPI = new MovieAPIService()

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [apiSource, setApiSource] = useState('mock') // 'mock', 'tmdb', 'omdb'
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    genre: 'all',
    year: 'all',
    rating: 'all',
    language: 'all',
    sortBy: 'popularity'
  })

  useEffect(() => {
    loadInitialMovies()
  }, [])

  const loadInitialMovies = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Try to load from TMDB first, fallback to mock data
      const tmdbMovies = await movieAPI.getPopularMovies()
      
      if (tmdbMovies && tmdbMovies.length > 0) {
        setMovies(tmdbMovies)
        setApiSource('tmdb')
      } else {
        // Fallback to mock data
        const randomMovies = getRandomMovies(20)
        setMovies(randomMovies)
        setApiSource('mock')
      }
    } catch (error) {
      console.error('Error loading movies:', error)
      // Fallback to mock data on error
      const randomMovies = getRandomMovies(20)
      setMovies(randomMovies)
      setApiSource('mock')
    } finally {
      setLoading(false)
    }
  }

  const searchMovies = async (query) => {
    setLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      // Try TMDB search first
      let results = await movieAPI.searchMoviesTMDB(query)
      
      if (results && results.length > 0) {
        setMovies(results)
        setApiSource('tmdb')
        return
      }

      // Fallback to OMDB search
      results = await movieAPI.searchOMDB(query)
      
      if (results && results.length > 0) {
        setMovies(results)
        setApiSource('omdb')
        return
      }

      // Final fallback to local search
      const localResults = mockMoviesDatabase.filter(movie =>
        movie.Title.toLowerCase().includes(query.toLowerCase()) ||
        movie.Genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.Director.toLowerCase().includes(query.toLowerCase()) ||
        movie.Actors.toLowerCase().includes(query.toLowerCase())
      )
      
      if (localResults.length > 0) {
        setMovies(localResults)
        setApiSource('mock')
      } else {
        setError('No movies found')
        setMovies([])
      }
    } catch (err) {
      console.error('Search error:', err)
      setError('Search failed. Please try again.')
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setHasSearched(false)
    setLoading(true)
    setError(null)

    setTimeout(() => {
      if (category === 'all') {
        setMovies(getRandomMovies(20))
      } else {
        setMovies(getMoviesByCategory(category))
      }
      setLoading(false)
    }, 500) // Small delay for smooth transition
  }

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const applyFilters = (currentFilters) => {
    setLoading(true)
    let filteredMovies = [...mockMoviesDatabase]

    // Apply genre filter
    if (currentFilters.genre !== 'all') {
      filteredMovies = filteredMovies.filter(movie => 
        movie.Genre.toLowerCase().includes(currentFilters.genre.toLowerCase())
      )
    }

    // Apply year filter
    if (currentFilters.year !== 'all') {
      const currentYear = new Date().getFullYear()
      switch (currentFilters.year) {
        case '2024-2025':
          filteredMovies = filteredMovies.filter(movie => {
            const year = parseInt(movie.Year)
            return year >= 2024 && year <= currentYear
          })
          break
        case '2020-2023':
          filteredMovies = filteredMovies.filter(movie => {
            const year = parseInt(movie.Year)
            return year >= 2020 && year <= 2023
          })
          break
        case '2010-2019':
          filteredMovies = filteredMovies.filter(movie => {
            const year = parseInt(movie.Year)
            return year >= 2010 && year <= 2019
          })
          break
        case 'before-2010':
          filteredMovies = filteredMovies.filter(movie => {
            const year = parseInt(movie.Year)
            return year < 2010
          })
          break
      }
    }

    // Apply rating filter
    if (currentFilters.rating !== 'all') {
      switch (currentFilters.rating) {
        case 'excellent':
          filteredMovies = filteredMovies.filter(movie => 
            parseFloat(movie.imdbRating) >= 8.0
          )
          break
        case 'good':
          filteredMovies = filteredMovies.filter(movie => 
            parseFloat(movie.imdbRating) >= 7.0 && parseFloat(movie.imdbRating) < 8.0
          )
          break
        case 'average':
          filteredMovies = filteredMovies.filter(movie => 
            parseFloat(movie.imdbRating) >= 6.0 && parseFloat(movie.imdbRating) < 7.0
          )
          break
      }
    }

    // Apply language/region filter
    if (currentFilters.language !== 'all') {
      switch (currentFilters.language) {
        case 'english':
          filteredMovies = filteredMovies.filter(movie => 
            movie.Language.toLowerCase().includes('english') ||
            movie.Country.toLowerCase().includes('usa') ||
            movie.Country.toLowerCase().includes('uk')
          )
          break
        case 'hindi':
          filteredMovies = filteredMovies.filter(movie => 
            movie.Language.toLowerCase().includes('hindi') ||
            movie.Country.toLowerCase().includes('india')
          )
          break
        case 'regional':
          filteredMovies = filteredMovies.filter(movie => 
            movie.Language.toLowerCase().includes('tamil') ||
            movie.Language.toLowerCase().includes('telugu') ||
            movie.Language.toLowerCase().includes('nepali') ||
            movie.Language.toLowerCase().includes('malayalam')
          )
          break
      }
    }

    // Apply sorting
    switch (currentFilters.sortBy) {
      case 'rating':
        filteredMovies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating))
        break
      case 'year':
        filteredMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
        break
      case 'title':
        filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title))
        break
      case 'popularity':
      default:
        // Keep original order for popularity
        break
    }

    setMovies(filteredMovies)
    setLoading(false)
  }

  const clearFilters = () => {
    const defaultFilters = {
      genre: 'all',
      year: 'all',
      rating: 'all',
      language: 'all',
      sortBy: 'popularity'
    }
    setFilters(defaultFilters)
    applyFilters(defaultFilters)
  }

  return (
    <div className="home">
      <SearchBar onSearch={searchMovies} loading={loading} />
      
      {/* API Status Banner */}
      {apiSource === 'mock' && (
        <div className="api-banner">
          <div className="container">
            <div className="banner-content">
              <i className="fas fa-info-circle"></i>
              <div className="banner-text">
                <h4>Upgrade to TMDB Integration</h4>
                <p>
                  Currently showing sample movies. Get your free TMDB API key from{' '}
                  <a 
                    href="https://www.themoviedb.org/settings/api" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="api-link"
                  >
                    themoviedb.org/settings/api
                  </a>
                  {' '}and add it to <code>src/services/legalMovieAPIs.js</code> for real movie data!
                </p>
              </div>
              <div className="api-source-indicator">
                <span className="source-badge mock">Using Sample Data</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {apiSource === 'tmdb' && (
        <div className="api-banner success">
          <div className="container">
            <div className="banner-content">
              <i className="fas fa-check-circle"></i>
              <div className="banner-text">
                <h4>TMDB Integration Active</h4>
                <p>Now showing real movie data from The Movie Database!</p>
              </div>
              <div className="api-source-indicator">
                <span className="source-badge tmdb">TMDB API</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="content-section">
        <div className="container">
          <div className="section-header">
            <h2>
              {hasSearched ? 'Search Results' : `${getCategoryTitle(activeCategory)} Movies`}
            </h2>
            {hasSearched && (
              <button 
                onClick={() => {
                  setHasSearched(false)
                  loadInitialMovies()
                }}
                className="back-btn"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Browse
              </button>
            )}
          </div>

          {/* Results Counter */}
          {!loading && (
            <div className="results-counter">
              <i className="fas fa-film"></i>
              {movies.length} {movies.length === 1 ? 'movie' : 'movies'} 
              {(filters.genre !== 'all' || filters.year !== 'all' || filters.rating !== 'all' || filters.language !== 'all') 
                ? ' matching your filters' 
                : hasSearched ? ' found' : ' available'
              }
            </div>
          )}

          {!hasSearched && (
            <div className="category-filters">
              <button 
                className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('all')}
              >
                <i className="fas fa-globe"></i>
                All Movies
              </button>
              <button 
                className={`category-btn ${activeCategory === 'hollywood' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('hollywood')}
              >
                <i className="fas fa-film"></i>
                Hollywood
              </button>
              <button 
                className={`category-btn ${activeCategory === 'bollywood' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('bollywood')}
              >
                <i className="fas fa-star"></i>
                Bollywood
              </button>
              <button 
                className={`category-btn ${activeCategory === 'south-indian' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('south-indian')}
              >
                <i className="fas fa-crown"></i>
                South Indian
              </button>
              <button 
                className={`category-btn ${activeCategory === 'nepali' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('nepali')}
              >
                <i className="fas fa-mountain"></i>
                Nepali
              </button>
            </div>
          )}

          {/* Advanced Filters Section */}
          {!hasSearched && (
            <div className="filters-section">
              <div className="filters-header">
                <button 
                  className="filters-toggle-btn"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <i className="fas fa-filter"></i>
                  Advanced Filters
                  <i className={`fas fa-chevron-${showFilters ? 'up' : 'down'}`}></i>
                </button>
                
                {(filters.genre !== 'all' || filters.year !== 'all' || filters.rating !== 'all' || filters.language !== 'all' || filters.sortBy !== 'popularity') && (
                  <button className="clear-filters-btn" onClick={clearFilters}>
                    <i className="fas fa-times"></i>
                    Clear All
                  </button>
                )}
              </div>

              {showFilters && (
                <div className="filters-grid">
                  {/* Genre Filter */}
                  <div className="filter-group">
                    <label className="filter-label">
                      <i className="fas fa-masks-theater"></i>
                      Genre
                    </label>
                    <select 
                      className="filter-select"
                      value={filters.genre}
                      onChange={(e) => handleFilterChange('genre', e.target.value)}
                    >
                      <option value="all">All Genres</option>
                      <option value="action">Action</option>
                      <option value="comedy">Comedy</option>
                      <option value="drama">Drama</option>
                      <option value="thriller">Thriller</option>
                      <option value="horror">Horror</option>
                      <option value="romance">Romance</option>
                      <option value="sci-fi">Sci-Fi</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="crime">Crime</option>
                      <option value="adventure">Adventure</option>
                      <option value="animation">Animation</option>
                      <option value="biography">Biography</option>
                    </select>
                  </div>

                  {/* Year Filter */}
                  <div className="filter-group">
                    <label className="filter-label">
                      <i className="fas fa-calendar-alt"></i>
                      Release Year
                    </label>
                    <select 
                      className="filter-select"
                      value={filters.year}
                      onChange={(e) => handleFilterChange('year', e.target.value)}
                    >
                      <option value="all">All Years</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2020-2023">2020-2023</option>
                      <option value="2010-2019">2010-2019</option>
                      <option value="before-2010">Before 2010</option>
                    </select>
                  </div>

                  {/* Rating Filter */}
                  <div className="filter-group">
                    <label className="filter-label">
                      <i className="fas fa-star"></i>
                      IMDb Rating
                    </label>
                    <select 
                      className="filter-select"
                      value={filters.rating}
                      onChange={(e) => handleFilterChange('rating', e.target.value)}
                    >
                      <option value="all">All Ratings</option>
                      <option value="excellent">8.0+ Excellent</option>
                      <option value="good">7.0-7.9 Good</option>
                      <option value="average">6.0-6.9 Average</option>
                    </select>
                  </div>

                  {/* Language Filter */}
                  <div className="filter-group">
                    <label className="filter-label">
                      <i className="fas fa-globe"></i>
                      Language
                    </label>
                    <select 
                      className="filter-select"
                      value={filters.language}
                      onChange={(e) => handleFilterChange('language', e.target.value)}
                    >
                      <option value="all">All Languages</option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="regional">Regional (Tamil, Telugu, Nepali)</option>
                    </select>
                  </div>

                  {/* Sort By Filter */}
                  <div className="filter-group">
                    <label className="filter-label">
                      <i className="fas fa-sort"></i>
                      Sort By
                    </label>
                    <select 
                      className="filter-select"
                      value={filters.sortBy}
                      onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    >
                      <option value="popularity">Popularity</option>
                      <option value="rating">Highest Rated</option>
                      <option value="year">Newest First</option>
                      <option value="title">A-Z Title</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          )}
          
          <MovieGrid 
            movies={movies} 
            loading={loading} 
            error={error} 
          />
        </div>
      </div>
    </div>
  )
}

const getCategoryTitle = (category) => {
  switch(category) {
    case 'hollywood': return 'Hollywood'
    case 'bollywood': return 'Bollywood'
    case 'south-indian': return 'South Indian'
    case 'nepali': return 'Nepali'
    default: return 'Featured'
  }
}

export default Home