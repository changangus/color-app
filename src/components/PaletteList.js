import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

export class PaletteList extends Component {


  render() {
    const list = this.props.palettes.map((palette) => (
      <MiniPalette {...palette} />
    ))
    return (
      <div>
        {list}
      </div>
    )
  }
}

export default PaletteList
