import React from 'react'
import { connect } from 'react-redux';

import CircularColor from 'react-circular-color';
import hexToHsl from 'hex-to-hsl'

import { changeHue, editColor } from '../../../redux/actions';
import '../../css/PalletFilters/HueSlider.css'

const HueSlider = (props) => {

  let handleHueChange = (hexColor) => {
    if (props.onEdit === true) {
      if (props.selectedColorNum === "one") {
        props.editColor({name:'OneHue', value:hexToHsl(hexColor)[0]})
      }else if (props.selectedColorNum === "two") {
        props.editColor({name:'TwoHue', value:hexToHsl(hexColor)[0]})
      }else if (props.selectedColorNum === "three") {
        props.editColor({name:'ThreeHue', value:hexToHsl(hexColor)[0]})
      }else if (props.selectedColorNum === "four") {
        props.editColor({name:'FourHue', value:hexToHsl(hexColor)[0]})
      }else if (props.selectedColorNum === "five") {
        props.editColor({name:'FiveHue', value:hexToHsl(hexColor)[0]})
      }
    }
    props.changeHue({hue: hexToHsl(hexColor)[0], hex: hexColor})
  }

  return (
    <div className='hue-slider'>
      <p> H U E </p>
      <CircularColor
        size={props.size}
        color={ props.selectedColor }
        value={ props.selectedColor }
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
    selectedColorNum: state.selectedColorNum,
  }
}
function mdp(dispatch){
  return {
    changeHue: (hue) => dispatch(changeHue(hue)),
    editColor: ({name, value}) => dispatch(editColor({name, value})),
  }
}
export default connect(msp, mdp)(HueSlider)
