import React, { Component } from 'react';
import './ColorBox.css';

export class ColorBox extends Component {
  render() {
    return (
      <div className='color-box' style={{background: this.props.background}}>
        <span>{this.props.name}More</span>
      </div>
    )
  }
}

export default ColorBox
