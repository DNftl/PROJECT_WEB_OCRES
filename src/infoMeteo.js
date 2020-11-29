import React from 'react';
import "./index.css";

export default function InfoMeteo(props) {
    
    const {temperature, description, nomCity,pression, humidity, windSpeed,country, 
        tempMax, tempMin, icon, nuagePourcentage/*, timeSunrise, image, paramInter*/} = props.weather;

    return (
        <div className="determ">
            <div class="container-fluid"> 
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <br/> <br/>
                        <p>Temperature: <b>{temperature}<sup>o</sup>C</b></p>
                        <br/>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <p><img className="imageIconMeteo" alt="img" src={icon}></img></p>
                </div>
            </div>

                    <p>Description: {description}</p>
                    <br/>
                    <p>City searched and its country: {nomCity}, {country}</p>
                    <br/>
         

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Temp max: </b> {tempMax}</p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Temp min:</b> {tempMin}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Wind Speed</b>(km/hr): {windSpeed}</p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Preassure</b> (millibar): {pression}</p>
                </div>
            </div>

            <div className="row">
               <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Precipitation</b> (mm): {nuagePourcentage}</p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Humidity</b> (%): {humidity}</p>
                </div>
            </div>

           </div>
        </div>
    )
}