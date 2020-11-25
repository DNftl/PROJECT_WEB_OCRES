import ReactDOM from "react-dom";
import React, { Component } from "react";
import Axios from "axios";
import InfoJournal from './infoJournal.js';

const api_key = "dbc63e97842c4cb5bbb0bae315c289f4";
const api_url = "http://newsapi.org/v2/everything?q=apple";
//http://newsapi.org/v2/everything?q=apple&from=2020-11-24&to=2020-11-24&sortBy=popularity&apiKey=dbc63e97842c4cb5bbb0bae315c289f4

class Journal extends React.Component {

  //state
  state = {

    dataJ: {},
    dateJ: "",
  }

  changeRegion = (value) => {
    this.setState({ dateJ: value })
  }

  changeLocationNewAPI = (e) => {

    e.preventDefault()

    Axios.get(`${api_url}&from=${this.state.dateJ}&to=2020-12-03&sortBy=popularity&apiKey=${api_key}`)
    .then(res => {

      console.log(res);

      let loadData = {

        art1Content: res.data.articles[0].content, 
        art1Source: res.data.articles[0].source.name,
        art1Title: res.data.articles[0].title,
        art1Image: res.data.articles[0].urlToImage, 
        art1Date: res.data.articles[0].publishedAt, 
        art1Description: res.data.articles[0].description,

        art2Content: res.data.articles[1].content, 
        art2Source: res.data.articles[1].source.name,
        art2Title: res.data.articles[1].title,
        art2Image: res.data.articles[1].urlToImage, 
        art2Date: res.data.articles[1].publishedAt, 
        art2Description: res.data.articles[1].description
      }

      this.setState({ dataJ: loadData });

    })
  }

  


  render() 
  {
    return (
      <div className="App">
        <br/>
        <div className="container">
        
        <div className="borderWidg">
          <h1 className="textwidgetcenter">Journal Widget</h1>

                <form className="region" onSubmit={(e) => { this.changeLocationNewAPI(e) }}>
                <div class="d-flex justify-content-center">
                  <input type="text" className="textwidgetcenter" placeholder="Enter a date ex : 2020-11-22" onChange={(e) => { this.changeRegion(e.target.value) }} />
                </div>
                </form>
                <br/><br/>
                
                <InfoJournal inf={this.state.dataJ} />   
              </div>
        </div>
      </div>
    );
  }
}

export default Journal;

const rootElement6= document.getElementById("root6");
ReactDOM.render(<Journal/>, rootElement6);
