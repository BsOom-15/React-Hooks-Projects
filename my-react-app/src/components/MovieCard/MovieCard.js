import React from 'react' ;
import '../MovieCard/MovieCard.css'


const MovieCard = (props) => {
  return (
    <div className='cards-container'>
      <div className='cards'>
        <div className='cardImage'>
          <img src= {props.poster} alt=''/>
        </div>
        <div className='cardTitle'>
        <h1 style={{ fontFamily: 'Protest Riot, sans-serif' }}>{props.title}</h1>
        </div>
        <div className='cardDescripe'>
          <p>{props.description}</p>
        </div>
        <div className='cardRate'>
          <h5>{props.rate}</h5>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
