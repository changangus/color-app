import sizes from './MediaQueries';
import background from './bg.svg';

export default {
  root: {
    backgroundColor: '#f6f6f6',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'repeat',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('lg')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '60%'
    }
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
    gridGap: '5%',
    [sizes.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '2%'
    }
  },
  header: {
    fontSize: '2rem'
  }
}