import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

import './Navbar.css';

const Navbar = (props) => {
  return (
    <div className='nav-container'>
      <NavLink className='nav-item' to='/Homepage'>
        Homepage{' '}
      </NavLink>
      <NavLink className='nav-item' to='/ColorPalletGenerator'>
        Color Pallet Generator{' '}
      </NavLink>
      <NavLink className='nav-item' to='/Login'>
        Login{' '}
      </NavLink>
    </div>
  )
}

export default withRouter(Navbar)
