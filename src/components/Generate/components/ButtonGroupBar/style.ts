import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  buttonGroupBar: {
    justifyContent: 'flex-end',
    '& > button:not(:last-of-type)': {
      marginRight: theme.spacing(1),
    },
  },
}));
