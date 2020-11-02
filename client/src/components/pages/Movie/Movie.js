import React, {useState, useEffect} from 'react';
import Still from './Still';
import TableContent from './TableContent.js';

function Movie() {
  const [movie, setMovie] = useState({})
  const movieId = window.location.pathname.split("/")[2]

  useEffect(() => {
    getMovie();
  }, [])

  const getMovie = () => {
    fetch(`http://localhost:5000/movies/id/${movieId}`)
    .then(res => res.json())
    .then(res => {
      setMovie(res)
    })
  }
 
  const getFeatureValues = (feature) => {    
    if(feature && feature.length > 0) {
      var data = []
      feature.forEach(value => {
        data.push(value)
      })
      return data.toString()
    }
    else {
      return ''
    }
  }

  return (
    <div className="container">  
      <h2 className='page-title'>{movie.title}</h2> 
      <div className='row mt-4 mb-4'>
        <div className='col'>
          <img src={movie.poster} className="poster" />
        </div>
        <div className='col'>        
          <TableContent movie={movie} getFeatureValues={getFeatureValues} />
        </div>
      </div> 
      <div>
        <p>{movie.plot}</p>        
      </div> 
      <div>
        <h3>Stills</h3>
        <Still movie={movie} />  
      </div>          
    </div>
  )
}

export default Movie
