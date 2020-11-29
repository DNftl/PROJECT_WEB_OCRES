import ReactDOM from "react-dom";
import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const data = [
    {name: 'April', Income: 3000, Outcome: 1398, amt: 2210},
    {name: 'May', Income: 2000, Outcome: 9800, amt: 2290},
    {name: 'June', Income: 2780, Outcome: 3908, amt: 2000},
    {name: 'July', Income: 1890, Outcome: 4800, amt: 2181},
    {name: 'August', Income: 2390, Outcome: 3800, amt: 2500},
    {name: 'Sept', Income: 3000, Outcome: 3200, amt: 2300},
    {name: 'Oct', Income: 3490, Outcome: 4300, amt: 2100},
];


//création du graphique
export default class GraphLine extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (

      <div className="App">
        <div className="container-fluid">
          <div className="borderWidg">

          
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
              <h1 className="textwidgetcenter3">Accounting Widget</h1>
              <br /> 
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <br />
                <div id="Button"></div>
            </div>
          </div>

          <LineChart 
                width={500}
                height={350}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Outcome" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
                </LineChart>
          </div>
        </div>

        </div>

    );
  }
}


const rootElement4= document.getElementById("root4");
ReactDOM.render(<GraphLine />, rootElement4);

//ReactDOM.render(<GraphLine />, document.getElementById('root'));
