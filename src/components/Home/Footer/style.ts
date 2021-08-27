import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 0),
    backgroundColor: theme.palette.secondary.main,
  },
  logo: {
    fontSize: '2.5rem',
  },
  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(-2),
    '& a': {
      display: 'block',
      marginBottom: theme.spacing(1, 2),
      padding: theme.spacing(2),
      color: theme.palette.common.white,
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeInOut,
        duration: 0.2,
      }),
      '&:hover': {
        fontWeight: 500,
      },
    },
  },
  copyright: {
    padding: theme.spacing(2, 0),
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
}));
