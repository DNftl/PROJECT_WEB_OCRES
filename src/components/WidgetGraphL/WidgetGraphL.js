import React from 'react';
import './WidgetGraphL.css';


const WidgetGraphL = ({ children }) => {
  return (
    <h2 id ="monGraph">GraphLine Widget  

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

export default WidgetGraphL;