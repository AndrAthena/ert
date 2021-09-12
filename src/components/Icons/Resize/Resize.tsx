import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { FC } from 'react';

const Resize: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12,0l4.98,4.98L8.172,13.788,4.98,16.98,0,12V24H12L7.02,19.02l12-12L24,12V0Z" />
  </SvgIcon>
);

export default Resize;
