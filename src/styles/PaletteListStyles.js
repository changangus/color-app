export default {
  root: {
    backgroundColor: 'white smoke',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    '& a': {
      textDecoration: 'none',
      color: 'white',
      fontSize: '18px',
      padding: '5px',
      marginTop: '5px',
      borderRadius: '5px',
      backgroundColor: '#3498db',
      opacity: '0.85',
      transition: 'all 0.2s ease'
    },
    '&:hover a': {
      opacity: '1',
      cursor: 'pointer'
    },
    '&:active a': {
      transform: 'scale(0.98)'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
}