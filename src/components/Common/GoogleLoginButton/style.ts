import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  btnGoogle: {
    textTransform: 'initial',
    fontSize: '0.875rem',
    color: theme.palette.background.paper,
    backgroundColor: '#d93025',
    '&:hover': {
      backgroundColor: '#CE311B',
    },
  },
}));
