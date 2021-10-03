import React, { FC, ChangeEvent, ElementType } from 'react';
import { TabProps, Tabs, TabsProps, Typography } from '@material-ui/core';
import CustomTab from '../CustomTab';
import styles from './style';

export type TabsType = TabProps & {
  name: any;
  content: ElementType;
  props?: Record<any, any>;
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
      {tabs.map(({ name, content: Panel, props }, index: number) => {
        return tab === name ? (
          <div className={cls.panel} key={`tab-panel-${index}`}>
            <Panel {...props} />
          </div>
        ) : null;
      })}
    </>
  );
};

export default CustomTabs;
