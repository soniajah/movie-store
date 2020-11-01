import React from 'react'

function LanguageFilter() {
  return (
    <div className="col">
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>      
    </div>
  )
}

export default LanguageFilter
