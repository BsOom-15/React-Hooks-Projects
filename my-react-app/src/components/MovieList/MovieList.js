import React,{useState} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import PosterOne from '../../img/MadMax.jpg';
import PosterTwo from '../../img/Dune Frank.jpg';
import PosterThree from '../../img/Avengers Poster.jpg';
import '../MovieList/MovieList.css';
import '../Filtters/Filtters.css'


const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            poster: PosterOne,
            title: 'Mad Max',
            description : 'The "Mad Max" movies are a series of post-apocalyptic action films directed by George Miller,featuring the character Max Rockatansky. Set in a dystopian future, the films are known for their intense action and imaginative world-building, with "Mad Max: Fury Road" being the most recent installment, acclaimed for its stunning visuals and exhilarating action sequences.',
            rate : '(5)'
    
        },
        {
            id: 2,
            poster: PosterTwo,
            title: 'Dune Frank',
            description : 'Dune is a sci-fi epic directed by Denis Villeneuve, based on Frank Herberts novel,following the journey of Paul Atreides as he navigates political intrigue and power struggles on the desert planet Arrakis. Set in a distant future, the film explores themes of destiny, ecology, and the human condition amidst conflict over a valuable resource called "spice."  With stunning visuals and a stellar cast',
            rate : '(4)'
    
        },
        {
            id: 3,
            poster: PosterThree,
            title: 'Avengers',
            description : 'The "Avengers" movies unite Marvels iconic superheroes against formidable foes like Loki and Thanos,showcasing epic battles and character growth. From the 2012 inception with "The Avengers" to the climactic "Endgame" in 2019, the series explores themes of sacrifice and redemption while protecting the universe. Renowned for its interconnected storytelling,',
            rate : '(3)'
    
        },
    ]);
// Start Search By Title:-
    const [searchByTitle, setSearchByTitle] = useState("");

    const handelSearchByTitle = (e) => 
    {
        setSearchByTitle(e.target.value);
    };
// End Search By Title.

// Start Search By Rating:-
    const [searchByRate, setSearchByRate] = useState("");

    const handelSearchByRate = (e) =>
    {
        setSearchByRate (e.target.value);
    };
// End Search By Rating.

  return (
    <div className='container'>
      <div className='row'>
      <h1 className='headerName'>Movies List</h1>
      <div className='containerSearch'>
      <div className='searchByTitle'>
            <input
                type='text'
                placeholder='Search By Title'
                onChange={handelSearchByTitle}
            />
        </div>


        <div className='searchByRate'>
        <input
                type='text'
                placeholder='Search By Rate'
                onChange={handelSearchByRate}
            />
        </div>
        </div>
            {movies
            .filter((movie) => movie.title.toLocaleLowerCase().includes(searchByTitle.toLocaleLowerCase()) && movie.rate.includes(searchByRate))
            .map((movie)=> (
                <div key = {movie.id} className='col-md-4'>
                <MovieCard
                    poster = {movie.poster}
                    title = {movie.title}
                    description = {movie.description}
                    rate = {<p>Rate : {movie.rate}</p>}
                />
                </div>
            ))
            }
        
      </div>
    </div>
  )
}

export default MovieList;
