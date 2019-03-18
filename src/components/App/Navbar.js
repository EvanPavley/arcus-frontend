import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

import './Navbar.css';
import ColorPalletGenerator from './ColorPalletGenerator/ColorPalletGenerator';

const Navbar = (props) => {
  return (
    <div className='nav-container'>
      <NavLink className='nav-item' to='/ColorPalletGenerator'>
        ColorPalletGenerator{' '}
      </NavLink>
    </div>
  )
}

export default withRouter(Navbar)
