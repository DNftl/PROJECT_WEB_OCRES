import ReactDOM from "react-dom";
import React from "react";
//import React, { Component } from "react";


const Form =()=>{
    return (
        <div className="App">
          <br/>
          <div className="container-fluid"> 
        
          <input type="text" className="textwidgetcenter" placeholder="Enter your city" onChange={(e) => { this.changeRegion(e.target.value) }} />
          </div>
        </div>
      );
}
export default Form;
