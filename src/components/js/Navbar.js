import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions';
import MediaQuery from 'react-responsive';

import logo from '../../images/Arcuslogo.png'
import '../css/Navbar.css';

const Navbar = (props) => {

  let handleLogout = () => {
    props.setCurrentUser(null);
  }

  return (
    <div>
      <MediaQuery orientation="portrait">
        <div className='nav-container'>
          <div className='cool-nav-container'>
            <input
              className='image'
              type='image'
              alt='logo'
              src={logo}
              onClick={() => props.history.push('/HomePage')}
            />
            <NavLink className='nav-item' to='/ColorPalletGenerator'>
              Color Palette Generator{' '}
            </NavLink>
            <NavLink className='nav-item' to='/Profile'>
              Your Palettes{' '}
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
      <MediaQuery orientation="landscape">
        <div className='nav-container'>
          <div className='cool-nav-container'>
            <input
              className='image'
              type='image'
              alt='logo'
              src={logo}
              onClick={() => props.history.push('/HomePage')}
            />
            <NavLink className='nav-item' to='/ColorPalletGenerator'>
              Color Palette Generator{' '}
            </NavLink>
            <NavLink className='nav-item' to='/Profile'>
              Your Palettes{' '}
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
  }
}

function mdp(dispatch){
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  }
}

export default withRouter(connect(msp, mdp)(Navbar))
