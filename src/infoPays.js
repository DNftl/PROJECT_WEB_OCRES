import React from 'react';
import "./index.css";

export default function InfoPays(props) {
    
    const {alphcode, nom, capitale, republic, region, pop, currname, currsymb, drapeau} = props.pa;

    return (
        <div class="container-fluid">

        <div className="user-weather">

            <div>
            <p className="matchCenter"><img className="imageFlag" src={drapeau}></img></p>
            </div>
            
            
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 weather-temp">
                    <p className="matchCenter"><b>{nom}, {alphcode}</b></p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">   
                    <p><b>Capital city:</b> {capitale}</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Continent:</b> {region}</p>
                </div>
            </div>

            <div className="row">   
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Population:</b> {pop}</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Republic:</b> {republic}</p>
                </div>
            </div>

            <div className="row">   
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Currency:</b> {currname}</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 weather-info">
                    <p><b>Symbole:</b> {currsymb}</p>
                </div>

            </div>

        </div>

        </div>
    )
}