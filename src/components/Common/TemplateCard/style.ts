import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  templateCard: ({ iconProps }: any) => ({
    width: 160,
    height: 160,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    color: iconProps ? (iconProps.color ? iconProps.color : iconProps.htmlColor) : theme.palette.primary.main,
    backgroundColor: '#F9F9F9 ',
    border: '1px solid transparent',
    borderRadius: 16,
    transition: 'all ease 0.2s',
    '& svg': {
      fontSize: 45,
      marginBottom: theme.spacing(1),
    },
    '&:hover, &:focus': {
      color: iconProps ? (iconProps.color ? iconProps.color : iconProps.htmlColor) : theme.palette.primary.main,
      borderColor: iconProps ? (iconProps.color ? iconProps.color : iconProps.htmlColor) : theme.palette.primary.main,
      boxShadow: '0 0 26px #14141410',
    },
  }),
}));
