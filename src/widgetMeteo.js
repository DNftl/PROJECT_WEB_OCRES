import ReactDOM from "react-dom";
import React, { Component } from "react";
import Axios from "axios";
//import React from 'react';
import LocationMeteo from './locationMeteo.js';



const api_key = "6a899154a031cb42971d850ed003d5a9";
const api_url = "https://api.openweathermap.org/data/2.5/weather";
const API_URL_ICON = "http://openweathermap.org/img/wn/";
//const API_URL3Days = "https://api.openweathermap.org/data/2.5/forecast/daily";



class Meteo extends React.Component {

  //state
  state = {

    weather: {},
    regionInput: ""
  }

  


  changeRegion = (value) => {
    this.setState({ regionInput: value })
  }

  changeLocationNewAPI = (e) => {

    e.preventDefault()

    Axios.get(`${api_url}?q=${this.state.regionInput}&appid=${api_key}`).then(res => {

      let userWeather = {
        temperature: res.data.main.temp,
        description: res.data.weather[0].description,
        image: res.data.weather.icon,
        pression: res.data.main.pressure,
        humidity : res.data.main.humidity,
        windSpeed: res.data.wind.speed,
        country: res.data.sys.country,
        tempMax : res.data.main.temp_max,
        tempMin : res.data.main.temp_min,
        nuagePourcentage : res.data.clouds.all,
        timeSunrise : res.data.sys.sunrise,
        nomCity : res.data.name,
        paramInter : res.data.cod
      }

      this.setState({ weather: userWeather });

    })

  }

  getHTMLElementFromimageIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }


  /*changeLocationNewAPI3jours = (e) => {

    e.preventDefault()

    Axios.get(`${API_URL3Days}?q=${this.state.regionInput}&cnt=3&units=metric&appid=${api_key}`,{
        crossdomain: true
      }).then(res => {


      //const dataa = res.data.list;

      let userWeather = {

        //temperatureToday: dataa[0].temp.day,
       //temperatureTomorrow: dataa[1].temp.day,
        //temperatureNextdays: dataa[2].temp.day,

        temperatureToday: res.data.list.temp.day,
        //temperatureTomorrow: res.data.list.temp.day,
        //temperatureNextdays: res.data.list.temp.day,

        
        description: res.data.weather[0].description
        //location: res.data.location.name,
        //region: res.data.location.region,
        //country: res.data.location.country,
      }

      this.setState({ weather: userWeather });

    })
  }*/



  render() 
  {
    return (
      <div className="App">
        <div className="container">

          <h1>Weather Widget</h1>

                <form className="region" onSubmit={(e) => { this.changeLocationNewAPI(e) }}>
                  <input type="text" className="regioninput" placeholder="Select your region" onChange={(e) => { this.changeRegion(e.target.value) }} />
                </form>

                <LocationMeteo weather={this.state.weather} />   
        </div>
      </div>
    );
  }
}

export default Meteo;

const rootElement1= document.getElementById("root1");
ReactDOM.render(<Meteo/>, rootElement1);
