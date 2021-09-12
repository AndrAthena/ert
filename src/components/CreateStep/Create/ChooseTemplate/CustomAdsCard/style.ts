import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  card: ({ width }: any) => ({
    width,
    marginBottom: theme.spacing(1.5),
    textAlign: 'center',
    '& svg': {
      fontSize: '2rem',
    },
  }),
  border: ({ height }: any) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height,
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(1.5),
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='rgb(24,119,242)' stroke-width='1' stroke-dasharray='10' stroke-dashoffset='10' stroke-linecap='round'/%3e%3c/svg%3e")`,
    borderRadius: 5,
  }),
  text: {
    height: 40,
    padding: theme.spacing(0, 1.5),
  },
}));
