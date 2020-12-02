import React, { Component } from 'react';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';
import './ColorBox.css';
import { Link } from 'react-router-dom';

export class SingleColorPalette extends Component {
  constructor(props){
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = ({
      format: 'hex'
    });
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(val){
    this.setState({
      format: val
    })
  }

  gatherShades(palette, colorToFilterBy){
    let shades = [];
    let allColors = palette.colors;

    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    // return all shades of given color
    return shades.slice(1);
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map(color => 
      <ColorBox 
        key={color[format]} 
        name={color.name} 
        background={color[format]}
        showingFullPalette={false} />)
    return (
      <div className='SingleColorPalette palette'>
        <Navbar 
          changeFormat={this.changeFormat}
          sliderNeeded={false} />
        <div className='palette-colors'>
          {colorBoxes}
          <div className='go-back color-box'><Link to={`/palette/${id}`} className='back-button'>Go Back</Link></div>
        </div>
        < PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default SingleColorPalette