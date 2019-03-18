import React from 'react'
import withStyles from 'react-jss'
import hsl from 'hsl-to-hex'

const Swatch = (props) => {
  const hex = hsl(props.h, props.s, props.l).toUpperCase()
  console.log(props);
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
    height: '5rem',
    width: '5rem',
    marginRight: '.5rem',
    marginLeft: '.5rem',
    // '&:hover': {
    //   backgroundColor: 'red',
    // }
  },
  swatchText: {
    marginTop: '2rem',
    textAlign: 'center',
    color: 'white',
    fontSize: '.8rem',
    fontWeight: 'bold',
  },
}

export default withStyles(styles)(Swatch)
