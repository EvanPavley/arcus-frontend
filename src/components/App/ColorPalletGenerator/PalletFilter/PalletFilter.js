import React from 'react'


import HueSlider from './HueSlider'
import LightSlider from './LightSlider'
import SaturationSlider from './SaturationSlider'

import './PalletFilter.css'

const PalletFilter = (props) => {
  return (
    <div className='pallet-filter'>
      <HueSlider size={250}/>
      <LightSlider max={75} min={25}/>
      <SaturationSlider max={100} min={40}/>
    </div>
  )
}

export default PalletFilter
