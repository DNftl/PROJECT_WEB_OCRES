import React from 'react';
import "./index.css";

export default function InfoMeteo(props) {
    
    const {temperature, description, image, pression, humidity, windSpeed,country, tempMax, tempMin, nuagePourcentage, timeSunrise, nomCity, paramInter, icon} = props.weather;

    return (
        <div className="determ">
            <div className="row">
                <div className="col-md-sm-xs-12">
                
                <br/> <br/>
                    <p>Temperature:</p><h3>{temperature}<sup>o</sup>C</h3>
                    <br/>
                    <p>Description: {description}</p>
                    <br/>
                    <p>City searched and its country: {nomCity}, {country}</p>
                    <br/>
                </div>

                <div className="col-md-sm-xs-0">
                    <br/>
                    <p><img className="imageIconMeteo" src={icon}></img></p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Temp max: </b> {tempMax}</p>
                </div>

                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Temp min:</b> {tempMin}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Wind Speed</b>(km/hr) {windSpeed}:</p>
                </div>

                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Preassure</b> (millibar): {pression}</p>
                </div>
            </div>

            <div className="row">
               <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Precipitation</b> (mm): {nuagePourcentage}</p>
                </div>

                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Humidity</b> (%): {humidity}</p>
                </div>
            </div>

           
        </div>
    )
}