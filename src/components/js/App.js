import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setUsers, setCurrentUser } from '../../redux/actions';
import '../css/App.css';
import Navbar from './Navbar';
import ColorPalletGenerator from './ColorPalletGenerator';
import PalletShow from './PalletShow';
import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import About from './About'
import API_URL from '../../configURL'



class App extends Component {

  componentDidMount() {
    fetch(`${API_URL}/api/v1/users`)
      .then(r => r.json())
      .then(users =>
        this.props.setUsers(users)
      );

    const token = localStorage.getItem("token")

    if (token){
      fetch(`${API_URL}/api/v1/auto_login`, {
        method: "GET",
        headers: {
          "Authorization": token          }
      })
        .then(res => res.json())
        .then(response =>
          this.props.setCurrentUser(response)
        )
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar/>
        <Route
          path='/PaletteCreator'
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
        <Route
            path='/Profile'
            render={(props) => (
              <Profile/>
            )}
          />
        <Route
            path='/Signup'
            render={(props) => (
              <Signup/>
            )}
          />
        <Route
            path='/About'
            render={(props) => (
              <About/>
            )}
          />
      </div>
    )
  }
}

function msp(state) {
  return {
    users: state.users,
    current_user: state.current_user,
  }
}

function mdp(dispatch){
  return {
    setUsers: (users) => dispatch(setUsers(users)),
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  }
}

export default withRouter(connect(msp, mdp)(App));
