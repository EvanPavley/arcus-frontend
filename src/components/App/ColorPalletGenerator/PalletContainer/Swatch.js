import React from 'react'
import { connect } from 'react-redux';
import withStyles from 'react-jss'
import hsl from 'hsl-to-hex'
import { changeHue, changeLight, changeSaturation, selectColorNum } from '../../../../actions/actions';


const Swatch = (props) => {
  const hex = hsl(props.h, props.s, props.l).toUpperCase()

  let handelClick = () => {
    if (props.editable === true) {
      props.changeHue({hue: props.h, hex: hex})
      props.changeSaturation(props.s)
      props.changeLight(props.l)
      props.selectColorNum(props.number)
    }
  }

  return (
    <div className={props.classes.swatch} onClick={handelClick}>
      <p className={props.classes.swatchText}>{hex}</p>
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
  swatchText: {
    textAlign: 'center',
    color: 'white',
    fontSize: props => props.fontSize,
    fontWeight: 'bold',
    margin: 'auto',
    visibility: props => props.visibility,
  },
}

function msp(state) {
  return {
    selectedColor: state.selectedColor,
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
