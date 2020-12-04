import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from'./Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import './Palette.css';

const styles = {
  palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  paletteColors: {
    height: '90%',
  }
};

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
    const { classes } = this.props;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        background={color[format]} 
        name={color.name} 
        key={color.id}
        id={color.id} 
        paletteId={id} 
        showingFullPalette
        />
    ))
    return (
      <div className={classes.palette}>
        <Navbar 
          level={level} 
          changeLevel={this.changeLevel} 
          changeFormat={this.changeFormat}
          sliderNeeded 
          />
        <div className={classes.paletteColors}>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default withStyles(styles)(Palette)

