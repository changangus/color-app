import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import './ColorBox.css';

const styles = {
  colorBox: {
    width: '20%',
    height: props => props.showingFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.75px',
    '&:hover button': {
      opacity: 1
    }
  },
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
  },
  seeMore: {
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    padding: '5px',
    color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
    width: '60px',
    height: '20px',
    textAlign: 'center',
  },
  copyButton: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    lineHeight: '30px',
    color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
    border: 'none',
    textDecoration: 'none',
    opacity: '0',
  },
  boxContent: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    padding: '5px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.75s ease',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(10)',
    zIndex: '1',
    position: 'absolute',
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    transition: 'all 0.5s ease',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px 5px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '95%',
      padding: '1rem',
    }
  },
  showCopyMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '2',
    textAlign: 'center',
  },

}

export class ColorBox extends Component {
  constructor(props){
    super(props);
    this.state ={
      copied: false,
    }
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState(){
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied: false}), 1500);
    });
  }

  render() {
    const { name, background, paletteId, id, showingFullPalette, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.colorBox} style={{background: background}}>
          <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{background: background}}></div>
          <div className={`${classes.copyMessage} ${copied && classes.showCopyMessage}`}>
            <h1>COPIED</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>COPY</button>
          </div>
          {showingFullPalette && 
          <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
          }
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox)
