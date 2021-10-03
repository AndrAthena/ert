import { FC } from 'react';

export interface CustomTabPanelProps {
  value: any;
  name: any;
  children: any;
  className?: string;
}

const CustomTabPanel: FC<CustomTabPanelProps> = ({ children, name, value, className }) => {
  return value === name ? <div className={className}>{children}</div> : null;
};

export default CustomTabPanel;
