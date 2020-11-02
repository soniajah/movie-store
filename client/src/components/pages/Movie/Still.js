import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Still({movie}) {
  if(movie.stills && movie.stills.length > 0) {
    return (
      <div>    
        <Carousel className='still-image'>
          {movie.stills.map((value, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block still-image"
                  src={value}
                  alt="First slide"
                />            
              </Carousel.Item>
            )
          })} 
        </Carousel>  
      </div>
    )
  }
  else {
    return (
      <div>
      </div>
    )
  }
}

export default Still