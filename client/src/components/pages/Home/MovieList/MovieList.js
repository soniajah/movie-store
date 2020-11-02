import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({movies}) {
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
