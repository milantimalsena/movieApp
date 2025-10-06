// Net20.cc API Service for MovieFlix
class Net20ApiService {
  constructor() {
    this.baseURL = 'https://net20.cc'
    this.apiEndpoints = {
      search: '/api/search',
      movie: '/api/movie',
      trending: '/api/trending',
      categories: '/api/categories',
      latest: '/api/latest'
    }
  }

  // Generic API call method with error handling
  async makeApiCall(endpoint, params = {}) {
    try {
      const url = new URL(this.baseURL + endpoint)
      
      // Add parameters to URL
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          url.searchParams.append(key, params[key])
        }
      })

      console.log('Net20 API Request:', url.toString())

      const response = await fetch(url.toString(), {
        method: 'GET',
        mode: 'cors', // Explicitly handle CORS
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'MovieFlix/1.0',
          'Origin': window.location.origin
        },
        // Add timeout to prevent hanging requests
        signal: AbortSignal.timeout(10000) // 10 second timeout
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`)
      }

      const data = await response.json()
      console.log('Net20 API Response:', data)
      return data
    } catch (error) {
      console.error('Net20 API Error:', error)
      
      // Enhanced error information
      const errorInfo = {
        message: error.message,
        type: this.categorizeError(error),
        timestamp: new Date().toISOString(),
        endpoint: endpoint
      }
      
      throw errorInfo
    }
  }

  // Categorize errors for better handling
  categorizeError(error) {
    if (error.name === 'AbortError') return 'timeout'
    if (error.message.includes('CORS') || error.message.includes('cors')) return 'cors'
    if (error.message.includes('Failed to fetch') || error.message.includes('network')) return 'network'
    if (error.message.includes('HTTP 4')) return 'client_error'
    if (error.message.includes('HTTP 5')) return 'server_error'
    return 'unknown'
  }

  // Check if the API is available
  async checkAvailability() {
    try {
      const response = await fetch(this.baseURL, {
        method: 'HEAD',
        mode: 'cors',
        signal: AbortSignal.timeout(5000)
      })
      return response.ok
    } catch (error) {
      console.warn('Net20 API availability check failed:', error.message)
      return false
    }
  }

  // Search movies
  async searchMovies(query, page = 1, limit = 20) {
    try {
      const response = await this.makeApiCall(this.apiEndpoints.search, {
        q: query,
        page,
        limit
      })
      
      return this.transformMovieData(response)
    } catch (error) {
      console.error('Search movies error:', error)
      return { movies: [], total: 0, error: error.message }
    }
  }

  // Get trending movies
  async getTrendingMovies(page = 1, limit = 20) {
    try {
      const response = await this.makeApiCall(this.apiEndpoints.trending, {
        page,
        limit
      })
      
      return this.transformMovieData(response)
    } catch (error) {
      console.error('Get trending movies error:', error)
      return { movies: [], total: 0, error: error.message }
    }
  }

  // Get latest movies
  async getLatestMovies(page = 1, limit = 20) {
    try {
      const response = await this.makeApiCall(this.apiEndpoints.latest, {
        page,
        limit
      })
      
      return this.transformMovieData(response)
    } catch (error) {
      console.error('Get latest movies error:', error)
      return { movies: [], total: 0, error: error.message }
    }
  }

  // Get movie details by ID
  async getMovieDetails(movieId) {
    try {
      const response = await this.makeApiCall(this.apiEndpoints.movie, {
        id: movieId
      })
      
      return this.transformMovieDetail(response)
    } catch (error) {
      console.error('Get movie details error:', error)
      return { error: error.message }
    }
  }

  // Get movies by category
  async getMoviesByCategory(category, page = 1, limit = 20) {
    try {
      const response = await this.makeApiCall(this.apiEndpoints.categories, {
        category,
        page,
        limit
      })
      
      return this.transformMovieData(response)
    } catch (error) {
      console.error('Get movies by category error:', error)
      return { movies: [], total: 0, error: error.message }
    }
  }

  // Transform API response to match our app's format
  transformMovieData(apiResponse) {
    try {
      // Handle different possible response structures from net20.cc
      let movies = []
      
      if (apiResponse.data && Array.isArray(apiResponse.data)) {
        movies = apiResponse.data
      } else if (apiResponse.results && Array.isArray(apiResponse.results)) {
        movies = apiResponse.results
      } else if (apiResponse.movies && Array.isArray(apiResponse.movies)) {
        movies = apiResponse.movies
      } else if (Array.isArray(apiResponse)) {
        movies = apiResponse
      }

      const transformedMovies = movies.map(movie => ({
        imdbID: movie.id || movie.imdb_id || movie.imdbID || `net20-${movie.title?.replace(/\s+/g, '-').toLowerCase()}`,
        Title: movie.title || movie.name || movie.Title || 'Unknown Title',
        Year: movie.year || movie.release_date?.split('-')[0] || movie.Year || 'N/A',
        Type: movie.type || movie.media_type || 'movie',
        Poster: movie.poster || movie.poster_path || movie.image || movie.Poster || 'N/A',
        imdbRating: movie.rating || movie.vote_average || movie.imdb_rating || 'N/A',
        Genre: movie.genre || movie.genres?.join(', ') || movie.Genre || 'N/A',
        Plot: movie.plot || movie.overview || movie.description || movie.Plot || 'No plot available',
        Director: movie.director || movie.Director || 'N/A',
        Actors: movie.actors || movie.cast || movie.Actors || 'N/A',
        Runtime: movie.runtime || movie.duration || movie.Runtime || 'N/A',
        Released: movie.released || movie.release_date || movie.Released || 'N/A',
        Language: movie.language || movie.original_language || movie.Language || 'N/A',
        Country: movie.country || movie.origin_country || movie.Country || 'N/A',
        Awards: movie.awards || movie.Awards || 'N/A',
        Metascore: movie.metascore || movie.Metascore || 'N/A',
        // Additional fields specific to streaming
        streamUrl: movie.stream_url || movie.video_url || null,
        trailerUrl: movie.trailer_url || movie.trailer || null,
        quality: movie.quality || 'HD',
        size: movie.size || 'N/A',
        downloadUrl: movie.download_url || null
      }))

      return {
        movies: transformedMovies,
        total: apiResponse.total || apiResponse.totalResults || transformedMovies.length,
        page: apiResponse.page || 1,
        totalPages: apiResponse.totalPages || Math.ceil((apiResponse.total || transformedMovies.length) / 20)
      }
    } catch (error) {
      console.error('Transform movie data error:', error)
      return { movies: [], total: 0, error: 'Failed to transform movie data' }
    }
  }

  // Transform detailed movie response
  transformMovieDetail(apiResponse) {
    try {
      const movie = apiResponse.data || apiResponse
      
      return {
        imdbID: movie.id || movie.imdb_id || movie.imdbID,
        Title: movie.title || movie.name || movie.Title,
        Year: movie.year || movie.release_date?.split('-')[0] || movie.Year,
        Rated: movie.rated || movie.certification || movie.Rated || 'N/A',
        Released: movie.released || movie.release_date || movie.Released,
        Runtime: movie.runtime || movie.duration || movie.Runtime,
        Genre: movie.genre || movie.genres?.join(', ') || movie.Genre,
        Director: movie.director || movie.Director,
        Writer: movie.writer || movie.Writer || 'N/A',
        Actors: movie.actors || movie.cast || movie.Actors,
        Plot: movie.plot || movie.overview || movie.description || movie.Plot,
        Language: movie.language || movie.original_language || movie.Language,
        Country: movie.country || movie.origin_country || movie.Country,
        Awards: movie.awards || movie.Awards || 'N/A',
        Poster: movie.poster || movie.poster_path || movie.image || movie.Poster,
        Metascore: movie.metascore || movie.Metascore || 'N/A',
        imdbRating: movie.rating || movie.vote_average || movie.imdb_rating || 'N/A',
        imdbVotes: movie.votes || movie.vote_count || movie.imdbVotes || 'N/A',
        Type: movie.type || movie.media_type || 'movie',
        DVD: movie.dvd || movie.DVD || 'N/A',
        BoxOffice: movie.box_office || movie.BoxOffice || 'N/A',
        Production: movie.production || movie.Production || 'N/A',
        Website: movie.website || movie.Website || 'N/A',
        Response: 'True',
        // Streaming specific fields
        streamUrl: movie.stream_url || movie.video_url || null,
        trailerUrl: movie.trailer_url || movie.trailer || null,
        quality: movie.quality || 'HD',
        size: movie.size || 'N/A',
        downloadUrl: movie.download_url || null,
        subtitles: movie.subtitles || [],
        seasons: movie.seasons || null, // For TV series
        episodes: movie.episodes || null // For TV series
      }
    } catch (error) {
      console.error('Transform movie detail error:', error)
      return { error: 'Failed to transform movie details' }
    }
  }

  // Check API health
  async checkApiHealth() {
    try {
      const response = await fetch(this.baseURL + '/api/health', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      })
      
      return response.ok
    } catch (error) {
      console.warn('Net20 API health check failed:', error)
      return false
    }
  }
}

// Create singleton instance
const net20Api = new Net20ApiService()

export default net20Api

// Named exports for specific functions
export const {
  searchMovies,
  getTrendingMovies,
  getLatestMovies,
  getMovieDetails,
  getMoviesByCategory,
  checkApiHealth
} = net20Api