import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import ReactBreakpoints from 'react-breakpoints'

import './index.css';
import App from './components/js/App';
import store from './redux/store';

const breakpoints = {
  mobile: 1000,
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ReactBreakpoints breakpoints={breakpoints}>
        <App />
      </ReactBreakpoints>
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
