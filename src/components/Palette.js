import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from'./Navbar';
import styles from '../styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';

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
          paletteName={paletteName}
          emoji={emoji}
          sliderNeeded 
          />
        <div className={classes.paletteColors}>
          {colorBoxes}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Palette)

