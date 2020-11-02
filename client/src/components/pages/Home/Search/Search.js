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
        <div className='row'>
          <div className='col'></div>
          <div className='col-8'><input type="text" placeholder="title" className="search" value={searchTerm} onChange={handleChange} /></div>
          <div className='col'></div>
        </div>      
      </form>        
    </div>
  )
}

export default Search
