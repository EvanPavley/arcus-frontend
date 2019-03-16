import React, { Component } from 'react';
import { connect } from 'react-redux';

import withStyles from 'react-jss'
import CircularColor from 'react-circular-color';
import hexToHsl from 'hex-to-hsl'

import './App.css';
import { changeHue, changeLight, changeSaturation } from '../../actions/actions';
import ColorPalletGenerator from './ColorPalletGenerator/ColorPalletGenerator'

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

const swatch = ({classes, children}) => (
  <div className={classes.swatch}>
  </div>
)

const StyledSwatch = withStyles(styles)(swatch)

class App extends Component {

  render() {
    return (
      <div className="App">
        <ColorPalletGenerator/>
        <div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryRightH}
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH }
              s={ this.props.desaturateOne }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.desaturateOne }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH}
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.props.desaturateOne }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.desaturateOne }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.props.desaturateOne }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.desaturateOne }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryRightH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryRightH }
              s={ this.props.desaturateOne }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.desaturateOne }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryRightH}
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.props.desaturateOne }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.props.desaturateOne }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.desaturateOne }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH}
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH}
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.props.s }
              l={ this.props.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.props.s }
              l={ this.props.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.props.s }
              l={ this.props.darkenOne }
            ></StyledSwatch>
          </div>
        </div>
      </div>
    );
  }
}
function msp(state) {
  return {
    h: state.h,
    complementaryH: state.complementaryH,
    analogusRightH: state.analogusRightH,
    analogusLeftH: state.analogusLeftH,
    splitComplementaryLeftH: state.splitComplementaryLeftH,
    splitComplementaryRightH: state.splitComplementaryRightH,
    triadicLeft: state.triadicLeft,
    triadicRight: state.triadicRight,

    l: state.l,
    lightenOne: state.lightenOne,
    darkenOne: state.darkenOne,

    s: state.s,
    desaturateOne: state.desaturateOne,
    desaturateTwo: state.desaturateTwo,
  }
}

export default connect(msp)(App);
