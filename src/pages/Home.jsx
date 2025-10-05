import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import { mockMoviesDatabase, getMoviesByCategory, getRandomMovies } from '../data/moviesData'

const API_KEY = '9b6f5d2a' // You should replace this with your own OMDB API key
const API_URL = 'https://www.omdbapi.com'

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    // Load diverse movies on initial load with fallback to mock data
    loadInitialMovies()
  }, [])

  const loadInitialMovies = () => {
    setLoading(true)
    setError(null)
    
    // Use mock database as primary source for better experience
    const randomMovies = getRandomMovies(20)
    setMovies(randomMovies)
    setLoading(false)
  }

  const searchMovies = async (query) => {
    setLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      // First try API search
      const response = await fetch(`${API_URL}/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`)
      const data = await response.json()

      if (data.Response === 'True') {
        setMovies(data.Search)
      } else {
        // Fallback to local search in mock database
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
      }
    } catch (err) {
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