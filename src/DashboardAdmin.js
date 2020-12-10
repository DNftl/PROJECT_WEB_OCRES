import React from 'react';
import {Link} from "react-router-dom";

class DashboardAdmin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            income: '',
            outcome: '',
            amt: '',
        }
    }

    upName(e)
    {
      this.setState({name: e.target.value})
    }
    upIncome(e)
    {
      this.setState({income: e.target.value})
    }
    upOutcome(e)
    {
      this.setState({outcome: e.target.value})
    }
    upAmt(e)
    {
      this.setState({amt: e.target.value})
    }

    render()
    {
        return(
            <div>
                <div>
                    <h1>Ajouter un devoir</h1>
                    <p>Nom : </p>
                    <input type="text" className="textwidgetcenter" value = {this.state.name} onChange={(e)=>this.upName(e)} ></input>
                    <p>Jour: </p>
                    <input type="text" className="textwidgetcenter" value = {this.state.income} onChange={(e)=>this.upIncome(e)} ></input>
                    <p>Mois : </p>
                    <input type="text" className="textwidgetcenter" value = {this.state.outcome} onChange={(e)=>this.upOutcome(e)} ></input>
                    <p>Année : </p>
                    <input type="text" className="textwidgetcenter" value = {this.state.amt} onChange={(e)=>this.upAmt(e)} ></input>
                </div>     

                <Link to ="/">Dashboard</Link>
           
            </div>

                        

        );
    }
}

export default DashboardAdmin;