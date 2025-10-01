
function Movies({ movie }) {
    function addToFavorites(movie) {
        alert(`Added ${movie.Title} to favorites!`);
    }
    return(
        <>
        <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={() => addToFavorites(movie)}>
                 ♥  
                </button>

            </div>

        </div>

        <div className="movie-info">
            <h3 className="movie-title">{movie.Title}</h3>
            <p className="movie-year">{movie.Year}</p>



        </div>
      </div>
        </>

    )
}
export default Movies