import { Switch, withStyles } from '@material-ui/core';

const CustomSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 40,
    padding: 12,
  },
  colorPrimary: {
    '&$checked': {
      color: '#fff',
    },
  },
  switchBase: {
    padding: 14,
    '&$checked': {
      transform: 'translateX(14.5px)',
    },
    '&$checked + $track': {
      opacity: 1,
    },
  },
  thumb: {
    width: 12,
    height: 12,
  },
  track: {
    width: 30,
    borderRadius: 14,
    opacity: 0.6,
  },
  checked: {},
}))(Switch);

export default CustomSwitch;
