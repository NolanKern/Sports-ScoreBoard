// requires npm-input-slider
import React from 'react';
import InputSlider from 'react-input-slider';

class Slider extends React.Component {
  state = {
    x: 10
  };

  render() {
    return (
      <InputSlider
        className="slider slider-x"
        axis="x"
        x={this.state.x}
        xmax={100}
        onChange={this.handleChange}
      />
    );
  }

  handleChange = pos => {
    this.setState({
      x: pos.x,
    });
  };
}