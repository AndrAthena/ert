import { Divider, IconButton, IconButtonProps, Tooltip, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { FC, useState } from 'react';
import {
  ColorResult,
  ColorChangeHandler,
  CustomPicker,
  Color,
  InjectedColorProps,
} from 'react-color';
import ColorBox from '../ColorBox';
import CustomSearchInput from '../CustomSearchInput';
import AddColor from './AddColor';
import { defaultColor } from './defaultColor';
import styles from './style';

interface CustomColorPickerProps extends InjectedColorProps {
  colors?: Color[];
  onSelectColor: (event: any, color: Color) => void;
}

const AddButton = (props: IconButtonProps) => (
  <Tooltip title="Add">
    <IconButton className={styles().addButton} {...props}>
      <Add />
    </IconButton>
  </Tooltip>
);

const CustomColorPicker: FC<CustomColorPickerProps> = ({ colors, onSelectColor }) => {
  const cls = styles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [color, setColor] = useState<ColorResult>();
  const [documentColor, setDocumentColor] = useState<Color[]>([]);

  const handleChangeColor: ColorChangeHandler = (color) => {
    setColor(color);
  };

  const handleClose = () => setAnchorEl(null);

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleAddColor = (color: Color) => () => {
    setDocumentColor((prev) => [...prev, color]);
    handleClose();
  };

  return (
    <>
      <div className={cls.container}>
        <CustomSearchInput
          placeholder={`Search: "Blue" or "#00c4cc"`}
          style={{ marginBottom: '.75rem' }}
          fullWidth
        />

        <Typography gutterBottom>Document color</Typography>
        <div className={cls.colorContainer}>
          <AddButton onClick={handleAdd} />

          {(documentColor || []).map((color: Color, index: number) => {
            return (
              <ColorBox colorBox={color} key={`document-color-${index}`} onClick={onSelectColor} />
            );
          })}
        </div>
        <Divider variant="fullWidth" />

        <Typography gutterBottom>Default color</Typography>
        <div className={cls.colorContainer}>
          {(colors || defaultColor).map((color: Color, index: number) => {
            return <ColorBox colorBox={color} key={`color-${index}`} onClick={onSelectColor} />;
          })}
        </div>
        <Divider variant="fullWidth" />

        <Typography gutterBottom>Background color</Typography>
        <div className={cls.colorContainer}>
          <AddButton />
        </div>
      </div>

      <AddColor
        color={color ? color.hex : ''}
        onChange={handleChangeColor}
        popoverProps={{
          open: Boolean(anchorEl),
          anchorEl,
          onClose: handleClose,
        }}
        onCancel={handleClose}
        onAdd={handleAddColor(color ? color.hex : '')}
      />
    </>
  );
};

export default CustomPicker(CustomColorPicker);
