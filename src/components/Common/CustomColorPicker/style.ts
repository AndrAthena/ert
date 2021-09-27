import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    '& hr': {
      margin: theme.spacing(1, 0),
    },
  },
  colorContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 300,
    marginBottom: theme.spacing(2),
  },
  addButton: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: '#ADCFE7',
    border: '2px solid #3286C2',
    borderRadius: 4,
  },
}));
