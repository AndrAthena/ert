import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  generate: {
    height: '100vh',
    backgroundColor: '#EFEFEF',
    overflow: 'hidden',
  },
  content: {
    height: 'calc(100vh - 64px)',
    overflowY: 'auto',
  },
  flexContent: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    padding: theme.spacing(2),
    alignContent: 'flex-start',
    '& > div': {
      flex: '0 0 calc(25% - 1.25rem)',
      marginBottom: theme.spacing(3),
    },
    '& > div:not(:nth-of-type(4n))': {
      marginRight: theme.spacing(3),
    },
  },
}));
