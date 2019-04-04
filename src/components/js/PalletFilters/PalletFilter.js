import React from 'react'
import HueSlider from './HueSlider'
import LightSlider from './LightSlider'
import SaturationSlider from './SaturationSlider'
import MediaQuery from 'react-responsive';

import '../../css/PalletFilters/PalletFilter.css'

const PalletFilter = (props) => {
  return (
    <div className='pallet-filter'>
      <MediaQuery orientation="portrait">
        <div className="pallet-filter-container-gen">
          <HueSlider size={200}/>
          <div className="light-sat-gen">
            <LightSlider max={75} min={25}/>
            <SaturationSlider max={100} min={40}/>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery orientation="landscape">
        <HueSlider size={250}/>
        <LightSlider max={75} min={25}/>
        <SaturationSlider max={100} min={40}/>
      </MediaQuery>
    </div>
  )
}

export default PalletFilter
