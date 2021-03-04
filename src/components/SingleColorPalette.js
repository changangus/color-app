import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import styles from '../styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';
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
    const { classes } = this.props;
    const { format } = this.state;
    const { id } = this.props.palette;
    const colorBoxes = this._shades.map(color => 
      <ColorBox 
        key={color[format]} 
        name={color.name} 
        background={color[format]}
        showingFullPalette={false} />)
    return (
      <div className={classes.palette}>
        <Navbar 
          changeFormat={this.changeFormat}
          sliderNeeded={false} />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}><Link to={`/palette/${id}`}>Go Back</Link></div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette)
