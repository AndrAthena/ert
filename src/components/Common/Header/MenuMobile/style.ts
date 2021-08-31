import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  menu: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    background: '#fff',
  },
  navigation: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
    '& a': {
      padding: theme.spacing(1, 0),
      fontSize: '3rem',
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  },
}));
