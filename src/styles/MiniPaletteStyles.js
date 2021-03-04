export default {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: '1'
    },
  },
  colors: {
    backgroundColor: 'white',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  miniColors: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-4px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: 'red',
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '0',
    top: '0',
    padding: '10px',
    zIndex: '1',
    opacity: '0',
    borderRadius: '4px'
  }
}