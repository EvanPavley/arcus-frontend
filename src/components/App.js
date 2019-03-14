import React, { Component } from 'react';
import withStyles from 'react-jss'
import CircularColor from 'react-circular-color';
import hexToHsl from 'hex-to-hsl'
import Slider from '@material-ui/lab/Slider';

import '../css/App.css';

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
  getComplement = hue => hue + 180

  getAnalogusRight = hue => hue + 30

  getAnalogusLeft = hue => hue - 30

  getSplitComplementaryLeft = hue => hue + 210

  getSplitComplementaryRight = hue => hue + 150

  getTriadicLeft = hue => hue + 240

  getTriadicRight = hue => hue + 120

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

  state = {
    selectedColor: '#00bcff',
    h: 196,
    s: 100,
    l: 50,
    complementaryH: this.getComplement(196),
    analogusRightH: this.getAnalogusRight(196),
    analogusLeftH: this.getAnalogusLeft(196),
    splitComplementaryLeftH: this.getSplitComplementaryLeft(196),
    splitComplementaryRightH: this.getSplitComplementaryRight(196),
    triadicLeft: this.getTriadicLeft(196),
    triadicRight: this.getTriadicRight(196),
    lightenOne: this.getLightenOne(50),
    darkenOne: this.getDarkenOne(50),
    desaturateOne: 60,
    desaturateTwo: 30,
    lightSliderVal: 50,
    satSliderVal: 100,
  };

  handleHueChange = (color) => {
    let hslArray = hexToHsl(color)
    console.log(color);
    let hsl = {
      h: hslArray[0],
      s: hslArray[1],
      l: hslArray[2],
    }
    this.setState({ selectedColor: color });

    this.setState({ h: hsl.h });

    this.setState({ analogusRightH: this.getAnalogusRight(hsl.h)});
    this.setState({ analogusLeftH: this.getAnalogusLeft(hsl.h)});

    this.setState({ complementaryH: this.getComplement(hsl.h)});
    this.setState({ splitComplementaryLeftH: this.getSplitComplementaryLeft(hsl.h)});
    this.setState({ splitComplementaryRightH: this.getSplitComplementaryRight(hsl.h)});

    this.setState({ triadicLeft: this.getTriadicLeft(hsl.h)});
    this.setState({ triadicRight: this.getTriadicRight(hsl.h)});
  }

  handleLightChange = (event) => {
    let light = parseInt(event.target.value)
    this.setState({ l: light});
    this.setState({ lightSliderVal: light});
    this.setState({ lightenOne: this.getLightenOne(light)});
    this.setState({ darkenOne: this.getDarkenOne(light)});
  };

  handleSaturationChange = (event) => {
    let sat = parseInt(event.target.value)
    this.setState({ s: sat});
    this.setState({ satSliderVal: sat});
  }

  render() {
    console.log(this.state.lightSliderVal);
    return (
      <div className="App">
        <div className="color-picker">
          <CircularColor
            size={250}
            color={ this.state.selectedColor }
            onChange={this.handleHueChange}
            centerRect={true}
          />
          <div className="slider-container">
            <input
              type="range"
              min="25"
              max="75"
              onChange= {this.handleLightChange}
              value={this.state.lightSliderVal}
              class="slider"
              id="myRange"/>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="40"
              max="100"
              onChange= {this.handleSaturationChange}
              value={this.state.satSliderVal}
              class="slider"
              id="myRange"/>
          </div>
        </div>
        <div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryRightH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.complementaryH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryRightH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryRightH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryRightH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.complementaryH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.complementaryH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.complementaryH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.complementaryH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH}
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.complementaryH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
