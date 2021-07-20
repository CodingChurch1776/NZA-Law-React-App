import React from 'react';
import ReactDOM from 'react-dom';
import {Home, Contact, WhatDo, WhereWork, WhoAre} from './components';


//Import for react routing
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}>
        </Route>

        <Route path='/contact' component={Contact}/>
        <Route path='/wherework' component={WhereWork}/>
        <Route path='/whoare' component={WhoAre}/>
        <Route path='/whatdo' component={WhatDo}/>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


