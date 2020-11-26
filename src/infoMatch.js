import React from 'react';
import "./index.css";

export default function InfoMatch(props) {
    
    const {dateMatch,nomLigue1, nomEquipeHome1, nomEquipeExt1, scoreEquipeExt1, scoreEquipeHome1, 
        systemAway, systemHome, statPossAway, statPossHome} = props.pc;
    // nomEquipeHome2, nomEquipeExt2, scoreEquipeExt2, scoreEquipeHome2 

    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-md-sm-xs-12 weather-temp">
                    <p>Nom du championnat : {nomLigue1}</p>
                    <p>Date : {dateMatch}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-sm-xs-12">
                <p>{nomEquipeHome1} VS {nomEquipeExt1}</p>
                </div>
            </div>
            <div className="row">
            <br/>
                <div className="col-md-sm-xs-12 weather-info">
                    <p>{systemHome} VS {systemAway}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-sm-xs-12 weather-info">
                    <p>score : <h4>{scoreEquipeHome1} - {scoreEquipeExt1}</h4></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-sm-xs-12 weather-info">
                    <p>Possession : H {statPossHome} - A {statPossAway}</p>
                </div>
            </div>

        </div>
    )
}