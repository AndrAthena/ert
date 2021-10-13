import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  editorContainer: {
    height: 'calc(100% - 64px)',
    display: 'flex',
    padding: theme.spacing(1.5),
    backgroundColor: '#EFEFEF',
  },
  sidebarMenu: {
    flex: '0 0 100px',
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
  editor: {
    flex: 1,
    maxWidth: 'calc(100% - 500px)',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  editorCanvas: {
    flex: 1,
    maxWidth: 'calc(100% - 80px)',
  },
}));
