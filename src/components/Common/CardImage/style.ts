import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  cardImage: {
    minWidth: 100,
    height: 100,
    borderRadius: 8,
    '& button': {
      height: '100%',
    },
  },
}));
