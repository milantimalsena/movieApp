import MovieCard from "../components/MoviCard"
function Home(){


    const movie1 = {Title : "Milan", Year : "2024"}
    const movie2 = {Title : "Pathaan", Year : "2023"}
    const movie3 = {Title : "Tiger", Year : "2022"}
    const movie4 = {Title : "War", Year : "2021"}

    
    return(
    <>
<div className="home">
<div className="movie-list">
    {Movies.map(movie => (
        <MovieCard key={movie.Title} movie={movie} />
    ))}
    
</div>

{/* <Movies movie={movie1} />

<Movies movie={movie2} />
<Movies movie={movie3} />
<Movies movie={movie4} /> */}

</div>
</div>

    </>
    )
}
export default Home