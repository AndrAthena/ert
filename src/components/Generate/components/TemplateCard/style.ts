import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  title: {
    position: 'absolute',
    width: '80%',
    left: '10%',
    right: '10%',
    bottom: 80,
    padding: theme.spacing(1),
    backgroundColor: 'rgb(255 255 255 / 80%)',
  },
}));
