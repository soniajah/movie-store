import React from 'react'
import Table from 'react-bootstrap/Table';

function TableContent({movie, getFeatureValues}) {
  return (
    <Table variant="dark" className='my-4'>  
        <tbody>
          <tr>
            <td>IMDB Rating</td>
            <td>{movie.imbdRating} </td>         
          </tr>
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
            <td>{getFeatureValues(movie.soundEffects)}</td>            
          </tr>
          <tr>
            <td>IMDB ID</td>
            <td>{movie.imdbId}</td>          
          </tr>
        </tbody>
      </Table>
  )
}

export default TableContent
