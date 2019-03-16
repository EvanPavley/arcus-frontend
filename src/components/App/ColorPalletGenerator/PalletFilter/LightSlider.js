import React from 'react'
import { connect } from 'react-redux';

import { changeLight } from '../../../../actions/actions';
import './LightSlider.css'

const LightSlider = (props) => {

  let handleLightChange = (event) => {
    props.changeLight(parseInt(event.target.value))
  };

  return (
    <div className="light-slider-container">
      <input
        className="light-slider"
        type="range"
        min="25"
        max="75"
        onChange= {handleLightChange}
        value={props.l}
        id="myRange"/>
    </div>
  )
}
function msp(state) {
  return {
    l: state.l,
    lightenOne: state.lightenOne,
    darkenOne: state.darkenOne,
  }
}
function mdp(dispatch){
  return {
    changeLight: (light) => dispatch(changeLight(light)),
  }
}

export default connect(msp, mdp)(LightSlider)
