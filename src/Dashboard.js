// 08/12/2020 AVANT IL N'Y' AVAIT RIEN -->

import React from 'react';
import ReactDOM from 'react-dom';

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

class Dashboard extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div >
                <widgetMeteo/>
                <widgetPays/>
                <widgetResultsMatch/>
                <widgetGraphLine/>
                <widgetGraphPie/>
                <widgetJournal/>
                <widgetMap/>
            </div>
        );
    }
}

export default Dashboard;