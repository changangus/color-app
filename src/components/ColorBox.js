import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    const { name, background, paletteId, id } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className='color-box' style={{background: background}}>
          <div className={`copy-overlay ${copied && 'show'}`} style={{background: background}}></div>
          <div className={`copy-message ${copied && 'show'}`}>
            <h1>COPIED</h1>
            <p>{background}</p>
          </div>
          <div className='copy-container' >
            <div className='box-content'>
              <span>{name}</span>
            </div>
            <button className='copy-button'>COPY</button>
          </div>
          <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation}>
            <span className='see-more'>MORE</span>
          </Link>
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox
