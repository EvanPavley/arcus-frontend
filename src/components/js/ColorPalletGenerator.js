import React from 'react'

import PalletFilter from './PalletFilters/PalletFilter'
import PalletContainer from './Pallet/PalletContainer'

import '../css/ColorPalletGenerator.css';

const ColorPalletGenerator = (props) => {
  return (
    <div className="color-pallet-generator">
      <PalletFilter />
      <PalletContainer />
    </div>
  )
}

export default ColorPalletGenerator
