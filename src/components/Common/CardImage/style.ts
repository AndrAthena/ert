import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  cardImage: {
    minWidth: 150,
    height: 150,
    borderRadius: 8,
    '& button': {
      height: '100%',
    },
  },
}));
