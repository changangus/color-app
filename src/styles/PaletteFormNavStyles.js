import { makeStyles } from '@material-ui/core/styles';
import sizes from './MediaQueries';

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '1rem',
    [sizes.down('sm')]: {
      width: '20%',
      marginRight: '0'
    }
  },
  button: {
    [sizes.down('sm')]:{
      margin: '0',
      fontSize: '9px',
    }
  },
  buttonLink: {
    textDecoration: 'none',
    marginRight: '1rem',
    [sizes.down('sm')]:{
      margin: '0'
    }
  },
  emojiForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  hide: {
    display: 'none',
  },
  header: {
    [sizes.down('sm')]:{
      fontSize: '14px',
    }
  },
  icon: {
    [sizes.down('sm')]:{
      padding: '0 !important',
    }
  }
}));

export default useStyles;