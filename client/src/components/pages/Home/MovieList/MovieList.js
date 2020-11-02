import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";


function MovieList({movies}) {
  return (
    <div className='container'>  
      {movies.length ? (
          <div>
            {movies.map((movie, index) => {
              return(
                <div className='row pb-1' key={index}>  
                  <div className='col'><Link to={'/movie/' + movie._id} movie={movie}><img src={movie.poster} className="poster" className='list-icon' /></Link></div>  
                  <div className='col-8'><span><Link to={'/movie/' + movie._id} movie={movie}>{movie.title}</Link></span><p>{movie.plot}</p></div> 
                  <div className='col-1'><IoMdStar size={20} />{movie.imbdRating}</div>                  
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2 className='p-4'>No Item Found</h2>
          </div>
        )
      }      
  </div>
  )
}

export default MovieList
