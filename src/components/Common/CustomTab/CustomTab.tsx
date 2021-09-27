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
    width: 150,
    flex: '0 0 100px',
    color: '#6B6E70',
    backgroundColor: '#EFEFEF',
    '&$selected': {
      color: theme.palette.primary.main,
      backgroundColor: '#fff',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
  },
  wrapper: {
    textTransform: 'initial',
  },
  selected: {},
}))(({ index, ...rest }: CustomTabProps) => <Tab disableRipple {...a11yProps(index)} {...rest} />);

export default CustomTab;
