import React, {useState, useEffect} from 'react'
import LanguageFilter from './LanguageFilter/LanguageFilter'
import LocationFilter from './LocationFilter/LocationFilter'
import MovieList from './MovieList/MovieList';
import Search from './Search/Search';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("any");
  const [location, setLocation] = useState("any");
  
  useEffect(() => {
    getMovies();

  }, [language, location])
 
  const getMovies = () => {
    fetch(`http://localhost:5000/movies/location/${location}/language/${language}`)
    .then(res => res.json())
    .then(res => {
      setMovies(res)
      filterMoviesFromSearchTerm(searchTerm, res)
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
        <Container>
          <Row>
            <Col><Search updateSearchTerm={updateSearchTerm} searchTerm={searchTerm} /></Col>
          </Row>          
          <Row className='pt-4'>
            <Col xs lg="2">
              <Row>
                <Col>Filters</Col>            
              </Row>
              <Row>
                <Col>Language</Col>
                <Col><LanguageFilter updateLanguage={updateLanguage} /></Col>
              </Row>
              <Row>
                <Col>Location</Col>
                <Col><LocationFilter updateLocation={updateLocation} /></Col>
              </Row>
            </Col>
            <Col><MovieList movies={searchResults}/></Col>
          </Row>      
        </Container>
    </>          
  )
}

export default Home
