import React from 'react'

export default function PaletteFooter(props) {

  const { paletteName, emoji } = props;
  
  return (
    <div>
        <footer className='palette-footer'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </footer>
    </div>
  )
}
