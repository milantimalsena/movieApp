import Movies from "./Movies"

function MovieCard({ movie }) {
const movies = [
    {Title : "Milan", Year : "2024"},
    {Title : "Pathaan", Year : "2023"},
    {Title : "Tiger", Year : "2022"},
    {Title : "War", Year : "2021"},
    {Title : "Dhoom", Year : "2020"}
];

const handleSearch = (event) => {
    event.preventDefault();
   

}
   

    return(
        <div className="movie-container">
            <form onSubmit={handleSearch}className="search-form">
                <input type="text" placeholder="Search movies..." className="search-input" />
                <button type="submit" className="search-button">Search</button>

                </form>

    <div className="movie-grid">

{movies.map((movie, index) => (
    <Movies key={index} movie={movie} />
))}

</div>
</div>


    
    )
}
export default MovieCard