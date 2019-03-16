import React, { Component } from 'react';

import './App.css';
import ColorPalletGenerator from './ColorPalletGenerator/ColorPalletGenerator'

class App extends Component {

  render() {
    return (
      <div className="app">
        <ColorPalletGenerator/>
      </div>
    )
  }
}

export default App;
