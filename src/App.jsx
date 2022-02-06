import React from 'react';
import './index.css';
import { Route, withRouter } from 'react-router-dom';
import Body from './Body';
import CarsChoise from './CarsChoise';

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Body />
      </Route>
      <Route path="/cars/:model" component={CarsChoise} />
    </div>
  );
}

export default (withRouter(App));
