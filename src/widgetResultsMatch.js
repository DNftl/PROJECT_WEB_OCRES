import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "axios";
import InfoMatch from './infoMatch.js';

const api_key = "523458a0b3a59fb1523e0b735b07893ae95ccae40042bafcc814df82891bcad9";

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


class Match extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CountryName: null,
      CountryID: null
    }
  }

  componentDidMount() {
    axios.get("https://apiv2.apifootball.com/?action=get_events&from=2019-04-01&to=2019-04-03&league_id=148&APIkey=523458a0b3a59fb1523e0b735b07893ae95ccae40042bafcc814df82891bcad9", {})
    .then(response => {
      this.setState({
        CountryName: response.data.country_name,
        CountryID: response.data.country_id
      })
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    });
  }

  render() {
    return (
      <div>
        <span>{this.state.CountryName} - {this.state.country_id}</span>
      </div>
    )
  }
}



const rootElement3= document.getElementById("root3");
ReactDOM.render(<Match/>, rootElement3);
