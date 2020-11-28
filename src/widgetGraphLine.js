import ReactDOM from "react-dom";
import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const data = [
    {name: 'Avril', Entrees: 3000, Sorties: 1398, amt: 2210},
    {name: 'Mai', Entrees: 2000, Sorties: 9800, amt: 2290},
    {name: 'Juin', Entrees: 2780, Sorties: 3908, amt: 2000},
    {name: 'Juillet', Entrees: 1890, Sorties: 4800, amt: 2181},
    {name: 'Août', Entrees: 2390, Sorties: 3800, amt: 2500},
    {name: 'Septembre', Entrees: 3000, Sorties: 3200, amt: 2300},
    {name: 'Octobre', Entrees: 3490, Sorties: 4300, amt: 2100},
];


//création du graphique
export default class GraphLine extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (

      <div className="App">
<<<<<<< HEAD
        <div className="container" > 
          <div className="borderWidg">

=======
        <div className="container">
          <div className="borderWidg">
            <br/>
          <h1>Suivi de comptes</h1>      
>>>>>>> e2fd92b03f55a8d0b6e0ce9a4ba7b6f827b34315

          <h1 className="textwidgetcenter">Suivi de comptes</h1>      

          <LineChart 
            width={500}
            height={300}
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
            <Line type="monotone" dataKey="Sorties" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Entrees" stroke="#82ca9d" />
          </LineChart>
            </div>
        </div>

        </div>
      </div>

    );
  }
}


const rootElement4= document.getElementById("root4");
ReactDOM.render(<GraphLine />, rootElement4);

//ReactDOM.render(<GraphLine />, document.getElementById('root'));
