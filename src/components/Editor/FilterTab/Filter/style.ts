import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > div': {
      flex: '0 0 calc(33.33% - 0.5rem)',
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    '& > div:nth-of-type(3n)': {
      flex: '0 0 calc(33.33% - 1rem)',
      marginRight: 0,
    },
  },
}));
