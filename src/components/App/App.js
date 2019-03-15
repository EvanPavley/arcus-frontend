import React, { Component } from 'react';
import { connect } from 'react-redux';

import withStyles from 'react-jss'
import CircularColor from 'react-circular-color';
import hexToHsl from 'hex-to-hsl'

import './App.css';
import { changeHue } from '../../actions/actions';

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

  getLightenOne = light => {
    let newLight = 0
    if (light <= 65 && light > 40) {
      newLight = light + 20
    }else if (light > 65) {
      newLight = 85
    }else{
      newLight = light + 10
    }
    return newLight
  }
  getDarkenOne = light => light - 10

  getDesaturateOne = sat => {
    let newSat = 0
    if (sat > 60) {
      newSat = sat - 40
    }else {
      newSat = 20
    }
    return newSat
  }
  getDesaturateTwo = sat => {
    let newSat = 0
    if (sat > 60) {
      newSat = sat - 70
    }else {
      newSat = 10
    }
    return newSat
  }


  state = {
    s: 100,
    l: 50,
    lightenOne: this.getLightenOne(50),
    darkenOne: this.getDarkenOne(50),
    desaturateOne: this.getDesaturateOne(100),
    desaturateTwo: this.getDesaturateTwo(100),
  };

  handleHueChange = (color) => {
    let hslArray = hexToHsl(color)
    let hsl = {
      h: hslArray[0],
      s: hslArray[1],
      l: hslArray[2],
    }
    this.props.changeHue({hue: hsl.h, hex: color})
  }

  handleLightChange = (event) => {
    let light = parseInt(event.target.value)
    this.setState({ l: light});
    this.setState({ lightenOne: this.getLightenOne(light)});
    this.setState({ darkenOne: this.getDarkenOne(light)});
  };

  handleSaturationChange = (event) => {
    let sat = parseInt(event.target.value)
    console.log(sat);
    this.setState({ s: sat});
    this.setState({ desaturateOne: this.getDesaturateOne(sat)});
    this.setState({ desaturateTwo: this.getDesaturateTwo(sat)});
  }

  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <div className="color-picker">
          <CircularColor
            size={250}
            color={ this.props.selectedColor }
            onChange={this.handleHueChange}
            centerRect={true}
          />
          <div className="slider-container">
            <input
              type="range"
              min="25"
              max="75"
              onChange= {this.handleLightChange}
              value={this.state.l}
              className="slider"
              id="myRange"/>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="40"
              max="100"
              onChange= {this.handleSaturationChange}
              value={this.state.s}
              className="slider"
              id="myRange"/>
          </div>
        </div>
        <div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryRightH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusRightH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryRightH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryRightH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryRightH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.splitComplementaryLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.analogusLeftH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.complementaryH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.props.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedColor: state.selectedColor,
    h: state.h,
    s: state.s,
    l: state.l,
    complementaryH: state.complementaryH,
    analogusRightH: state.analogusRightH,
    analogusLeftH: state.analogusLeftH,
    splitComplementaryLeftH: state.splitComplementaryLeftH,
    splitComplementaryRightH: state.splitComplementaryRightH,
    triadicLeft: state.triadicLeft,
    triadicRight: state.triadicRight,
    lightenOne: state.lightenOne,
    darkenOne: state.darkenOne,
    desaturateOne: state.desaturateOne,
    desaturateTwo: state.desaturateTwo,
  }
}
function mapDispatchToProps(dispatch){
  return {
    changeHue: (hue) => dispatch(changeHue(hue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
