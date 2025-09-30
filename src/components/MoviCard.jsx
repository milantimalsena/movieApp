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
const movie11 = {Title : "PK", Year : "2014"}
const movie12 = {Title : "Chennai Express", Year : "2013"}
const movie13 = {Title : "Barfi", Year : "2012"}
const movie14 = {Title : "Zindagi Na Milegi Dobara", Year : "2011"}
const movie15 = {Title : "3 Idiots", Year : "2009"}
const movie16 = {Title : "Ghajini", Year : "2008"}
const movie17 = {Title : "Chakdey India", Year : "2007"}
const movie18 = {Title : "Dhoom 2", Year : "2006"}
const movie19 = {Title : "Dhoom", Year : "2004"}
const movie20 = {Title : "Koi Mil Gaya", Year : "2003"}
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
<Movies movie={movie11} />
<Movies movie={movie12} />
<Movies movie={movie13} />
<Movies movie={movie14} />
<Movies movie={movie15} />
<Movies movie={movie16} />
<Movies movie={movie17} />
<Movies movie={movie18} />
<Movies movie={movie19} />
<Movies movie={movie20} />

    </>
    )
}
export default MovieCard