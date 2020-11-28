import React from 'react';
import "./index.css";

export default function InfoJournal(props) {
    
    const {art1Content, art1Source, art1Title, art1Image, art1Date, art1Description,
        art2Content, art2Source, art2Title, art2Image, art2Date, art2Description} = props.inf;

    return (
        
        <div className="user-weather">

            <div className="row">
                <div className="col-md-sm-xs-7 weather-info"> 
                    <h4>Article 1 : {art1Title}</h4>
                    <p>{art1Content}</p>  
                </div>
                <div className="col-md-sm-xs-5 weather-info">
                     <p><img className="imageArt" src={art1Image}></img></p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-sm-xs-8 weather-info">   
                    <p>Source : {art1Source}</p>
                </div>
                <div className="col-md-sm-xs-4 weather-info">
                    <p>Date : {art1Date}</p>
                </div>
            </div>

            <h4>Article 2 : {art2Title}</h4>
            <p>{art2Content}</p>

            <div className="row">
                <div className="col-md-sm-xs-8 weather-info">   
                    <p>Source : {art2Source}</p>
                </div>
                <div className="col-md-sm-xs-6 weather-info">
                    <p>Date : {art2Date}</p>
                </div>
            </div>
            <p><img className="imageArt" src={art2Image}></img></p>
        </div>
    )
}