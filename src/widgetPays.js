import ReactDOM from "react-dom";
import React, { Component } from "react";
import Axios from "axios";
import InfoPays from './infoPays.js';

const api_key = "d1b0413e0c2796035b1690b30fd92d029";

//avion
//https://api.aviationstack.com/v1/Orly?access_key=1b0413e0c2796035b1690b30fd92d029


//https://restcountries.eu/rest/v2/name/france?fullText=true

class Pays extends React.Component {

  //state
  state = {

    infopays: {},
    countryInput: ""
  }



  changeAirport = (value) => {
    this.setState({ countryInput: value })
  }

  changeLocationAirport = (e) => {

    e.preventDefault()

    Axios.get(`https://restcountries.eu/rest/v2/name/${this.state.countryInput}?fullText=true`)
    .then(res => {

      console.log(res);

      let newPays = {
          alphcode : res.data[0].alpha3Code,
          nom : res.data[0].name,
          capitale : res.data[0].capital,
          republic : res.data[0].altSpellings[1],
          region : res.data[0].region,
          pop : res.data[0].population,
          currname : res.data[0].currencies[0].name,
          currsymb : res.data[0].currencies[0].symbol,
          drapeau : res.data[0].flag
          //frontier : res.data[0].borders
        
      }

      this.setState({ infopays: newPays });

    })
     
  }

  render() 
  {
    return (
      <div className="App">
                <br/>
        <div className="container">
        <div className="borderWidg">

          <h1 className="textwidgetcenter3">Country Widget</h1>
          <br/>
          
                <form className="" onSubmit={(e) => { this.changeLocationAirport(e) }}>
                <div class="d-flex justify-content-center">
                  <input type="text" className="textwidgetcenter" placeholder="Enter a country" onChange={(e) => { this.changeAirport(e.target.value) }} />
                </div>
                </form>
                <br/>
               <InfoPays pa={this.state.infopays} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pays;

const rootElement2= document.getElementById("root2");
ReactDOM.render(<Pays/>, rootElement2);
