/*import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import ReactDOM from "react-dom";

class Carte extends Component{
    render(){
        return(
            <div className = "app">

                <Map google={this.props.google} zoom={14}></Map>
                <Marker onclick={this.onMarkerClick} name={'current location'}/>

                <InfoWindow onClose={this.onInfoWindowClose}>


                </InfoWindow>

            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyC5T3dtVFl_jnQL-trDgKfb2GZhPrAazTM")
})(Carte)*/

////////////////////////////////////////////////////////////

/*import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ReactDOM from "react-dom";

const AnyReactComponent = ({ hey }) => <div>{hey}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (

      <div className="App">
        <br/>
        <div className="container">
        
        <div className="borderWidg">

      <div style={{ height: '68vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC5T3dtVFl_jnQL-trDgKfb2GZhPrAazTM"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default SimpleMap;
const rootElement7= document.getElementById("root7");
ReactDOM.render(<SimpleMap/>, rootElement7);*/

////////////////////////////////////////////////////////////

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