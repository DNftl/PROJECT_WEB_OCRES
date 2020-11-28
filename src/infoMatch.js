import React from 'react';
import "./index.css";

export default function InfoMatch(props) {
    
    const {dateMatch,nomLigue1, nomEquipeHome1, nomEquipeExt1, scoreEquipeExt1, scoreEquipeHome1, 
        systemAway, systemHome, statPossAway, statPossHome, logoLigue, logoHome, logoAway }  = props.pc;
    // nomEquipeHome2, nomEquipeExt2, scoreEquipeExt2, scoreEquipeHome2 

    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-md-sm-xs-12 weather-temp">
                    <p>Championship name: {nomLigue1}</p>
                    <p><img alt="" className="imageLogoLeague" src={logoLigue}></img></p>
                    <p>Date: {dateMatch}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-sm-xs-12">
                <p>{nomEquipeHome1} VS {nomEquipeExt1}</p>
                </div>
            </div>
            <div className="row">
            <br/>
                <div className="col-md-sm-xs-4 weather-info">
                    <p>{systemHome}</p>
                </div>
                <div className="col-md-sm-xs-4 weather-info">
                    <p>VS</p>
                </div>
                <div className="col-md-sm-xs-4 weather-info">
                    <p>{systemAway}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-sm-xs-12 weather-info">
                    <p><img className="imageLogoTeam" alt="" src={logoHome}></img> - <img alt="" className="imageLogoTeam" src={logoAway}></img></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-sm-xs-12 weather-info">
                    <p>Score: <h4>{scoreEquipeHome1} - {scoreEquipeExt1}</h4></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-sm-xs-12 weather-info">
                    <p>Possession: H {statPossHome} - A {statPossAway}</p>
                </div>
            </div>

        </div>
    )
}