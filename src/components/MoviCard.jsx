import Movies from "./Movies"

function MovieCard({ movie }) {

    const movie1 = {Title : "Milan", Year : "2024"}
    const movie2 = {Title : "Pathaan", Year : "2023"}
    const movie3 = {Title : "Tiger", Year : "2022"}
    const movie4 = {Title : "War", Year : "2021"}
    const movie5 = {Title : "Dhoom", Year : "2020"}
    const movie6 = {Title : "Don", Year : "2019"}
    const movie7 = {Title : "Krrish", Year : "2018"}
    const movie8 = {Title : "Raees", Year : "2017"}
    const movie9 = {Title : "Sultan", Year : "2016"}
    const movie10 = {Title : "Bajrangi Bhaijaan", Year : "2015"}


    
    return(
    <>

<Movies movie={movie1} />

<Movies movie={movie2} />
<Movies movie={movie3} />
<Movies movie={movie4} />
<Movies movie={movie5} />
<Movies movie={movie6} />
<Movies movie={movie7} />
<Movies movie={movie8} />
<Movies movie={movie9} />
<Movies movie={movie10} />



    </>
    )
}
export default MovieCard