import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  templateCard: {
    width: 160,
    height: 160,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    color: '#628E25',
    backgroundColor: '#F9F9F9 ',
    border: '1px solid transparent',
    borderRadius: 16,
    transition: 'all ease 0.2s',
    '& svg': {
      fontSize: 45,
      marginBottom: theme.spacing(1),
    },
    '&:hover, &:focus': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      boxShadow: '0 0 26px #14141410',
    },
  },
}));
