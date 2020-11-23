import React from 'react';
import "./index.css";

export default function LocationMeteo(props) {
    
    const {temperature, description, image, pression, humidity, windSpeed,country, tempMax, tempMin, nuagePourcentage, timeSunrise, nomCity, paramInter} = props.weather;

    return (
        <div className="determ">
            <div className="row">
                <div className="col-md-3">
                
                <br/> <br/>
                    <p>Temperature : {temperature}<sup>o</sup>C</p>
                    <br/>
                    <p>Description : {description}</p>
                    <br/>
                    <p>Ville : {nomCity}</p>
                    <br/>
                    <p>Pays : {country}</p>
                </div>

                <div className="col-md-9">
                    <img className="mainImg" src={image} alt="img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <p>{windSpeed}</p>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Preassure</b>(millibar)</p>
                    <p>{pression}</p>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <p>{nuagePourcentage}</p>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <p>{humidity}</p>
                </div>

            </div>
            <div className="row">
                <div className="col-md-6 weather-info">
                    <p><b>temperature max : </b></p>
                    <h2>{tempMax}</h2>
                </div>

                <div className="col-md-6 weather-info">
                    <p><b>temperature min</b></p>
                    <h2>{tempMin}</h2>
                </div>

            </div>
        </div>
    )
}