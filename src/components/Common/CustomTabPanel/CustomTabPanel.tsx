import { FC, ReactNode } from 'react';

interface CustomTabPanelProps {
  value: any;
  name: any;
  children: ReactNode;
}

const CustomTabPanel: FC<CustomTabPanelProps> = ({ children, name, value }) => {
  return value === name ? <>{children}</> : null;
};

export default CustomTabPanel;
