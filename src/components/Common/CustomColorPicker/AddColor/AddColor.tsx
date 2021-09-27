import { Button, DialogActions, Popover, PopoverProps } from '@material-ui/core';
import React, { FC } from 'react';
import { ChromePicker, Color, ColorChangeHandler } from 'react-color';

interface AddColorProps {
  popoverProps: PopoverProps;
  color: Color;
  onChange: ColorChangeHandler;
  onAdd: () => void;
  onCancel: () => void;
}

const AddColor: FC<AddColorProps> = ({ popoverProps, onAdd, onCancel, ...chromeProps }) => {
  return (
    <Popover
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      transformOrigin={{
        horizontal: 'left',
        vertical: 'top',
      }}
      {...popoverProps}
    >
      <ChromePicker {...chromeProps} styles={{ default: { picker: { boxShadow: 'none' } } }} />
      <DialogActions>
        <Button variant="contained" size="small" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" size="small" onClick={onAdd}>
          Add
        </Button>
      </DialogActions>
    </Popover>
  );
};

export default AddColor;
