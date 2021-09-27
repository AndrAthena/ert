import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  editor: {
    height: 'calc(100% - 64px)',
    display: 'flex',
    padding: theme.spacing(1.5, 4),
    backgroundColor: '#EFEFEF',
  },
  sidebarMenu: {
    flex: '0 0 160px',
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  },
  sidePanel: {
    maxWidth: 400,
    flex: '0 0 400px',
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  editorContainer: {
    flex: 1,
    maxWidth: 'calc(100% - 160px)',
  },
}));
