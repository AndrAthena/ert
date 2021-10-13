import { useState } from 'react';
import { Box, Tabs, Tab, withStyles } from '@material-ui/core';
import { Storage, Settings } from '@material-ui/icons';
import CustomTabPanel from '../../../Common/CustomTabPanel';
import styles from './style';
import Data from './Data';
import Format from './Format';

const CustomTabs = withStyles({
  root: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderLeft: '2px solid #d8d8d8',
  },
  indicator: {
    left: 0,
    right: 'auto',
  },
})(Tabs);

const CustomTab = withStyles((theme) => ({
  root: {
    '@media(min-width: 600px)': {
      minWidth: 50,
      width: 50,
      height: 50,
    },
    '&$selected': {
      color: theme.palette.primary.main,
    },
  },
  textColorInherit: {
    color: '#7A7E81',
  },
  selected: {},
}))(Tab);

const RightPanel = () => {
  const cls = styles();
  const [value, setValue] = useState('data');
  const handleChangeValue = (_: any, value: string) => setValue(value);

  return (
    <Box className={cls.rightPanel}>
      <CustomTabs
        value={value}
        onChange={handleChangeValue}
        orientation="vertical"
        indicatorColor="primary"
      >
        <CustomTab value="data" icon={<Storage />} />
        <CustomTab value="format" icon={<Settings />} />
      </CustomTabs>
      <CustomTabPanel value={value} name="data" className={cls.panel}>
        <Data />
      </CustomTabPanel>
      <CustomTabPanel value={value} name="format" className={cls.panel}>
        <Format />
      </CustomTabPanel>
    </Box>
  );
};

export default RightPanel;
