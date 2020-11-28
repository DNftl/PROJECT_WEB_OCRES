import React from 'react';
import './WidgetMatch.css';


const WidgetMatch = ({ children }) => {
  return (
    <h2 id ="monMatch">Match Widget  

      { children }    

      <div class="d-flex justify-content-center">
        <input type="text" className="textwidgetcenter" placeholder="Enter a date ex: 2020-11-25" onChange={(e) => { this.changeAirport(e.target.value) }} />
      </div>

    <div id ="monTexte">
    <p><b>Championship name: </b></p>
    <p><b>Date: </b></p>
    <p><b>VS</b></p>
    <p><b>VS</b></p>
    <p><b>Score: -</b></p>
    <p><b>Possession: H - A</b></p>


    </div>

    </h2>

    
  )
}

export default WidgetMatch;