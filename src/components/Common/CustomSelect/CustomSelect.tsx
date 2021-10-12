import React, { FC } from 'react';
import { MenuItem, TextField, TextFieldProps } from '@material-ui/core';

type Items = {
  label: any;
  value: any;
  key?: string;
};

interface CustomSelectProps {
  items?: Items[];
}

const CustomSelect: FC<CustomSelectProps & Partial<TextFieldProps>> = ({
  items,
  onChange,
  ...rest
}) => {
  const handleChange = (value: any) => onChange && onChange(value);

  return (
    <TextField
      variant="outlined"
      {...rest}
      onChange={(e: React.ChangeEvent<any>) => handleChange(e.target.value)}
      select
    >
      {items ? (
        items.map(({ label, value, key }: Items, index: number) => (
          <MenuItem value={value} key={`custom-select-${index}`} dense>
            {key ? label[key] : label}
          </MenuItem>
        ))
      ) : (
        <MenuItem>Aucun</MenuItem>
      )}
    </TextField>
  );
};

export default CustomSelect;
