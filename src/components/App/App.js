import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import ColorPalletGenerator from './ColorPalletGenerator/ColorPalletGenerator';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
          <Route
            path='/ColorPalletGenerator'
            render={() => (
              <ColorPalletGenerator/>
            )}
          />
      </div>
    )
  }
}

export default withRouter(App);
