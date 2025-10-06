import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import ApiNotification from '../components/ApiNotification'
import { mockMoviesDatabase, getMoviesByCategory, getRandomMovies } from '../data/moviesData'
import net20Api from '../services/net20Api'

const API_KEY = '9b6f5d2a' // OMDB API key as fallback
const API_URL = 'https://www.omdbapi.com'

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    // Load diverse movies on initial load with fallback to mock data
    loadInitialMovies()
  }, [])

  const loadInitialMovies = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Try Net20 API first for trending movies
      console.log('Fetching movies from Net20 API...')
      const net20Response = await net20Api.getTrendingMovies(1, 20)
      
      if (net20Response.movies && net20Response.movies.length > 0) {
        console.log(`Loaded ${net20Response.movies.length} movies from Net20 API`)
        setMovies(net20Response.movies)
      } else {
        throw new Error('No movies from Net20 API')
      }
    } catch (error) {
      console.log('Net20 API failed, using local database:', error.message)
      // Fallback to local mock database
      const randomMovies = getRandomMovies(20)
      setMovies(randomMovies)
    } finally {
      setLoading(false)
    }
  }

  const searchMovies = async (query) => {
    setLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      // First try Net20 API search
      console.log(`Searching for "${query}" using Net20 API...`)
      const net20Response = await net20Api.searchMovies(query, 1, 20)
      
      if (net20Response.movies && net20Response.movies.length > 0) {
        console.log(`Found ${net20Response.movies.length} movies from Net20 API`)
        setMovies(net20Response.movies)
        setError(null)
        return
      } else if (net20Response.error) {
        console.warn('Net20 API error:', net20Response.error)
        // Don't set error yet, we have fallbacks
      }
      
      // Fallback to OMDB API
      console.log('Trying OMDB API as fallback...')
      const response = await fetch(`${API_URL}/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`)
      const data = await response.json()

      if (data.Response === 'True') {
        console.log(`Found ${data.Search.length} movies from OMDB API`)
        setMovies(data.Search)
        setError('Using OMDB data - Net20 API temporarily unavailable')
      } else {
        // Fallback to local search in mock database
        console.log('Searching in local database...')
        const localResults = mockMoviesDatabase.filter(movie =>
          movie.Title.toLowerCase().includes(query.toLowerCase()) ||
          movie.Genre.toLowerCase().includes(query.toLowerCase()) ||
          movie.Director.toLowerCase().includes(query.toLowerCase()) ||
          movie.Actors.toLowerCase().includes(query.toLowerCase())
        )
        
        if (localResults.length > 0) {
          console.log(`Found ${localResults.length} movies in local database`)
          setMovies(localResults)
        } else {
          setError('No movies found')
          setMovies([])
        }
      }
    } catch (err) {
      console.log('All APIs failed, searching local database:', err.message)
      // Fallback to local search on network error
      const localResults = mockMoviesDatabase.filter(movie =>
        movie.Title.toLowerCase().includes(query.toLowerCase()) ||
        movie.Genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.Director.toLowerCase().includes(query.toLowerCase()) ||
        movie.Actors.toLowerCase().includes(query.toLowerCase())
      )
      
      if (localResults.length > 0) {
        setMovies(localResults)
      } else {
        setError('No movies found')
        setMovies([])
      }
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
        // Load trending movies for "all" category
        console.log('Loading trending movies from Net20 API...')
        const net20Response = await net20Api.getTrendingMovies(1, 20)
        
        if (net20Response.movies && net20Response.movies.length > 0) {
          setMovies(net20Response.movies)
        } else {
          throw new Error('No trending movies from Net20 API')
        }
      } else {
        // Try to get movies by category from Net20 API
        console.log(`Loading ${category} movies from Net20 API...`)
        const net20Response = await net20Api.getMoviesByCategory(category, 1, 20)
        
        if (net20Response.movies && net20Response.movies.length > 0) {
          setMovies(net20Response.movies)
        } else {
          throw new Error(`No ${category} movies from Net20 API`)
        }
      }
    } catch (error) {
      console.log(`Net20 API failed for category ${category}, using local database:`, error.message)
      // Fallback to local database
      if (category === 'all') {
        setMovies(getRandomMovies(20))
      } else {
        setMovies(getMoviesByCategory(category))
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home">
      <SearchBar onSearch={searchMovies} loading={loading} />
      
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