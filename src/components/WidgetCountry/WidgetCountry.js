import React from 'react';
import './WidgetCountry.css';


const WidgetCountry = ({ children }) => {
  return (
    <h2 id ="monPays">Country Widget 

      { children } 

      <div class="d-flex justify-content-center">
        <input type="text" className="textwidgetcenter" placeholder="Enter a country" onChange={(e) => { this.changeAirport(e.target.value) }} />
      </div>   
    
    <div id ="monTexte">
    <p>Capital city:   Continent: </p>
    <p>Population:     Republic:</p>
    <p>Currency:       Symbol:</p>
    </div>

    </h2>

    
  )
}

export default WidgetCountry;