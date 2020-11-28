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
    <p><b>Capital city:</b></p>
    <p><b>Continent: </b></p>
    <p><b>Population:</b></p>
    <p><b>Republic: </b></p>
    <p><b>Currency: </b></p>
    <p><b>Symbol:</b></p>
    </div>

    </h2>

    
  )
}

export default WidgetCountry;