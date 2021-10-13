import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  panel: {
    maxWidth: 400,
    flex: '0 0 400px',
    height: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    '&>div': {
      padding: theme.spacing(2),
    },
  },
}));
