import React from 'react'

import PalletFilter from './PalletFilters/PalletFilter'
import PalletContainer from './Pallet/PalletContainer'
import MediaQuery from 'react-responsive';

import '../css/ColorPalletGenerator.css';

const ColorPalletGenerator = (props) => {
  return (
    <div className="color-pallet-generator">
      <MediaQuery orientation="portrait">
        <div>
          <PalletFilter />
          <PalletContainer />
        </div>
      </MediaQuery>
      <MediaQuery orientation="landscape">
        <PalletFilter />
        <PalletContainer />
      </MediaQuery>
    </div>
  )
}

export default ColorPalletGenerator
