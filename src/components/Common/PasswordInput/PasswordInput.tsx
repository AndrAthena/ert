import { IconButton, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { FC, useState } from 'react';

const PasswordInput: FC<TextFieldProps> = (props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisible = () => setVisible((prev) => !prev);

  return (
    <TextField
      type={visible ? 'text' : 'password'}
      label="Password"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleVisible} size="small">
              {visible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      required
      fullWidth
      {...props}
    />
  );
};

export default PasswordInput;
