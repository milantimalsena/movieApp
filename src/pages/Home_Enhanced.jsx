import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import { mockMoviesDatabase, getMoviesByCategory, getRandomMovies } from '../data/moviesData'
import MovieAPIService from '../services/legalMovieAPIs'

// Initialize the legal movie API service
const movieAPI = new MovieAPIService()

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [apiSource, setApiSource] = useState('mock') // 'mock', 'tmdb', 'omdb'

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

  const handleCategoryChange = async (category) => {
    setActiveCategory(category)
    setHasSearched(false)
    setLoading(true)
    setError(null)

    try {
      if (category === 'all') {
        // Load popular movies from TMDB
        const tmdbMovies = await movieAPI.getPopularMovies()
        if (tmdbMovies && tmdbMovies.length > 0) {
          setMovies(tmdbMovies)
          setApiSource('tmdb')
        } else {
          setMovies(getRandomMovies(20))
          setApiSource('mock')
        }
      } else if (category === 'trending') {
        // Load trending movies from TMDB
        const trendingMovies = await movieAPI.getTrendingMovies()
        if (trendingMovies && trendingMovies.length > 0) {
          setMovies(trendingMovies)
          setApiSource('tmdb')
        } else {
          setMovies(getMoviesByCategory('hollywood'))
          setApiSource('mock')
        }
      } else if (category === 'bollywood') {
        // Search for Bollywood movies
        const bollywoodResults = await movieAPI.searchMoviesTMDB('bollywood hindi')
        if (bollywoodResults && bollywoodResults.length > 0) {
          setMovies(bollywoodResults)
          setApiSource('tmdb')
        } else {
          setMovies(getMoviesByCategory('bollywood'))
          setApiSource('mock')
        }
      } else {
        // Fallback to mock data for other categories
        setMovies(getMoviesByCategory(category))
        setApiSource('mock')
      }
    } catch (error) {
      console.error('Category change error:', error)
      // Fallback to mock data
      if (category === 'all') {
        setMovies(getRandomMovies(20))
      } else {
        setMovies(getMoviesByCategory(category))
      }
      setApiSource('mock')
    } finally {
      setLoading(false)
    }
  }

  const getDataSourceBadge = () => {
    const badges = {
      tmdb: { text: 'TMDB', color: '#01b4e4', title: 'The Movie Database' },
      omdb: { text: 'OMDB', color: '#f5c518', title: 'Open Movie Database' },
      mock: { text: 'LOCAL', color: '#6b7280', title: 'Local Database' }
    }
    
    const badge = badges[apiSource]
    return (
      <span 
        className="data-source-badge"
        style={{ 
          background: badge.color, 
          color: 'white',
          padding: '0.25rem 0.5rem',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          fontWeight: '600',
          marginLeft: '1rem'
        }}
        title={badge.title}
      >
        {badge.text}
      </span>
    )
  }

  return (
    <div className="home">
      <SearchBar onSearch={searchMovies} loading={loading} />
      
      <div className="content-section">
        <div className="container">
          <div className="section-header">
            <h2>
              {hasSearched ? 'Search Results' : `${getCategoryTitle(activeCategory)} Movies`}
              {getDataSourceBadge()}
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

          {!hasSearched && (
            <div className="category-filters">
              <button 
                className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('all')}
              >
                <i className="fas fa-fire"></i>
                Popular
              </button>
              <button 
                className={`category-btn ${activeCategory === 'trending' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('trending')}
              >
                <i className="fas fa-trending-up"></i>
                Trending
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

          {/* API Status Information */}
          <div className="api-status-info" style={{ 
            marginBottom: '2rem',
            padding: '1rem',
            background: 'rgba(26, 26, 26, 0.8)',
            borderRadius: '0.5rem',
            border: '1px solid #333',
            fontSize: '0.875rem',
            color: '#b3b3b3'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <i className="fas fa-info-circle" style={{ color: '#14b8a6' }}></i>
              <strong>Data Source Information</strong>
            </div>
            {apiSource === 'tmdb' && (
              <p>🎬 Loading high-quality movie data from The Movie Database (TMDB) - Legal & Professional</p>
            )}
            {apiSource === 'omdb' && (
              <p>🎯 Using Open Movie Database (OMDB) - Reliable movie information</p>
            )}
            {apiSource === 'mock' && (
              <p>📚 Using local movie database - Curated collection with diverse content</p>
            )}
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: '0.8' }}>
              💡 For better experience, get a free TMDB API key and replace it in the legalMovieAPIs.js file
            </p>
          </div>
          
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
    case 'trending': return 'Trending'
    case 'hollywood': return 'Hollywood'
    case 'bollywood': return 'Bollywood'
    case 'south-indian': return 'South Indian'
    case 'nepali': return 'Nepali'
    default: return 'Popular'
  }
}

export default Home