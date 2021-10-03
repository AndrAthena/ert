import { Tab, TabProps, withStyles } from '@material-ui/core';

function a11yProps(index: any) {
  return {
    id: `editor-tab-${index}`,
    'aria-controls': `editor-tabpanel-${index}`,
  };
}

interface CustomTabProps extends TabProps {
  index: number;
}

const CustomTab = withStyles((theme) => ({
  root: {
    flex: '0 0 100px',
    color: '#6B6E70',
    backgroundColor: '#EFEFEF',
    '&$selected': {
      color: theme.palette.primary.main,
      backgroundColor: '#fff',
    },
    '@media(min-width:600px)': {
      minWidth: 100,
    },
  },
  wrapper: {
    textTransform: 'initial',
  },
  selected: {},
}))(({ index, ...rest }: CustomTabProps) => <Tab disableRipple {...a11yProps(index)} {...rest} />);

export default CustomTab;
