import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Swatch from './Swatch'
import { selectPallet } from '../../../../actions/actions';
import './Pallet.css'

const Pallet = (props) => {
  let handleClick = () => {
    props.selectPallet({
      OneHue: props.OneHue,
      OneSat: props.OneSat,
      OneLight: props.OneLight,

      TwoHue: props.TwoHue,
      TwoSat: props.TwoSat,
      TwoLight: props.TwoLight,

      ThreeHue: props.ThreeHue,
      ThreeSat: props.ThreeSat,
      ThreeLight: props.ThreeLight,

      FourHue: props.FourHue,
      FourSat: props.FourSat,
      FourLight: props.FourLight,

      FiveHue: props.FiveHue,
      FiveSat: props.FiveSat,
      FiveLight: props.FiveLight,
    })
    if (props.onProfile === true) {
      console.log('hit');
    }else {
      props.history.push(`/PalletShow`)
    }
  }

  return (
    <div
      className='pallet'
      onClick= {handleClick}
      >
      <Swatch
        h={ props.OneHue }
        s={ props.OneSat }
        l={ props.OneLight }
        height={'5rem'}
        width={'5rem'}
        fontSize={'.8em'}
        visibility={'hidden'}
      ></Swatch>
      <Swatch
        h={ props.TwoHue }
        s={ props.TwoSat }
        l={ props.TwoLight }
        height={'5rem'}
        width={'5rem'}
        fontSize={'.8em'}
        visibility={'hidden'}
      ></Swatch>
      <Swatch
        h={ props.ThreeHue }
        s={ props.ThreeSat }
        l={ props.ThreeLight }
        height={'5rem'}
        width={'5rem'}
        fontSize={'.8em'}
        visibility={'hidden'}
      ></Swatch>
      <Swatch
        h={ props.FourHue }
        s={ props.FourSat }
        l={ props.FourLight }
        height={'5rem'}
        width={'5rem'}
        fontSize={'.8em'}
        visibility={'hidden'}
      ></Swatch>
      <Swatch
        h={ props.FiveHue }
        s={ props.FiveSat }
        l={ props.FiveLight }
        height={'5rem'}
        width={'5rem'}
        fontSize={'.8em'}
        visibility={'hidden'}
      ></Swatch>
    </div>
  )
}

function msp(state) {
  return {
    selectedPallet: state.selectedPallet,
  }
}

function mdp(dispatch){
  return {
    selectPallet: (pallet) => dispatch(selectPallet(pallet)),
  }
}

export default connect(msp, mdp)(withRouter(Pallet))
