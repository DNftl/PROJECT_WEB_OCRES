import ReactDOM from "react-dom";
import React, { Component } from "react";
import Axios from "axios";
import InfoMatch from './infoMatch.js';

const api_key = "523458a0b3a59fb1523e0b735b07893ae95ccae40042bafcc814df82891bcad9";
const api_url = "https://apiv2.apifootball.com/?action=get_events";

//https://apiv2.apifootball.com/?action=get_events&from=2019-04-01&to=2019-04-01&APIkey=523458a0b3a59fb1523e0b735b07893ae95ccae40042bafcc814df82891bcad9&match_date=2019-04-01&country_id=41


class Match extends React.Component {


constructor(props){
  super(props)
  this.state = {
    Infos: {},
    DateMatch: "", 
    nb: 0
  };
}
/*
  //state
  state = {
    Infos: {},
    NumeroDeLigue: "", 
    nb: 0
  }
*/

  changeDate = (value) => {
    this.setState({ DateMatch: value })
  }

  updateInfos = (e) => {

    e.preventDefault()

    Axios.get(`${api_url}&from=${this.state.DateMatch}&to=2020-12-04&APIkey=${api_key}&match_date=2020-11-30&country_id=41`)         
    .then(res => {
     // https://apiv2.apifootball.com/?action=get_events&from=2020-11-17&to=2020-12-08&APIkey=523458a0b3a59fb1523e0b735b07893ae95ccae40042bafcc814df82891bcad9&match_date=2020-11-15&country_id=41
      console.log(res);

      let NewInfos = {
        dateMatch: res.data[0].match_date,
        
        nomLigue1: res.data[0].league_name,
        logoLigue: res.data[0].league_logo,

        nomEquipeHome1: res.data[0].match_hometeam_name,
        nomEquipeExt1: res.data[0].match_awayteam_name,
        scoreEquipeExt1: res.data[0].match_awayteam_score,
        scoreEquipeHome1: res.data[0].match_hometeam_score,
        systemAway: res.data[0].match_awayteam_system,
        systemHome: res.data[0].match_hometeam_system, 
        statPossAway: res.data[0].statistics[0].away, 
        statPossHome: res.data[0].statistics[0].home, 

        logoHome: res.data[0].team_home_badge,
        logoAway: res.data[0].team_away_badge,


        /*
        nomEquipeHome2: res.data[1].match_hometeam_name,
        nomEquipeExt2: res.data[1].match_awayteam_name,
        nomLigue2: res.data[1].league_name,
        scoreEquipeExt2: res.data[1].match_awayteam_ft_score,
        scoreEquipeHome2: res.data[1].match_hometeam_ft_score,
        */

        /*
        buteur1: res.data[0].goalscorer[0].home_scorer,
        buteur11: res.data[0].goalscorer[1].home_scorer,
        
        buteur2: res.data[1].goalscorer[0].home_scorer,
        buteur22: res.data[1].goalscorer[1].home_scorer,
        */

        




      }

      this.setState({ Infos: NewInfos });

    })

  }


  render() 
  {
    return (
      <div className="App">
        <br/>
        <div className="container">
        <div className="borderWidg">
        

          <h1 className="textwidgetcenter3">Match Widget</h1>
          <br/>

                <form className="region" onSubmit={(e) => { this.updateInfos(e) }}>
                  <input type="text" className="textwidgetcenter" placeholder="Enter a date ex : 2020-11-20" onChange={(e) => { this.changeDate(e.target.value) }} />
                </form>
      
              <br/>
               <InfoMatch pc={this.state.Infos} />
        </div>
        </div>
      </div>
    );
  }
}

export default Match;

const rootElement3= document.getElementById("root3");
ReactDOM.render(<Match/>, rootElement3);