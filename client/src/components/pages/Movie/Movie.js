import React, {useState, useEffect} from 'react';
import './Movie.css';
import Table from 'react-bootstrap/Table';
// import Carousel from 'react-bootstrap/Carousel';

function Movie() {

  const [movie, setMovie] = useState({})
  const movieId = window.location.pathname.split("/")[2]

  useEffect(() => {
    getMovie();
  }, [])

  const getMovie = () => {
    fetch(`http://localhost:5000/movie/get/${movieId}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setMovie(res)
    })
  }

  return (
    <div className="container">  
      <h2>{movie.title}</h2> 
      <p>{movie.plot}</p>
      <img src={movie.poster} className="poster" />         
      
      <Table striped bordered hover>  
        <tbody>
          <tr>
            <td>Language</td>
            <td>{movie.language} </td>         
          </tr>
          <tr>
            <td>Location</td>
            <td>{movie.location}</td>          
          </tr>
          <tr>
            <td>Type</td>
            <td>{movie.listingType}</td>          
          </tr>
          <tr>
            <td>Sound Effects</td>
            <td>
            {/* {movie.soundEffects.map((value, index) => {
              return <span key={index}>{value},</span>
            })}  */}
            </td>        
          </tr>
          <tr>
            <td>ID</td>
            <td>{movie.imdbId}</td>          
          </tr>
        </tbody>
      </Table>
      <h3>Stills</h3>
      <div>
        {/* {movie.stills.map((value, index) => {
          return value == movie.poster ? <img key={index} src={value} className="poster" /> : <img key={index} src={value} className="" /> 
        })}  */}
      </div>

      {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

    </div>
  )
}

export default Movie
