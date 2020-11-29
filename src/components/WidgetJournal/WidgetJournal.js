import React from 'react';
import './WidgetJournal.css';


const WidgetJournal = ({ children }) => {
  return (
    <h2 id ="monJournal">Journal Widget 

      { children } 

      <div class="d-flex justify-content-center">
        <input type="text" className="textwidgetcenter" placeholder="Enter a date ex: 2020-11-25" onChange={(e) => { this.changeAirport(e.target.value) }} />
      </div>   
    
    <div id ="monTexte">
        <p><b>Article 1:</b></p>
    </div>

    <div id ="monPetitTexte">
        <p><b>Source: </b></p>
        <p><b>Date:</b></p>
    <br />
    </div>

    <div id ="monTexte">
        <p><b>Article 2: </b></p>
    </div>

    <div id ="monPetitTexte">
        <p><b>Source: </b></p>
        <p><b>Date:</b></p>
    </div>

    </h2>

    
  )
}

export default WidgetJournal;