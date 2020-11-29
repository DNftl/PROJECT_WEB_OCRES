import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

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

import MapContainer from './widgetMap';

import widgetStandingFoot from './widgetStandingFoot.js';
import infoClassement from './infoClassement.js';




ReactDOM.render(
    <React.StrictMode>
      <MapContainer />
    </React.StrictMode>,
    document.getElementById('root7')
  );