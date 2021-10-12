import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  divider: {
    position: 'absolute',
    top: theme.spacing(1),
    padding: theme.spacing(0, 1),
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
  },
}));
