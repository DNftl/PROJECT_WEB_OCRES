import ReactDOM from "react-dom";
import React from "react";
//import React, { Component } from "react";
import Axios from "axios";
//import React from 'react';
import InfoMeteo from './infoMeteo.js';

const api_key = "4081444b7b90198136fefe6ed4ccf35b";
//6a899154a031cb42971d850ed003d5a9
const api_url = "https://api.openweathermap.org/data/2.5/weather";
const api_url_icon = "http://openweathermap.org/img/wn/";

//https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=4081444b7b90198136fefe6ed4ccf35b
//https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=4081444b7b90198136fefe6ed4ccf35b
//http://api.weatherstack.com/current?access_key=79b7f4046fe000ff33873b0824b2a65f&query=New%20York

//http://openweathermap.org/img/wn/10d@2x.png

class Meteo extends React.Component {
  state = {

    weather: {},
    regionInput: ""
  }

  changeRegion = (value) => {
    this.setState({ regionInput: value })
  }

  changeLocationNewAPI = (e) => {

    e.preventDefault()

    Axios.get(`${api_url}?q=${this.state.regionInput}&units=metric&appid=${api_key}`)
    .then(res => {

      console.log(res);

      let userWeather = {
        temperature: res.data.main.temp,
        description: res.data.weather[0].description,
        //image: 
        pression: res.data.main.pressure,
        humidity : res.data.main.humidity,
        windSpeed: res.data.wind.speed,
        country: res.data.sys.country,
        tempMax : res.data.main.temp_max,
        tempMin : res.data.main.temp_min,
        nuagePourcentage : res.data.clouds.all,
        timeSunrise : res.data.sys.sunrise,
        nomCity : res.data.name,
        paramInter : res.data.cod, 
        icon : res.data.weather.icon
      }

      this.setState({ weather: userWeather });

    })
  }

  /*
  changeIcon = (e) => {

    e=this.weather.icon;

  Axios.get(`${api_url_icon}${e}@2x.png`)
  .then(res => {

    console.log(res);
  })
  }
*/

  /*findLogoMeteo = (e) => {

    e.preventDefault()

    /*Axios.get(`http://api.weatherstack.com/current?access_key=79b7f4046fe000ff33873b0824b2a65f&query=${this.state.regionInput}`)
    .then(res => {

      console.log(res);

      let newvar = {
        image : res.data.current.weather_icons
      }

      this.setState({ weather: newvar });

    })
  }*/

  render() 
  {
    return (
      <div className="App">
        <br/>
        <div className="container-fluid">
        
          <div className="borderWidg">
            <h1 className="textwidgetcenter3">Weather Widget</h1>
            <br/>

              <form className="region" onSubmit={(e) => { this.changeLocationNewAPI(e) }}>
                <div class="d-flex justify-content-center">
                  <input type="text" className="textwidgetcenter" placeholder="Enter your city" onChange={(e) => { this.changeRegion(e.target.value) }} />
                </div>
              </form>

              {/*<button id="city-input-button" type="submit" onClick={(e) => { this.changeIcon(e) }}>afficher</button>*/}

              <InfoMeteo weather={this.state.weather} />    
          </div>
        </div>
      </div>
    );
  }
}

export default Meteo;

//const rootElement1= document.getElementById("root1");
//ReactDOM.render(<Meteo/>, rootElement1);
