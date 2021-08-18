import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  signup: {
    padding: theme.spacing(2),
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '80%',
    margin: 'auto',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 40,
  },
}));
