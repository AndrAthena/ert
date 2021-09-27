import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  txtFormat: {
    display: 'flex',
    flexGrow: 1,
    '& #font-picker': {
      boxShadow: 'none',
      '& > button': {
        height: '100%',
        backgroundColor: '#fff',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: 6,
      },
    },
  },
  slider: {
    width: 150,
    margin: theme.spacing(0, 1),
  },
}));
