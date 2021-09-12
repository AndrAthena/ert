import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  chooseFolder: {
    width: '60%',
    maxWidth: 768,
  },
  card: {
    '& > button': {
      border: '1px solid #FBB244',
    },
    '& p': {
      color: 'initial',
    },
  },
}));
