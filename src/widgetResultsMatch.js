import ReactDOM from "react-dom";
import React, { Component } from "react";
import Axios from "axios";
import InfoMatch from './infoMatch.js';

const api_key = "523458a0b3a59fb1523e0b735b07893ae95ccae40042bafcc814df82891bcad9";
const api_url = "https://apiv2.apifootball.com/?action=get_events&from=2019-04-01&to=2019-04-01";

//https://apiv2.apifootball.com/?action=get_events&from=2019-04-01&to=2019-04-01&league_id=148&APIkey=523458a0b3a59fb1523e0b735b07893ae95ccae40042bafcc814df82891bcad9


/*
class Match extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Infos : []
    };
  }
  getUsersData() 
  {
    axios
      .get('https://apiv2.apifootball.com/?action=get_events&from=2019-04-01&to=2019-04-03&league_id=148&APIkey=523458a0b3a59fb1523e0b735b07893ae95ccae40042bafcc814df82891bcad9')
      .then(res => {
        console.log(res);
      })
      .then(res => {
        const data = res.data
        console.log(data)
        const infos = data.map(u =>
          <div>
          <p>{u.country_name}</p>
          <p>{u.country_id}</p>
          </div>
          )
          this.setState({
            infos
        })
      })
      .catch((error) => {
          console.log(error)
      })
      
  }

  componentDidMount(){
    this.getUsersData()
}

  render() 
  {
    return (
      <div className="App">
      
        
    <p>{this.state.infos}</p>
        <p>heyyyy</p>
      </div>
    );
  }
}

export default Match;*/

//////////////////////////////////////////////////////////////
//https://apiv2.apifootball.com/?action=get_events&from=2019-04-01&to=2019-04-01&league_id=${this.state.NumeroDeLigue}&APIkey=${api_key}



class Match extends React.Component {

  //state
  state = {

    Infos: {},
    NumeroDeLigue: ""
  }


  changeCountry = (value) => {
    this.setState({ NumeroDeLigue: value })
  }

  updateInfos = (e) => {

    e.preventDefault()

    Axios.get(`${api_url}&league_id=${this.state.NumeroDeLigue}&APIkey=${api_key}`)
    .then(res => {

      console.log(res);

      let NewInfos = {
        nomPays: res.data.country_name,
        nomLeague : res.data.league_name
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
        

          <h1>Match Widget</h1>

                <form className="region" onSubmit={(e) => { this.updateInfos(e) }}>
                  <input type="text" className="" placeholder="Select your country" onChange={(e) => { this.changeCountry(e.target.value) }} />
                </form>
                <h1>{this.state.Infos.nomPays}</h1>
                <h1>{this.state.Infos.nomLeague}</h1>
        </div>
        </div>
      </div>
    );
  }
}

export default Match;

const rootElement3= document.getElementById("root3");
ReactDOM.render(<Match/>, rootElement3);
