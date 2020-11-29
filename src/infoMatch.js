import React from 'react';
import "./index.css";

export default function InfoMatch(props) {
    
    const {dateMatch,nomLigue1, nomEquipeHome1, nomEquipeExt1, scoreEquipeExt1, scoreEquipeHome1, 
        systemAway, systemHome, statPossAway, statPossHome, logoLigue, logoHome, logoAway }  = props.pc;
    // nomEquipeHome2, nomEquipeExt2, scoreEquipeExt2, scoreEquipeHome2 

    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 weather-temp">
                    <p><b>Championship name:</b> {nomLigue1}</p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 weather-temp">
                    <p><img alt="" className="imageLogoLeague" src={logoLigue}></img></p>
                    
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p className="matchCenter"><b>Date:</b> {dateMatch}</p>
                    <p className="matchCenter"><img className="imageLogoTeam" alt="" src={logoHome}></img> <b>{scoreEquipeHome1} - {scoreEquipeExt1}</b> <img className="imageLogoTeam" alt="" src={logoAway}></img></p>
                    <p className="matchCenter"><b>{nomEquipeHome1}</b> VS <b>{nomEquipeExt1}</b></p>
                    <p className="matchCenter"><b>{systemHome}</b> VS <b>{systemAway}</b></p>
                    <p className="matchCenter"><b>Possession:</b> H {statPossHome} - A {statPossAway}</p>
                </div>
            </div>
        </div>
    )
}