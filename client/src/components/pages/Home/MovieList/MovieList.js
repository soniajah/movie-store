import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";
import {BsToggleOff, BsToggleOn } from "react-icons/bs";

function MovieList({movies, bookings, deleteABookingforAUser, createABookingforAUser}) {

  const handleCreate = event => {
    createABookingforAUser(event.target.id)
  }

  const handleDelete = event => {
    deleteABookingforAUser(event.target.id)
  }
 
  return (
    <div className='container'>  
      {movies.length ? (
          <div>
            {movies.map((movie, index) => {
              return(
                <div className='row pb-1' key={index}>  
                  <div className='col-2'>
                    <Link to={{
                      pathname: '/movie/' + movie._id,
                      query: {
                        movie: movie,
                        bookings:bookings, 
                        deleteABookingforAUser: deleteABookingforAUser, 
                        createABookingforAUser: createABookingforAUser
                      }
                    }}>                    
                      <img src={movie.poster} className="poster" className='list-icon' />
                    </Link>
                  </div>  
                  <div className='col-8'>
                    <span>
                      <Link to={{
                        pathname: '/movie/' + movie._id,
                        query: {
                          movie: movie,
                          bookings:bookings, 
                          deleteABookingforAUser: deleteABookingforAUser, 
                          createABookingforAUser: createABookingforAUser
                        }
                      }}>
                        {movie.title}
                      </Link>
                    </span>
                    <p>{movie.plot}</p>
                  </div>
                  <div className='col-1'>Book <button className="booking-button" id={movie._id} onClick={bookings.includes(movie._id) ? handleDelete : handleCreate}>{bookings.includes(movie._id) ? (<BsToggleOn className="non-clickable" size={20} />) : (<BsToggleOff className="non-clickable" size={20} />)}</button></div>       
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
