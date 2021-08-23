import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { FC } from 'react';

const TemplateLibrary: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 45 45.525">
    <path d="M0,0H12.2a0,0,0,0,1,0,0V31.2a0,0,0,0,1,0,0H2.372A2.372,2.372,0,0,1,0,28.826V0A0,0,0,0,1,0,0Z" transform="translate(0 14.327)" />
    <path
      d="M0,0H28.509a0,0,0,0,1,0,0V29.259A1.939,1.939,0,0,1,26.57,31.2H2.372A2.372,2.372,0,0,1,0,28.826V0A0,0,0,0,1,0,0Z"
      transform="translate(16.436 14.327)"
    />
    <path d="M1.177,0H43.823A1.177,1.177,0,0,1,45,1.177v8.955a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.177A1.177,1.177,0,0,1,1.177,0Z" />
  </SvgIcon>
);

export default TemplateLibrary;
