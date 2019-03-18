import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './PalletShow.css'
import Swatch from '../ColorPalletGenerator/PalletContainer/Swatch'

const PalletShow = (props) => {
  return (
    <div className='pallet-show-container'>
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
    </div>
  )
}

function msp(state) {
  return {
    selectedPallet: state.selectedPallet,
  }
}

export default connect(msp)(withRouter(PalletShow))
