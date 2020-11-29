import React from 'react';
import "./index.css";

export default function InfoMeteo(props) {
    
    const {temperature, description, nomCity,pression, humidity, windSpeed,country, 
        tempMax, tempMin, icon, nuagePourcentage/*, timeSunrise, image, paramInter*/} = props.weather;

    return (
        <div className="determ">
            <div class="container-fluid"> 
            <div className="row">
                <div className="col-md-sm-xs-12">

                <br/> <br/>
                    <p>Temperature :</p><h3>{temperature}<sup>o</sup>C</h3>
                    <br/>
                    <p>Description : {description}</p>
                    <br/>
                    <p>{nomCity}, {country}</p>
                    <br/>
                </div>

                <div className="col-md-sm-xs-0">
                    <br/>
                    <p><img className="imageIconMeteo" alt="img" src={icon}></img></p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Temp max : </b></p>
                    <p>{tempMax}</p>
                </div>

                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Temp min</b></p>
                    <p>{tempMin}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <p>{windSpeed}</p>
                </div>

                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Preassure</b>(millibar)</p>
                    <p>{pression}</p>
                </div>
            </div>

            <div className="row">
               <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <p>{nuagePourcentage}</p>
                </div>

                <div className="col-md-sm-xs-6 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <p>{humidity}</p>
                </div>
            </div>

           </div>
        </div>
    )
}