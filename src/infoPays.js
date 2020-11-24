import React from 'react';
//import "./index.css";

export default function InfoPays(props) {
    
    const {alphcode, nom, capitale, republic, region, pop, currname, currsymb, drapeau} = props.pa;

    return (
        
        <div className="user-weather">
            <div className="row">
                <div className="col-md-sm-xs-6 weather-temp">
                    <p>{nom}, {alphcode}</p>
                </div>
                <div className="col-md-sm-xs-6">
                    <p>{drapeau}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-sm-xs-6 weather-info">   
                    <p>Capitale : {capitale}</p>
                </div>
                <div className="col-md-sm-xs-6 weather-info">
                    <p>Continent : {region}</p>
                </div>
            </div>

            <div className="row">   
                <div className="col-md-sm-xs-6 weather-info">
                    <p>Population : {pop}</p>
                </div>
                <div className="col-md-sm-xs-6 weather-info">
                    <p>Republic : {republic}</p>
                </div>
            </div>

            <div className="row">   
                <div className="col-md-sm-xs-6 weather-info">
                    <p>Devise : {currname}</p>
                </div>
                <div className="col-md-sm-xs-6 weather-info">
                    <p>Symbole : {currsymb}</p>
                </div>

            </div>
        </div>
    )
}