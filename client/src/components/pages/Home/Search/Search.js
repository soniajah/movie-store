import React from 'react';
import './Search.css';

function Search({updateSearchTerm, searchTerm}) {

  const handleChange = event => {
    updateSearchTerm(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="title" className="search" value={searchTerm} onChange={handleChange}  />
      </form>        
    </div>
  )
}

export default Search
