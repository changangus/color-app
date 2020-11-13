import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from'./Navbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';


export class Palette extends Component {
  constructor(props){
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    }
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(val){
    this.setState({
      format: val
    })
  }

  changeLevel(level){
    this.setState({
      level
    })
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        background={color[format]} 
        name={color.name} 
        key={color.id}
        id={color.id} 
        paletteId={id} 
        showLink 
        />
    ))
    return (
      <div className='palette'>
        <Navbar 
          level={level} 
          changeLevel={this.changeLevel} 
          changeFormat={this.changeFormat}
          sliderNeeded 
          />
        <div className='palette-colors'>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default Palette

