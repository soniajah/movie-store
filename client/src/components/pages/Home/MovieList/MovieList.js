import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies();
    console.log(movies)  
  }, [])
 
  const getMovies = () => {
    fetch('http://localhost:5000/movies/location/any/language/any')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setMovies(res)
    })
  }

  return (
    <div>  
      {movies.length ? (
          <div>
            {movies.map((movie, index) => {
              return(
                <div key={index}>                
                  <Link to={'/movie/' + movie._id} movie={movie}>{movie.title}</Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }      
  </div>
  )
}

export default MovieList
