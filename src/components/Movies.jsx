
// This component is deprecated - use MovieCard instead
import MovieCard from './MovieCard'

function Movies({ movie }) {
    // Convert old format to new format if needed
    const movieData = {
        imdbID: movie.imdbID || `temp-${movie.Title}-${movie.Year}`,
        Title: movie.Title,
        Year: movie.Year,
        Poster: movie.Poster || 'N/A',
        Type: movie.Type || 'movie'
    }
    
    return <MovieCard movie={movieData} />
}
export default Movies