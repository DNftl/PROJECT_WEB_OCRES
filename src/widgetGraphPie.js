import ReactDOM from "react-dom";
import React, { Component } from "react";
import { RadialBarChart, RadialBar, Legend } from 'recharts';


const data = [
  { name: 'Transport sur place', uv: 31.47, pv: 2400, fill: '#8884d8', },
  { name: 'Nourriture', uv: 26.69, pv: 4567, fill: '#83a6ed', },
  { name: 'Restaurant', uv: 15.69, pv: 1398, fill: '#8dd1e1', },
  { name: 'Location Airbnb', uv: 8.22, pv: 9800, fill: '#82ca9d', },
  { name: 'Billets de train', uv: 8.63, pv: 3908, fill: '#a4de6c', },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

export default class GraphPie extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

  render() {
    return (

      <div className="App">
        <div className="container">
          <div className="borderWidg">

            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <h1 className="textwidgetcenter3">Budgeting</h1>
                <br />
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <br />
                  <div id="Button"></div>
              </div>
            </div>

            <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
              <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
              <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
          </div>
        </div>
      </div>

    );
  }
}

const rootElement5= document.getElementById("root5");
ReactDOM.render(<GraphPie />, rootElement5);
