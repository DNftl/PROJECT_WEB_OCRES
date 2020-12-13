import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import ReactDOM from "react-dom";

const mapStyles = {
  width: '70%',
  height: '75%'
};

export class MapGoogle extends Component {
  render() {
    return (

      <div className="App">
        <br/>
        <div className="container-fluid">
        
          <div className="borderWidg">
            <h1 className="textwidgetcenter3">Map Widget</h1>
            <br/>
              <p className="matchCenter">
              <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                  {
                    lat: 48.85307356091354,
                    lng: 2.2965024928024427
                  }
                }
              />
              </p>

              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>

          </div>

        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey
  }
))(MapGoogle)

/*
export default GoogleApiWrapper({
  apiKey: ("AIzaSyC5T3dtVFl_jnQL-trDgKfb2GZhPrAazTM")
})(MapContainer)*/

//const rootElement7= document.getElementById("root7");
//ReactDOM.render(<MapGoogle/>, rootElement7);

// aide : https://www.npmjs.com/package/google-maps-react