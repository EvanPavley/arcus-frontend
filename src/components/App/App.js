import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import ColorPalletGenerator from './ColorPalletGenerator/ColorPalletGenerator';
import PalletShow from './PalletShow/PalletShow';
import Homepage from './Homepage'
import Login from './Login'


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
        <Route
          path='/Homepage'
          render={() => (
            <Homepage/>
          )}
        />
        <Route
          path='/Login'
          render={() => (
            <Login/>
          )}
        />
        <Route
            path='/PalletShow'
            render={(props) => (
              <PalletShow/>
            )}
          />
      </div>
    )
  }
}

export default withRouter(App);
