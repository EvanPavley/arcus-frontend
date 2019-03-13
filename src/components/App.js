import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import withStyles from 'react-jss'
import CircularColor from 'react-circular-color';
import hexToHsl from 'hex-to-hsl'

import '../css/App.css';

const styles = {
  swatch: {
    backgroundColor: props => `hsl(
      ${props.h},
      ${props.s}%,
      ${props.l}%
    )`,
    height: '3.5rem',
    width: '3.5rem',
    marginRight: '.2rem',
    marginLeft: '.2rem',
  }
}

const swatch = ({classes, children}) => (
  <div className={classes.swatch}>
  </div>
)

const StyledSwatch = withStyles(styles)(swatch)

class App extends Component {
  state = {
    selectedColor: '#FF0000',
    h: 0,
    s: 100,
    l: 50,
    complementaryH: 180,
    analogusRightH: 330,
    analogusLeftH: 30,
    splitComplementaryLeftH: 210,
    splitComplementaryRightH: 150,
    triadicLeft: 240,
    triadicRight: 120,
    lightenOne: 70,
    darkenOne: 40,
    desaturateOne: 60,
    desaturateTwo: 30,
  };

  getComplement = hue => hue + 180

  getAnalogusRight = hue => hue + 30

  getAnalogusLeft = hue => hue - 30

  getSplitComplementaryLeft = hue => hue + 210

  getSplitComplementaryRight = hue => hue + 150

  getTriadicLeft = hue => hue + 240

  getTriadicRight = hue => hue + 120

  handleColorChange = (color) => {
    let hslArray = hexToHsl(color)
    let hsl = {
      h: hslArray[0],
      s: hslArray[1],
      l: hslArray[2],
    }
    this.setState({ selectedColor: color });

    this.setState({ h: hsl.h });
    this.setState({ s: hsl.s});
    this.setState({ l: hsl.l});

    this.setState({ analogusRightH: this.getAnalogusRight(hsl.h)});
    this.setState({ analogusLeftH: this.getAnalogusLeft(hsl.h)});

    this.setState({ complementaryH: this.getComplement(hsl.h)});
    this.setState({ splitComplementaryLeftH: this.getSplitComplementaryLeft(hsl.h)});
    this.setState({ splitComplementaryRightH: this.getSplitComplementaryRight(hsl.h)});

    this.setState({ triadicLeft: this.getTriadicLeft(hsl.h)});
    this.setState({ triadicRight: this.getTriadicRight(hsl.h)});

  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <div className="color-picker">
          <CircularColor
            size={200}
            color={ this.state.selectedColor }
            onChange={this.handleColorChange}
            centerRect={true}
          />
        </div>
        <div>
          <p>MonoChromeLight</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <p>MonoChromeSaturation</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateOne }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateTwo }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
          <p>MonoChromeLightSaturation</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateTwo }
              l={ this.state.lightenOne }
            ></StyledSwatch>
          </div>
          <p>MonoChromeDarkSaturation</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.desaturateTwo }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
        </div>
        <div>
          <p>Analogus1</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.s }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.desaturateOne }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.desaturateTwo }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.desaturateTwo }
              l={ this.state.lightenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusRightH }
              s={ this.state.desaturateTwo }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <p>Analogus2</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.analogusLeftH }
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
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.desaturateTwo }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.desaturateTwo }
              l={ this.state.lightenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.analogusLeftH }
              s={ this.state.desaturateTwo }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
        </div>
        <div>
          <p>SplitComplement1</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
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
              s={ this.state.s }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
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
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.desaturateTwo }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.lightenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.desaturateTwo }
              l={ this.state.lightenOne }
            ></StyledSwatch>
          </div>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.desaturateOne }
              l={ this.state.darkenOne }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryLeftH }
              s={ this.state.desaturateTwo }
              l={ this.state.darkenOne }
            ></StyledSwatch>
          </div>
          <p>Complementary</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.complementaryH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
          <p>SplitComplement2</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.splitComplementaryRightH }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
        </div>
        <div>
          <p>Triadic1</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.triadicLeft }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
          <p>Triadic2</p>
          <div className="pallet">
            <StyledSwatch
              h={ this.state.h }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
            <StyledSwatch
              h={ this.state.triadicRight }
              s={ this.state.s }
              l={ this.state.l }
            ></StyledSwatch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
