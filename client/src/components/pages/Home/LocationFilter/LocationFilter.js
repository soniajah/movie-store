import React, {useState, useEffect} from 'react';

function LocationFilter({updateLocation}) {

  const [allLocations, setAllLocations] = useState([])

  const getAllLocations = () => {
    fetch('http://localhost:5000/movies/locations')
    .then(res => res.json())
    .then(res => {         
      setAllLocations(res);
    })
  }  

  useEffect(() => {
    getAllLocations()   
  }, [])

  const handleChange = (event) => {
    updateLocation(event.target.value)
  }

  return (
    <select className='select-custom' name="selectlocation" onChange={handleChange}>
      <option key='any' value='any'>Any</option>
      {allLocations.map(location => (
          <option key={location} value={location}>{location}</option>  
        ))}      
    </select>      
  )
}

export default LocationFilter
