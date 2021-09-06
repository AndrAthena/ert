import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  header: {
    zIndex: 100,
  },
  menu: {
    '& a': {
      margin: theme.spacing(0, 2),
      color: theme.palette.text.primary,
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeInOut,
        duration: 0.2,
      }),
      '&:hover': {
        fontWeight: 500,
      },
    },
  },
}));
