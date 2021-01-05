import { makeStyles } from '@material-ui/core/styles';
import background from './bg.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f6f6f6',
    backgroundImage: `url(${background})`,
  }
}));

export default useStyles;