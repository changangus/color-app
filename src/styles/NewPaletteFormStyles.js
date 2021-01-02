import { makeStyles } from '@material-ui/core/styles';
import sizes from './MediaQueries';

const drawerWidth = 400;
const mediaQuerieDrawer = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [sizes.down('md')]: {
      width: mediaQuerieDrawer,
    }
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
    [sizes.down('md')]: {
      width: mediaQuerieDrawer,
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    width: '100%'
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: '0',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    [sizes.down('md')]: {
      marginLeft: -mediaQuerieDrawer,
    }
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',

  }
}));

export default useStyles;