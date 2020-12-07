import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

//importation pour storybook
import Button from './components/Button';
import Form from './components/Button/formulaire';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import WidgetMeteo from './components/WidgetMeteo';
//import Input from './components/Input';

import reportWebVitals from './reportWebVitals';
import widgetMeteo from "./widgetMeteo.js";
import infoMeteo from './infoMeteo.js';

import widgetPays from './widgetPays.js';
import infoPays from './infoPays.js';

import widgetResultsMatch from './widgetResultsMatch.js';
import infoMatch from './infoMatch.js';

import Boutton from './App.js';

import widgetGraphLine from './widgetGraphLine.js';
import widgetGraphPie from './widgetGraphPie.js';

import widgetJournal from './widgetJournal.js';
import infoJournal from './infoJournal.js';

import widgetStandingFoot from './widgetStandingFoot.js';
import infoClassement from './infoClassement.js';

import MapContainer from './widgetMap';


ReactDOM.render(
    <Header />,
    document.getElementById('Header')
  );


ReactDOM.render(
    <Button />,
    document.getElementById('Button')
  );

  
  ReactDOM.render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>,
    document.getElementById('Form')
  );


ReactDOM.render(
    <React.StrictMode>
      <MapContainer />
    </React.StrictMode>,
    document.getElementById('root7')
  );