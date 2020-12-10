import ReactDOM from "react-dom";
import React, { Component } from "react";
import Axios from "axios";
import InfoFLight from './infoFlight.js';

const api_key = "d1b0413e0c2796035b1690b30fd92d029";


//https://api.aviationstack.com/v1/Orly?access_key=1b0413e0c2796035b1690b30fd92d029

class Flight extends React.Component {

  //state
  state = {

    flight: {},
    airportInput: ""
  }



  changeAirport = (value) => {
    this.setState({ airportInput: value })
  }

  changeLocationAirport = (e) => {

    e.preventDefault()

    Axios.get(`https://USERNAME:PASSWORD@opensky-network.org/api/flights/departure?airport=EDDF&begin=1517227200&end=1517230800`)
    .then(res => {

      console.log(res);
      
      let userFlight = {
          aeroport : res.data.icao24,
          terminal : res.data.startTime
        
      }

      this.setState({ flight: userFlight });

    })
  }

  render() 
  {
    return (
      <div className="App">
                <br/>
        <div className="container-fluid">
        <div className="borderWidg">

          <h1>Info Flight :</h1>

              
                <form className="" onSubmit={(e) => { this.changeLocationAirport(e) }}>
                  <input type="text" className="regioninput" placeholder="Select your region" onChange={(e) => { this.changeAirport(e.target.value) }} />
                  </form>

                <InfoFLight flight={this.state.flight} />   
          </div>
        </div>
      </div>
    );
  }
}

export default Flight;

//const rootElement2= document.getElementById("root2");
//ReactDOM.render(<Flight/>, rootElement2);
