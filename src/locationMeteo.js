import React from 'react';
import "./index.css";

export default function LocationMeteo(props) {
    
    const {temperature, description, image, pression, humidity, windSpeed,country, tempMax, tempMin, nuagePourcentage, timeSunrise, nomCity, paramInter} = props.weather;

    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{temperature}<sup>o</sup>C , {description}</h1>
                    <h4>{nomCity}</h4>
                    <p>{paramInter} {country}</p>
                </div>

                <div className="col-md-9">
                    <img className="mainImg" src={image} alt="img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{windSpeed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Preassure</b>(millibar)</p>
                    <h2>{pression}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{nuagePourcentage}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
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