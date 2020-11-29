import ReactDOM from "react-dom";
import React, { Component } from "react";
import Axios from "axios";
import infoClassement from './infoClassement.js';

const api_key = "Z26QvAoiAYrC4gRe";
const api_secret = "Zv7uUyrPTWDf4Bs3EyU98jrIiSlm9dA8";
const premierLeague= "25";
const api_url = "http://livescore-api.com/api-client/leagues/table.json";

//http://livescore-api.com/api-client/leagues/table.json?key=Z26QvAoiAYrC4gRe&secret=Zv7uUyrPTWDf4Bs3EyU98jrIiSlm9dA8&league=25&season=4

/*

class Classement extends React.Component {


constructor(props){
  super(props)
  this.state = {
    Data: {}
  };
}


  updateInfos = (e) => {

    e.preventDefault()

    //Axios.get(`${api_url}?key=${api_key}&secret=${api_secret}&league=${premierLeague}&season=4`)  
    Axios.get(`http://livescore-api.com/api-client/leagues/table.json?key=Z26QvAoiAYrC4gRe&secret=Zv7uUyrPTWDf4Bs3EyU98jrIiSlm9dA8&league=25&season=4`)     
    .then(res => {
    
      console.log(res);

      let NewInfos = {
        
        nomE1 : res.data.table[0].name
        nomE2 : res.data.table[1].name,
        nomE3 : res.data.table[2].name,
        nomE4 : res.data.table[3].name,
        nomE5 : res.data.table[4].name,
        nomE6 : res.data.table[5].name,
        nomE7 : res.data.table[6].name,
        nomE8 : res.data.table[7].name,
        nomE9 : res.data.table[8].name,
        nomE10 : res.data.table[9].name,

        rankE1 : res.data.table[0].rank,
        rankE2 : res.data.table[1].rank,
        rankE3 : res.data.table[2].rank,
        rankE4 : res.data.table[3].rank,
        rankE5 : res.data.table[4].rank,
        rankE6 : res.data.table[5].rank,
        rankE7 : res.data.table[6].rank,
        rankE8 : res.data.table[7].rank,
        rankE9 : res.data.table[8].rank,
        rankE10 : res.data.table[9].rank,

        winE1 : res.data.table[0].won,
        winE2 : res.data.table[1].won,
        winE3 : res.data.table[2].won,
        winE4 : res.data.table[3].won,
        winE5 : res.data.table[4].won,
        winE6 : res.data.table[5].won,
        winE7 : res.data.table[6].won,
        winE8 : res.data.table[7].won,
        winE9 : res.data.table[8].won,
        winE10 : res.data.table[9].won,

        nullE1 : res.data.table[0].drawn,
        nullE2 : res.data.table[1].drawn,
        nullE3 : res.data.table[2].drawn,
        nullE4 : res.data.table[3].drawn,
        nullE5 : res.data.table[4].drawn,
        nullE6 : res.data.table[5].drawn,
        nullE7 : res.data.table[6].drawn,
        nullE8 : res.data.table[7].drawn,
        nullE9 : res.data.table[8].drawn,
        nullE10 : res.data.table[9].drawn,

        lostE1 : res.data.table[0].lost,
        lostE2 : res.data.table[1].lost,
        lostE3 : res.data.table[2].lost,
        lostE4 : res.data.table[3].lost,
        lostE5 : res.data.table[4].lost,
        lostE6 : res.data.table[5].lost,
        lostE7: res.data.table[6].lost,
        lostE8 : res.data.table[7].lost,
        lostE9 : res.data.table[8].lost,
        lostE10 : res.data.table[9].lost

      }

      this.setState({ Data: NewInfos });

    })

  }


  render() 
  {
    return (
      <div className="App">
        <br/>
        <div className="container-fluid">
        <div className="borderWidg">
        

          <h1>Premier League Widget</h1>

                <button className="region" onClick={(e) => { this.updateInfos(e) }}>Boutton</button>
              
                <br/>
               <infoClassement data={this.state.Infos} />
        </div>
        </div>
      </div>
    );
  }
}

export default Classement;


const rootElement8= document.getElementById("root8");
ReactDOM.render(<Classement/>, rootElement8);*/
