import React from 'react';
import "./index.css";

export default function InfoFLight(props) {
    
    const {aeroport, terminal} = props.flight;

    return (
        
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{aeroport}, {terminal}</h1>
                   
                  
                </div>

                <div className="col-md-9">
                    
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                   
                   
                </div>

                <div className="col-md-3 weather-info">
                   
                </div>

                <div className="col-md-3 weather-info">
                  
                </div>

                <div className="col-md-3 weather-info">
                  
                </div>

            </div>
            <div className="row">
                <div className="col-md-6 weather-info">
                  
                </div>

                <div className="col-md-6 weather-info">
                   
                </div>

            </div>
        </div>
    )
}