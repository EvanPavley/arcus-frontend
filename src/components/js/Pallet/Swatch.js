import React from 'react'
import { connect } from 'react-redux';
import withStyles from 'react-jss'
import hsl from 'hsl-to-hex'
import hexRgb from 'hex-rgb'
import { changeHue, changeLight, changeSaturation, selectColorNum } from '../../../redux/actions';


const Swatch = (props) => {
  const hex = hsl(props.h, props.s, props.l).toUpperCase()
  const rgb = hexRgb(hex)

  let handelClick = () => {
    if (props.editable === true) {
      props.changeHue({hue: props.h, hex: hex})
      props.changeSaturation(props.s)
      props.changeLight(props.l)
      props.selectColorNum(props.number)
    }
  }

  let handleSwatchText = () => {
    if (props.swatchText === 'hex') {
      return `${hex}`
    }
    if (props.swatchText === 'hsl') {
      return `H:${props.h} S:${props.s}% L:${props.l}%`
    }
    if (props.swatchText === 'rgb') {
      return `R:${rgb.red} G:${rgb.green} B:${rgb.blue}`
    }
  }

  return (
    <div className={props.classes.swatch} onClick={handelClick}>
      <p className={props.classes.swatchTextClass}>{handleSwatchText()}</p>
    </div>
  )
}

const styles = {
  swatch: {
    backgroundColor: props => `hsl(
      ${props.h},
      ${props.s}%,
      ${props.l}%
    )`,
    height: props => props.height,
    width: props => props.height,
    marginRight: '.5rem',
    marginLeft: '.5rem',
    display: 'flex',
    border: props => props.border,
    '&:hover': {
      border: props => props.borderHover,
    }
  },
  swatchTextClass: {
    textAlign: 'center',
    color: 'white',
    fontSize: props => props.fontSize,
    fontWeight: 'bold',
    margin: 'auto',
    marginRight: '.2rem',
    marginLeft: '.5rem',
    visibility: props => props.visibility,
  },
}

function msp(state) {
  return {
    selectedColor: state.selectedColor,
    swatchText: state.swatchText,
  }
}

function mdp(dispatch){
  return {
    changeHue: (hue) => dispatch(changeHue(hue)),
    changeLight: (light) => dispatch(changeLight(light)),
    changeSaturation: (sat) => dispatch(changeSaturation(sat)),
    selectColorNum: (colorNum) => dispatch(selectColorNum(colorNum)),
  }
}

export default withStyles(styles)(connect(msp, mdp)(Swatch));
