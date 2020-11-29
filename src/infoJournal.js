import React from 'react';
import "./index.css";

export default function InfoJournal(props) {
    
    const {art1Content, art1Source, art1Title, art1Image, art1Date, art1Description,
        art2Content, art2Source, art2Title, art2Image, art2Date, art2Description} = props.inf;

    return (
        
        <div className="user-weather">

            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 weather-info">
                     <p><img className="imageArt" src={art1Image}></img></p>
                </div>

                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 weather-info">
                    <h4>Article 1 : {art1Title}</h4>
                    <p>Date : {art1Date}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 weather-info"> 
                    <p>{art1Content}</p>
                    <p>Source : {art1Source}</p> 
                </div>
            </div>

            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 weather-info">
                     <p><img className="imageArt" src={art2Image}></img></p>
                </div>

                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 weather-info">
                    <h4>Article 2 : {art2Title}</h4>
                    <p>Date : {art2Date}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 weather-info"> 
                    <p>{art2Content}</p>
                    <p>Source : {art2Source}</p> 
                </div>
            </div>
        </div>
    )
}