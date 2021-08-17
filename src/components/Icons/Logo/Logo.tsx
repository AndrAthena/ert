import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { FC } from 'react';

const Logo: FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 122.349 108.936" {...props}>
    <g>
      <g>
        <path d="M122.349,108.936h-27.3l-21.02-37.55,12.41-22.17Z" fill="#84b123" />
        <path d="M87.654,108.932,70.334,78l-17.32,30.935Z" fill="#587720" />
      </g>
      <path d="M64.933,0,0,108.932H45.441L87.654,37.854Z" fill="#84b123" />
    </g>
  </SvgIcon>
);

export default Logo;
