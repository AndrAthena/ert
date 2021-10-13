import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Radio,
  RadioProps,
  SwitchProps,
  Typography,
} from '@material-ui/core';
import { FC, ReactNode } from 'react';
import CustomSwitch from '../CustomSwitch';

type ControlType = RadioProps | CheckboxProps | SwitchProps;

interface CustomRadioProps {
  type: 'radio' | 'checkbox' | 'switch';
  label: ReactNode;
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
}

const customControl = (
  control: 'radio' | 'checkbox' | 'switch',
  { color, size, ...props }: ControlType,
) => {
  switch (control) {
    case 'checkbox':
      return <Checkbox color={color || 'primary'} size={size || 'small'} {...props} />;
    case 'radio':
      return <Radio color={color || 'primary'} size={size || 'small'} {...props} />;
    case 'switch':
      return <CustomSwitch color={color || 'primary'} size={'medium'} {...props} />;
  }
};

const CustomRadio: FC<CustomRadioProps & ControlType> = ({
  type,
  label,
  labelPlacement = 'end',
  ...rest
}) => {
  const innerLabel =
    typeof label === 'string' ? label : <Typography variant="body2">{label}</Typography>;

  return (
    <FormControlLabel
      control={customControl(type, rest)}
      label={innerLabel}
      labelPlacement={labelPlacement}
    />
  );
};

export default CustomRadio;
