// Legal Movie API Services for MovieFlix Integration

export const legalMovieAPIs = {
  // 1. The Movie Database (TMDB) - Most Popular
  tmdb: {
    name: "The Movie Database (TMDB)",
    baseUrl: "https://api.themoviedb.org/3",
    website: "https://www.themoviedb.org/",
    features: ["Movies", "TV Shows", "Actor Info", "High-quality Images", "Trailers"],
    pricing: "Free with API key",
    apiKey: "5fc301ec3403413bf0d965794e7753a7", // Your TMDB API key
    endpoints: {
      popular: "/movie/popular",
      search: "/search/movie",
      details: "/movie/{movie_id}",
      trending: "/trending/movie/week"
    }
  },

  // 2. Open Movie Database (OMDB) - Currently Used
  omdb: {
    name: "Open Movie Database (OMDB)",
    baseUrl: "https://www.omdbapi.com",
    website: "http://www.omdbapi.com/",
    features: ["Movie Details", "Search", "Ratings", "Plot"],
    pricing: "Free tier available",
    currentlyUsed: true
  },

  // 3. JustWatch API
  justwatch: {
    name: "JustWatch API",
    baseUrl: "https://apis.justwatch.com",
    features: ["Streaming Availability", "Where to Watch", "Pricing"],
    pricing: "Contact for pricing"
  },

  // 4. MovieGlu API
  movieglu: {
    name: "MovieGlu API",
    baseUrl: "https://api-gate2.movieglu.com",
    features: ["Cinema Times", "Movie Info", "Ticket Booking"],
    pricing: "Paid service"
  }
}

// Enhanced API Service for MovieFlix
export class MovieAPIService {
  constructor() {
    this.tmdbApiKey = "5fc301ec3403413bf0d965794e7753a7" // Your TMDB API key
    this.omdbApiKey = "9b6f5d2a" // Current key
    this.tmdbBaseUrl = "https://api.themoviedb.org/3"
    this.omdbBaseUrl = "https://www.omdbapi.com"
  }

  // Get popular movies from TMDB
  async getPopularMovies(page = 1) {
    try {
      const response = await fetch(
        `${this.tmdbBaseUrl}/movie/popular?api_key=${this.tmdbApiKey}&page=${page}`
      )
      const data = await response.json()
      return this.formatTMDBMovies(data.results)
    } catch (error) {
      console.error("Error fetching popular movies:", error)
      return []
    }
  }

  // Get trending movies from TMDB
  async getTrendingMovies(timeWindow = 'week') {
    try {
      const response = await fetch(
        `${this.tmdbBaseUrl}/trending/movie/${timeWindow}?api_key=${this.tmdbApiKey}`
      )
      const data = await response.json()
      return this.formatTMDBMovies(data.results)
    } catch (error) {
      console.error("Error fetching trending movies:", error)
      return []
    }
  }

  // Search movies in TMDB
  async searchMoviesTMDB(query, page = 1) {
    try {
      const response = await fetch(
        `${this.tmdbBaseUrl}/search/movie?api_key=${this.tmdbApiKey}&query=${encodeURIComponent(query)}&page=${page}`
      )
      const data = await response.json()
      return this.formatTMDBMovies(data.results)
    } catch (error) {
      console.error("Error searching movies in TMDB:", error)
      return []
    }
  }

  // Get movie details from TMDB
  async getMovieDetailsTMDB(movieId) {
    try {
      const response = await fetch(
        `${this.tmdbBaseUrl}/movie/${movieId}?api_key=${this.tmdbApiKey}&append_to_response=credits,videos`
      )
      const data = await response.json()
      return this.formatTMDBMovieDetail(data)
    } catch (error) {
      console.error("Error fetching movie details:", error)
      return null
    }
  }

  // Get movies by genre
  async getMoviesByGenre(genreId, page = 1) {
    try {
      const response = await fetch(
        `${this.tmdbBaseUrl}/discover/movie?api_key=${this.tmdbApiKey}&with_genres=${genreId}&page=${page}`
      )
      const data = await response.json()
      return this.formatTMDBMovies(data.results)
    } catch (error) {
      console.error("Error fetching movies by genre:", error)
      return []
    }
  }

  // Format TMDB movies to match our current format
  formatTMDBMovies(movies) {
    return movies.map(movie => ({
      imdbID: `tmdb_${movie.id}`,
      Title: movie.title,
      Year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
      Type: 'movie',
      Poster: movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'N/A',
      imdbRating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
      Genre: movie.genre_ids ? this.getGenreNames(movie.genre_ids).join(', ') : 'N/A',
      Plot: movie.overview || 'No plot available',
      Director: 'N/A', // Would need additional API call
      Actors: 'N/A' // Would need additional API call
    }))
  }

  // Format TMDB movie detail
  formatTMDBMovieDetail(movie) {
    const director = movie.credits?.crew?.find(person => person.job === 'Director')
    const mainActors = movie.credits?.cast?.slice(0, 5).map(actor => actor.name).join(', ')
    
    return {
      imdbID: `tmdb_${movie.id}`,
      Title: movie.title,
      Year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
      Type: 'movie',
      Poster: movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'N/A',
      imdbRating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
      Genre: movie.genres ? movie.genres.map(g => g.name).join(', ') : 'N/A',
      Plot: movie.overview || 'No plot available',
      Director: director ? director.name : 'N/A',
      Actors: mainActors || 'N/A',
      Runtime: movie.runtime ? `${movie.runtime} min` : 'N/A',
      Released: movie.release_date || 'N/A',
      Country: movie.production_countries?.[0]?.name || 'N/A',
      Language: movie.original_language || 'N/A',
      BoxOffice: 'N/A', // TMDB doesn't provide box office data
      Metascore: 'N/A'
    }
  }

  // Get genre names from IDs (TMDB genre mapping)
  getGenreNames(genreIds) {
    const genreMap = {
      28: 'Action', 35: 'Comedy', 18: 'Drama', 27: 'Horror',
      878: 'Science Fiction', 53: 'Thriller', 10749: 'Romance',
      16: 'Animation', 99: 'Documentary', 14: 'Fantasy',
      80: 'Crime', 9648: 'Mystery', 10752: 'War', 37: 'Western',
      12: 'Adventure', 36: 'History', 10402: 'Music', 10770: 'TV Movie'
    }
    return genreIds.map(id => genreMap[id] || 'Unknown').filter(Boolean)
  }

  // Fallback to OMDB for additional details
  async searchOMDB(query) {
    try {
      const response = await fetch(
        `${this.omdbBaseUrl}/?s=${encodeURIComponent(query)}&apikey=${this.omdbApiKey}`
      )
      const data = await response.json()
      return data.Response === 'True' ? data.Search : []
    } catch (error) {
      console.error("Error searching OMDB:", error)
      return []
    }
  }
}

// Regional content categories for better organization
export const regionalCategories = {
  bollywood: {
    name: "Bollywood",
    tmdbGenres: [10769], // Indian movies aren't well categorized in TMDB
    searchTerms: ["bollywood", "hindi", "mumbai", "shah rukh khan", "aamir khan", "salman khan"]
  },
  southIndian: {
    name: "South Indian",
    searchTerms: ["telugu", "tamil", "malayalam", "kannada", "baahubali", "kgf", "pushpa"]
  },
  nepali: {
    name: "Nepali",
    searchTerms: ["nepali", "nepal", "kathmandu"]
  },
  hollywood: {
    name: "Hollywood",
    tmdbGenres: [28, 35, 18, 27, 878, 53] // Action, Comedy, Drama, Horror, Sci-Fi, Thriller
  }
}

export default MovieAPIService