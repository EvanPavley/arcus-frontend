import React from 'react'
import { connect } from 'react-redux';

import { changeSaturation, editColor } from '../../../../actions/actions';
import './SaturationSlider.css'

const SaturationSlider = (props) => {

  let handleSaturationChange = (event) => {
    if (props.onEdit === true) {
      if (props.selectedColorNum === "one") {
        props.editColor({name:'OneSat', value:parseInt(event.target.value)})
      }else if (props.selectedColorNum === "two") {
        props.editColor({name:'TwoSat', value:parseInt(event.target.value)})
      }else if (props.selectedColorNum === "three") {
        props.editColor({name:'ThreeSat', value:parseInt(event.target.value)})
      }else if (props.selectedColorNum === "four") {
        props.editColor({name:'FourSat', value:parseInt(event.target.value)})
      }else if (props.selectedColorNum === "five") {
        props.editColor({name:'FiveSat', value:parseInt(event.target.value)})
      }
    }
    props.changeSaturation(parseInt(event.target.value))
  }

  return (
    <div className="sat-slider-container">
      <p> S A T U R A T I O N </p>
      <input
        className="sat-slider"
        type="range"
        min={props.min}
        max={props.max}
        onChange= {handleSaturationChange}
        value={props.s}
        id="myRange"/>
    </div>
  )
}

function msp(state) {
  return {
    s: state.s,
    desaturateOne: state.desaturateOne,
    desaturateTwo: state.desaturateTwo,
  }
}
function mdp(dispatch){
  return {
    changeSaturation: (sat) => dispatch(changeSaturation(sat)),
    editColor: ({name, value}) => dispatch(editColor({name, value})),
  }
}

export default connect(msp, mdp)(SaturationSlider)
