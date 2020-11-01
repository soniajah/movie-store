import React from 'react'
import LanguageFilter from './LanguageFilter/LanguageFilter'
import LocationFilter from './LocationFilter/LocationFilter'
import MovieList from './MovieList/MovieList';
import Search from './Search/Search';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div>
      {/* <Button variant="primary">Primary</Button> */}

      <Search />
      <div className="row">
        <LanguageFilter />
        <LocationFilter />
      </div>      
      <MovieList />      
    </div>
  )
}

export default Home
