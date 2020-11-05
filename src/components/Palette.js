import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from'./Navbar';
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
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        background={color[format]} 
        name={color.name} 
        key={color.name}/>
    ))
    return (
      <div className='palette'>
        <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
        <div className='palette-colors'>
          {colorBoxes}
        </div>
        {/* Footer goes here */}
      </div>
    )
  }
}

export default Palette

