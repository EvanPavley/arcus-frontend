import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import logo from './images/Arcuslogo.png'
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div className='nav-container'>
      <div className='cool-nav-container'>
        <input
          className='image'
          type='image'
          src={logo}
          onClick={() => props.history.push('/HomePage')}
        />
        <NavLink className='nav-item' to='/ColorPalletGenerator'>
          Color Pallet Generator{' '}
        </NavLink>
        <NavLink className='nav-item' to='/Profile'>
          Profile{' '}
        </NavLink>
      </div>

      <div className='log-nav-container'>
        <NavLink className='nav-item' to='/Login'>
          Login{' '}
        </NavLink>
        <NavLink id="signup" to='/Signup'>
          Sign Up{' '}
        </NavLink>
      </div>
    </div>
  )
}

export default withRouter(Navbar)
