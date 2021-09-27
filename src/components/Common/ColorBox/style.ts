import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  color: ({ colorBox }: any) => ({
    width: 40,
    height: 40,
    display: 'inline-block',
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
    border: '1px solid #E2E2E2',
    borderRadius: 4,
    backgroundColor: colorBox,
    '&:hover': {
      backgroundColor: colorBox,
    },
  }),
}));
