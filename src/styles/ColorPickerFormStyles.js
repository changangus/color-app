import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '90%'
  },
  picker: {
    width: '100% !important',
    marginTop: '2rem'
  },
  addColorBtn: {
    width: '100%',
    padding: '1rem',
    fontSize: '2rem',
  },
  colorNameInput: {
    width: '100%',
    marginTop: '1rem',
    height: '70px'
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1rem'
  },
  button: {
    width: '47%',
  }
});

export default useStyles;