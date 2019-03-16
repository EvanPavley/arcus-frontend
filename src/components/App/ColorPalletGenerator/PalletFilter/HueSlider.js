import React from 'react'
import { connect } from 'react-redux';

import CircularColor from 'react-circular-color';
import hexToHsl from 'hex-to-hsl'

import { changeHue } from '../../../../actions/actions';
import './HueSlider.css'

const HueSlider = (props) => {

  let handleHueChange = (hexColor) => {
    props.changeHue({hue: hexToHsl(hexColor)[0], hex: hexColor})
  }

  return (
    <div className='hue-slider'>
      <CircularColor
        size={props.size}
        color={ props.selectedColor }
        onChange={handleHueChange}
        centerRect={true}
      />
    </div>
  )
}

function msp(state) {
  return {
    selectedColor: state.selectedColor,

    h: state.h,
    complementaryH: state.complementaryH,
    analogusRightH: state.analogusRightH,
    analogusLeftH: state.analogusLeftH,
    splitComplementaryLeftH: state.splitComplementaryLeftH,
    splitComplementaryRightH: state.splitComplementaryRightH,
    triadicLeft: state.triadicLeft,
    triadicRight: state.triadicRight,
  }
}
function mdp(dispatch){
  return {
    changeHue: (hue) => dispatch(changeHue(hue)),
  }
}
export default connect(msp, mdp)(HueSlider)
