import { InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { FC } from 'react';

const CustomSearchInput: FC<TextFieldProps> = (props) => {
  return (
    <TextField
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search color="primary" />
          </InputAdornment>
        ),
      }}
      type="search"
      {...props}
    />
  );
};

export default CustomSearchInput;
