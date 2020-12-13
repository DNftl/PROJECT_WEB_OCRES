import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route,BrowserRouter} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Widgets from './Widgets';
import DashboardAdmin from './DashboardAdmin';
import DashboardAdminPie from './DashboardAdminPie';
import Header from './components/Header';

ReactDOM.render(
<>

    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Header children ="Dashboard"/>
            <Widgets/>
          </Route>

          <Route exact path="/formulaire">
            <Header children ="Accounting form"/>
            <DashboardAdmin />
          </Route>

          <Route exact path="/formulairepie">
            <Header children ="Budgeting form"/>
            <DashboardAdminPie />
          </Route>

          <Route path ="*">
            < NotFound />
          </Route>

        </Switch>
      </BrowserRouter>
    </React.StrictMode>
    
    </>,
    document.getElementById('root')

  );

  function NotFound() {
    return(
    <div>
      <h3>
        404 Page not found ;(
      </h3>
    </div>
    );
  }