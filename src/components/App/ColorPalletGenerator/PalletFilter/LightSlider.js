import React from 'react'
import { connect } from 'react-redux';

import { changeLight, editColor } from '../../../../actions/actions';
import './LightSlider.css'

const LightSlider = (props) => {

  let handleLightChange = (event) => {
    if (props.onEdit === true) {
      if (props.selectedColorNum === "one") {
        props.editColor({name:'OneLight', value:parseInt(event.target.value)})
      }else if (props.selectedColorNum === "two") {
        props.editColor({name:'TwoLight', value:parseInt(event.target.value)})
      }else if (props.selectedColorNum === "three") {
        props.editColor({name:'ThreeLight', value:parseInt(event.target.value)})
      }else if (props.selectedColorNum === "four") {
        props.editColor({name:'FourLight', value:parseInt(event.target.value)})
      }else if (props.selectedColorNum === "five") {
        props.editColor({name:'FiveLight', value:parseInt(event.target.value)})
      }
    }
    props.changeLight(parseInt(event.target.value))
  };

  return (
    <div className="light-slider-container">
      <p> L I G H T </p>
      <input
        className="light-slider"
        type="range"
        min={props.min}
        max={props.max}
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
    selectedColorNum: state.selectedColorNum
  }
}
function mdp(dispatch){
  return {
    changeLight: (light) => dispatch(changeLight(light)),
    editColor: ({name, value}) => dispatch(editColor({name, value}))
  }
}

export default connect(msp, mdp)(LightSlider)
