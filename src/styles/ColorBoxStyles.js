import chroma from 'chroma-js';

export default {
  colorBox: {
    width: '20%',
    height: props => props.showingFullPalette ? '25%' : '50%',
    overflow: 'hidden',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-3.95px',
    '&:hover button': {
      opacity: 1,
      cursor: 'pointer'
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
    transform: 'scale(8)',
    width: '100%',
    height: '100%',
    transition: 'all 0.35s ease',
  },
  showOverlay: {
    opacity: '1',
    zIndex: '1',
    position: 'fixed',
    overflow: 'hidden',
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
    transition: 'opacity 0.35s ease',
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