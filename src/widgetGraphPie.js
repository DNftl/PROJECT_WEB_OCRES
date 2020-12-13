import ReactDOM from "react-dom";
import React, { Component } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

import Formpie from './components/Button';

const data = [
  { name: 'Transport', uv: 31.47, pv: 2400, fill: '#8884d8', },
  { name: 'Food', uv: 26.69, pv: 4567, fill: '#83a6ed', },
  { name: 'Restaurant', uv: 15.69, pv: 1398, fill: '#8dd1e1', },
  { name: 'Airbnb Location ', uv: 8.22, pv: 9800, fill: '#82ca9d', },
  { name: 'Train ticket', uv: 8.63, pv: 3908, fill: '#a4de6c', },
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
        <div className="container-fluid">
          <div className="borderWidg">

            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <h1 className="textwidgetcenter3">Budgeting Widget</h1>
                <br />
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <Formpie/>
              </div>
            
              <ResponsiveContainer aspect={1.6}>
                <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={10} outerRadius={110} barSize={15} data={data}>
                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                <Legend iconSize={15} width={200} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                </RadialBarChart>
              </ResponsiveContainer>  
            </div>

          </div>
        </div>
      </div>
    );
  }
}

//const rootElement5= document.getElementById("root5");
//ReactDOM.render(<GraphPie />, rootElement5);
