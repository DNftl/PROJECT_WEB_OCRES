import React from 'react';
import './WidgetMeteo.css';
import { RadialBarChart, RadialBar, Legend } from 'recharts';


const WidgetMeteo = ({ children }) => {
  return (
    <h2 id ="maMeteo">Weather Widget 

      { children }    

      <div class="d-flex justify-content-center">
        <input type="text" className="textwidgetcenter" placeholder="Enter a city" onChange={(e) => { this.changeAirport(e.target.value) }} />
      </div>

    <div id ="monTexte">
      <p>Temperature: <sup>o</sup>C</p>
      <p>Description: </p>
      <p>City searched and its country:</p>
      <br/>

      <p>Temp max: </p>
      <p>Temp min: </p>
      <p>Wind Speed: <b>(km/hr)</b></p>
      <p>Preassure: <b>(millibar)</b></p>
      <p>Precipitation: <b>(mm)</b></p>
      <p>Humidity: <b>(%)</b></p>
    </div>

    </h2>

    
  )
}

export default WidgetMeteo;