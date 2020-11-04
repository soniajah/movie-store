import React, {useState, useEffect} from 'react'
import LanguageFilter from './LanguageFilter/LanguageFilter'
import LocationFilter from './LocationFilter/LocationFilter'
import MovieList from './MovieList/MovieList';
import Search from './Search/Search';
import './Home.css';
import { BiFilterAlt } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { GoLocation } from "react-icons/go";

function Home({isLoggedIn, user, setUser}) {
  // setUser({name: res.name, userId: res.id})

  console.log(isLoggedIn, user.name, user.userId)
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("any");
  const [location, setLocation] = useState("any");
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    getMovies();
    getBookingsOfAUser();

  }, [language, location])
 

  const getMovies = () => {
    fetch(`http://localhost:5000/movies/location/${location}/language/${language}`)
    .then(res => res.json())
    .then(res => {
      setMovies(res)
      filterMoviesFromSearchTerm(searchTerm, res)
    })
  }

  const getBookingsOfAUser = () => { 
    console.log(user.userId)   
    fetch(`http://localhost:5000/booking/userid/${user.userId}`)
    .then(res => res.json())
    .then(res => {
      console.log("user bookings")
      console.log(res)
      setBookings(res)
      console.log(bookings)
    })
  }

  const createABookingforAUser = (movieId) => {   
    console.log(user.userId, movieId) 
    fetch("http://localhost:5000/booking/create",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify({userId: user.userId, movieId: movieId})
    })
    .then(res => {
      var newBookings = [...bookings, movieId]
      setBookings(newBookings)
    })   
  }

  const deleteABookingforAUser = (movieId) => {    
    console.log(user.userId, movieId)
    fetch("http://localhost:5000/booking/delete",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify({userId: user.userId, movieId: movieId})
    })
    .then(res => res.json())
    .then(res => {
      var newBookings = [...bookings]
      var index = newBookings.indexOf(movieId);
      if (index !== -1) {
        newBookings.splice(index, 1);
      }
      setBookings(newBookings)
    })
  }

  const updateLanguage = (language) => {
    setLanguage(language)
  }

  const updateLocation = (location) => {
    setLocation(location)
  }

  const updateSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm)
    filterMoviesFromSearchTerm(searchTerm, movies)
  }

  const filterMoviesFromSearchTerm = (searchTerm, allMovies) => {
    if (searchTerm.length === 0) {
      setSearchResults(allMovies);  
    } 
    else {
      const results = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }

  return (       
      <>
      <div className="container">
        <Search updateSearchTerm={updateSearchTerm} searchTerm={searchTerm} />
        <div className='row pt-4'>
          <div className='col-2'>
            <h5 className='pb-2'><BiFilterAlt /> Filters</h5>
            <div className='row pb-3'>
              <div className='col p-0 m-0'>
              <MdLanguage /> <LanguageFilter updateLanguage={updateLanguage} />
              </div>                         
            </div>
            <div className='row pb-3'>
              <div className='col p-0 m-0'>
                <GoLocation/><LocationFilter updateLocation={updateLocation} />
              </div> 
            </div>
          </div>
          <div className='col'>
            <MovieList movies={searchResults} bookings={bookings} deleteABookingforAUser={deleteABookingforAUser} createABookingforAUser={createABookingforAUser} />
          </div>
        </div>
      </div>  
    </>          
  )
}

export default Home
