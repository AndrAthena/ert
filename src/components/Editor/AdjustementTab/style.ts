import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  adjustement: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '& > p:first-of-type': {
      flex: '0 0 100px',
    },
  },
  slider: {
    flexGrow: 1,
    margin: theme.spacing(0, 1),
  },
}));
