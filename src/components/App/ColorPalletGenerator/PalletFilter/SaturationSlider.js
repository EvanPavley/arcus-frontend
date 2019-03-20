import React from 'react'
import { connect } from 'react-redux';

import { changeSaturation } from '../../../../actions/actions';
import './SaturationSlider.css'

const SaturationSlider = (props) => {

  let handleSaturationChange = (event) => {
    props.changeSaturation(parseInt(event.target.value))
  }

  return (
    <div className="sat-slider-container">
      <p> S A T U R A T I O N </p>
      <input
        className="sat-slider"
        type="range"
        min="40"
        max="100"
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
  }
}

export default connect(msp, mdp)(SaturationSlider)
