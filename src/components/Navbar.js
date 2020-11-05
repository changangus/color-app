import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export class Navbar extends Component {
  constructor(props){
    super(props);
    this.state ={
      format: 'hex',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      format: e.target.value,
    })
    this.props.changeFormat(e.target.value)
  }

  render() {
    const { format } = this.state;
    const { level, changeLevel } = this.props;
    return (
      <nav className='navbar'>
        <div className='logo'>
          <a href='/'>ReactColorPicker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider 
              defaultValue={level} 
              min={100} 
              max={900} 
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value='hex'>HEX - #000000</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(0, 0, 0)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(0, 0, 0, 1.0)</MenuItem>
          </Select>
        </div>
      </nav>
    )
  }
}

export default Navbar
