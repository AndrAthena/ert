import { makeStyles } from '@material-ui/core';
import top from '../../assets/images/spash-top-bg.svg';
import btm from '../../assets/images/spash-btm-bg.svg';

export default makeStyles((theme) => ({
  splash: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundImage: `url(${top}), url(${btm})`,
    backgroundPosition: 'top left, bottom right',
    backgroundSize: '50%, 50%',
    backgroundRepeat: 'no-repeat',
    '& h1': {
      fontWeight: 500,
    },
    '& span': {
      fontWeight: 600,
    },
    '& svg': {
      fontSize: 120,
      marginBottom: '1rem',
    },
    '@media(max-width: 359px)': {
      padding: theme.spacing(2),
    },
  },
}));
