import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';


export class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors.map(color => (<ColorBox background={color.color} name={color.name}/>))
    return (
      <div className='palette'>
        {/* Navbar goes here */}
        <div className='palette-colors'>
          {colorBoxes}
        </div>
        {/* Footer goes here */}
      </div>
    )
  }
}

export default Palette

