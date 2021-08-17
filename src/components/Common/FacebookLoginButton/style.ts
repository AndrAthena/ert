import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  btnFacebook: {
    color: theme.palette.common.white,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    '&:hover': {
      backgroundColor: '#0052cc',
    },
  },
}));
