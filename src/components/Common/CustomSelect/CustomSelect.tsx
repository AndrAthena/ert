import { FC, ReactNode } from 'react';
import { MenuItem, TextField, TextFieldProps } from '@material-ui/core';

type Items = {
  label: ReactNode;
  value: any;
};

interface CustomSelectProps {
  items?: Items[];
}

const CustomSelect: FC<CustomSelectProps & Partial<TextFieldProps>> = ({ items, ...rest }) => {
  return (
    <TextField variant="outlined" {...rest} select>
      {items ? (
        items.map(({ label, value }: Items, index: number) => (
          <MenuItem value={value} key={`custom-select-${index}`}>
            {label}
          </MenuItem>
        ))
      ) : (
        <MenuItem>Aucun</MenuItem>
      )}
    </TextField>
  );
};

export default CustomSelect;
