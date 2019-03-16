import React from 'react'
import withStyles from 'react-jss'

const Swatch = ({classes}) => {
  return (
    <div className={classes.swatch}>
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
  }
}

export default withStyles(styles)(Swatch)
