import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Stars from './Stars';
import hsl from 'hsl-to-hex'

import './PalletShow.css'
import Swatch from '../ColorPalletGenerator/PalletContainer/Swatch'

const PalletShow = (props) => {
  const hexOne = hsl(props.selectedPallet.OneHue, props.selectedPallet.OneSat, props.selectedPallet.OneLight)
  const hexTwo = hsl(props.selectedPallet.TwoHue, props.selectedPallet.TwoSat, props.selectedPallet.TwoLight)
  const hexThree = hsl(props.selectedPallet.ThreeHue, props.selectedPallet.ThreeSat, props.selectedPallet.ThreeLight)
  const hexFour = hsl(props.selectedPallet.FourHue, props.selectedPallet.FourSat, props.selectedPallet.FourLight)
  const hexFive = hsl(props.selectedPallet.FiveHue, props.selectedPallet.FiveSat, props.selectedPallet.FiveLight)

  return (
    <div className='pallet-show-container'>
      <div>
        <div className='pallet-show'>
          <Swatch
            h={ props.selectedPallet.OneHue }
            s={ props.selectedPallet.OneSat }
            l={ props.selectedPallet.OneLight }
            height={'10rem'}
            width={'10rem'}
            fontSize={'1.7em'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.TwoHue }
            s={ props.selectedPallet.TwoSat }
            l={ props.selectedPallet.TwoLight }
            height={'10rem'}
            width={'10rem'}
            fontSize={'1.7em'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.ThreeHue }
            s={ props.selectedPallet.ThreeSat }
            l={ props.selectedPallet.ThreeLight }
            height={'5rem'}
            width={'5rem'}
            fontSize={'.8em'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.FourHue }
            s={ props.selectedPallet.FourSat }
            l={ props.selectedPallet.FourLight }
            height={'5rem'}
            width={'5rem'}
            fontSize={'.8em'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.FiveHue }
            s={ props.selectedPallet.FiveSat }
            l={ props.selectedPallet.FiveLight }
            height={'5rem'}
            width={'5rem'}
            fontSize={'.8em'}
          ></Swatch>
          <div className='button-container'>
            <div className='back-btn' onClick={() => props.history.goBack()}>
              B A C K
            </div>
          </div>
        </div>
        <div className='mockup-container'>
          <div className='star-one-container'>
            <Stars
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function msp(state) {
  return {
    selectedPallet: state.selectedPallet,
  }
}

export default connect(msp)(withRouter(PalletShow))
