import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import withStyles from 'react-jss'

import '../css/App.css';

const styles = {
  myButton: {
    backgroundColor: props => `hsl(
      ${props.h},
      ${props.s}%,
      ${props.l}%
    )`,
    height: '5rem',
    width: '5rem',
    margin: '1rem',
  }
}

const Button = ({classes, children}) => (
  <button className={classes.myButton}>
  </button>
)

const StyledButton = withStyles(styles)(Button)

class App extends Component {
  state = {
    selectedColor: '#fff',
    h: null,
    s: null,
    l: null,
  };

  handleChange = (color) => {
    this.setState({ selectedColor: color.hex });
    this.setState({ h: color.hsl.h });
    this.setState({ s: color.hsl.s * 100});
    this.setState({ l: color.hsl.l * 100});
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <ChromePicker
          color={ this.state.selectedColor }
          onChange={ this.handleChange }
        />
        <StyledButton
          h={ this.state.h }
          s={ this.state.s }
          l={ this.state.l }
        ></StyledButton>
      </div>
    );
  }
}

export default App;
