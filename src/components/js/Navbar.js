import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser, selectNavMenu } from '../../redux/actions';
import MediaQuery from 'react-responsive';

import logo from '../../images/Arcuslogo.png'
import '../css/Navbar.css';

const Navbar = (props) => {

  let handleLogout = () => {
    localStorage.removeItem("token")
    props.setCurrentUser(null);
  }

  let handleNavMenu = (e) => {
    props.selectNavMenu(e.target.value)
    if (e.target.value === 'Palette Creator') {
      props.history.push('/PaletteCreator')
    }
    if (e.target.value === 'Your Palettes') {
      props.history.push('/Profile')
    }
    if (e.target.value === 'Login') {
      props.history.push('/Login')
    }
    if (e.target.value === 'Sign Up') {
      props.history.push('/Signup')
    }
    if (e.target.value === 'About') {
      props.history.push('/About')
    }
    if (e.target.value === 'Logout') {
      handleLogout()
    }
  }

  return (
    <div>
      <MediaQuery orientation="portrait">
        <div className='nav-container'>
          <div className='cool-nav-container'>
            <input
              className='image'
              id='image'
              type='image'
              alt='logo'
              src={logo}
              onClick={() => props.history.push('/PaletteCreator')}
            />
          </div>

          {props.current_user === null ? (
            <div className="styled-select-nav blue semi-square" id="select-phone">
              <select
                onChange={handleNavMenu}
                value={props.navMenu}
                >
                <option>Select a Page</option>
                <option>Palette Creator</option>
                <option>Your Palettes</option>
                <option>About</option>
                <option>Login</option>
                <option>Sign Up</option>
              </select>
            </div>
          ) : (
            <div className="styled-select-nav blue semi-square" id="select-phone">
              <select
                onChange={handleNavMenu}
                value={props.navMenu}
                >
                <option>Select a Page</option>
                <option>Palette Creator</option>
                <option>Your Palettes</option>
                <option>About</option>
                <option>Logout</option>
              </select>
            </div>
          )}
        </div>
      </MediaQuery>
      <MediaQuery orientation="landscape">
        <div className='nav-container'>
          <div className='cool-nav-container'>
            <input
              className='image'
              type='image'
              alt='logo'
              src={logo}
              onClick={() => props.history.push('/PaletteCreator')}
            />
            <NavLink className='nav-item' to='/PaletteCreator'>
              Palette Creator{' '}
            </NavLink>
            <NavLink className='nav-item' to='/Profile'>
              Your Palettes{' '}
            </NavLink>
            <NavLink className='nav-item' to='/About'>
              About{' '}
            </NavLink>
          </div>

          {props.current_user === null ? (
            <div className='log-nav-container'>
              <NavLink className='nav-item' to='/Login'>
                Login{' '}
              </NavLink>
              <NavLink id="signup" to='/Signup'>
                Sign Up{' '}
              </NavLink>
            </div>
          ) : (
            <div className='log-nav-container' onClick={handleLogout}>
              <div id="signup">
                Logout
              </div>
            </div>
          )}
        </div>
      </MediaQuery>
    </div>
  )
}
function msp(state) {
  return {
    current_user: state.current_user,
    navMenu: state.navMenu,
  }
}

function mdp(dispatch){
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    selectNavMenu: (user) => dispatch(selectNavMenu(user)),
  }
}

export default withRouter(connect(msp, mdp)(Navbar))
