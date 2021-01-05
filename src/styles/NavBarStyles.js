import sizes from './MediaQueries';

export default {
  navbar: {
    display: 'flex',
    height: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  logo: {
    backgroundColor: 'rgb(218, 218, 218)',
    width: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    marginRight: '2%',
    '& a': {
      textDecoration: 'none',
      color: 'black',
      opacity: '0.65',
      marginTop: '5px',
      transition: 'all 0.25s ease'
    },
    '&:hover a': {
      opacity: '1'
    },
    [sizes.down('xs')]: {
      display: 'none'
    }
  },
  sliderText: {
    fontSize: '16px',
    fontStyle: 'italic'
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    [sizes.down('md')]: {
      width: '150px'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  }
}