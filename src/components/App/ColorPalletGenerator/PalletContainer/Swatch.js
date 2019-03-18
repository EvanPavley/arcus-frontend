import React from 'react'
import withStyles from 'react-jss'
import hsl from 'hsl-to-hex'

const Swatch = (props) => {
  const hex = hsl(props.h, props.s, props.l).toUpperCase()
  return (
    <div className={props.classes.swatch}>
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
    // '&:hover': {
    //   backgroundColor: 'red',
    // }
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

export default withStyles(styles)(Swatch)
