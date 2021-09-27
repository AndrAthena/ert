import { IconButton, IconButtonProps, Tooltip } from '@material-ui/core';
import { FC } from 'react';
import { Color } from 'react-color';
import styles from './style';

interface ColorBoxProps {
  colorBox: Color;
  onClick?: (event: any, color: Color) => void;
}

const ColorBox: FC<ColorBoxProps & Omit<IconButtonProps, 'onClick'>> = ({
  colorBox,
  onClick: selectColor,
  ...rest
}) => {
  const cls = styles({ colorBox });
  const handleClick = (event: any) => selectColor && selectColor(event, colorBox);

  return (
    <Tooltip title={colorBox} placement="top">
      <IconButton className={cls.color} onClick={handleClick} {...rest} />
    </Tooltip>
  );
};

export default ColorBox;
