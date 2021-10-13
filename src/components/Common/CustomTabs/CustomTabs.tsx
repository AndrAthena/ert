import React, { FC, ChangeEvent, ReactNode } from 'react';
import { TabProps, Tabs, TabsProps, Typography } from '@material-ui/core';
import CustomTab from '../CustomTab';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './style';

export type TabsType = TabProps & {
  name: any;
  content: ReactNode;
};

interface CustomTabsProps extends TabsProps {
  tabs: TabsType[];
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const CustomTabs: FC<CustomTabsProps> = ({ tabs, tab, setTab, ...rest }) => {
  const cls = styles();
  const handleChange = (_: ChangeEvent<{}>, value: string) => setTab(value);

  return (
    <>
      <Tabs
        orientation="vertical"
        variant={rest?.variant ? rest?.variant : 'fullWidth'}
        value={tab}
        onChange={handleChange}
        {...rest}
      >
        {tabs.map(({ icon, label, value: valueTab, style }, index: number) => (
          <CustomTab
            icon={icon}
            label={<Typography variant="body2">{label}</Typography>}
            value={valueTab}
            style={style}
            index={index}
            key={`editor-${index}`}
          />
        ))}
      </Tabs>
      {tabs.map(({ name, content }, index: number) => {
        return tab === name ? (
          <Scrollbars autoHide thumbMinSize={30} className={cls.panel} key={`tab-panel-${index}`}>
            {content}
          </Scrollbars>
        ) : null;
      })}
    </>
  );
};

export default CustomTabs;
