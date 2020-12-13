import React from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

//importation pour storybook
//import Input from './components/Input';

import Meteo from "./widgetMeteo.js";

import Pays from './widgetPays.js';

import ResultsMatch from './widgetResultsMatch.js';

import GraphLine from './widgetGraphLine.js';
import GraphPie from './widgetGraphPie.js';

import Journal from './widgetJournal.js';

import MapContainer from './widgetMap';
import axios from 'axios';
import {useState, useEffect } from 'react'

export default()=> {
     
    /*
    const [channels, setChannels] = useState([]) 
    useEffect( () => {
    const fetch = async () => {
    const {data: channels} = await axios.get('http://localhost:3001/graphLine')
      setChannels(channels)
    }
    fetch()
  
    }, [])

    //à mettre juste en-dessous du return
    <ul>
      { channels.map( (channel, i) => (
        <li key={i} >
          {channel.month}
        </li>
      ))}
    </ul>


    */

    return(
    <>

    <div class="row">          
    
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  >
            <div class="row">
            
            
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <Meteo />
                </div>
            
            
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <Pays />
                </div>
                
            
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <ResultsMatch />
                <br /> <br />
                </div>
            </div>
            
            <div class="row">
            
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <GraphLine />
                </div>
            
            
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <GraphPie />
                </div>
            </div>
            
            
            <div class="row"  >
            
                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                    <Journal />
                </div>
            
            
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <MapContainer />
                </div>
            </div>
            
        </div>
        
    </div>

    </>
    
    );

}