import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class DashboardAdmin extends React.Component
{

  //13/12 ICI J'AI AJOUTE

  state = {
    month: '',
    income: '',
    outcome: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios.get('http://localhost:3001/graphLine')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data});
      console.log('TIFF DATA  RECUP');
    })

    .catch(() => {
      alert('TIFF Message d erreur db pas recup');
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      month: this.state.month,
      income: this.state.income,
      outcome: this.state.outcome,
      body: this.state.body
    };


    axios({
      url: 'http://localhost:3001/graphLine',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('TIFF les donnees ont bien ete envoye au serveur hehe');
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log('TIFF donnees pas envoyees au serveur bouhh');
      });;
  };


  //FIN DE L'AJOUT 13/12

    render()
    {

      //TIFF AJOUT ICI
      console.log('TIFF ICI State: ', this.state);

        return(
            <div>
                <div>
                  <h1>Accounting Widget Form</h1>                
                    <form onSubmit={this.submit}>
                      <div>
                        <p></p>
                        <input type="text" className="textwidgetcenter" name="month" placeholder="Month" value={this.state.month} onChange={this.handleChange} />
                      </div>

                      <div>
                        <p></p>
                        <input type="text" className="textwidgetcenter" name="income" placeholder="Income" value={this.state.income} onChange={this.handleChange} />
                      </div>

                      <div>
                        <p></p>
                        <input type="text" className="textwidgetcenter" name="outcome" placeholder="Outcome" value={this.state.outcome} onChange={this.handleChange} />
                        <p></p>
                      </div>

                      <button className="boutonAutre">Add data</button>
                    </form>
                </div>

                <div class="row">          
                  <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10"  >
                  </div>

                  <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"  >
                    <p></p>
                    <Link to ="/"  className="boutonAutre">Dashboard </Link>
                  </div>
                </div>

            </div>
        );
    }
}

export default DashboardAdmin;