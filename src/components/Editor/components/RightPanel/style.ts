import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  rightPanel: {
    marginLeft: 'auto',
    flex: '0 0 60px',
    position: 'relative',
  },
  panel: {
    width: 400,
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    right: 60,
  },
}));
