import React from 'react'

import PalletFilter from './PalletFilter/PalletFilter'
import PalletContainer from './PalletContainer/PalletContainer'

import './ColorPalletGenerator.css';

const ColorPalletGenerator = (props) => {
  return (
    <div className="color-pallet-generator">
      <PalletFilter />
      <PalletContainer />
    </div>
  )
}

export default ColorPalletGenerator
