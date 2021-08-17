import { Box, Typography } from '@material-ui/core';
import { FC, ReactNode } from 'react';
import Logo from '../../Icons/Logo';
import stl from './style';

interface FormContainerprops {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

const FormContainer: FC<FormContainerprops> = ({ title, description, children, className }) => {
  const cls = stl();

  return (
    <div className={`${cls.formContainer} ${className}`}>
      <Box mb={2} textAlign="center">
        <Logo className={cls.logo} />
        <Typography variant="h3" color="textPrimary" component="h1" align="center">
          {title}
        </Typography>
        <Typography align="center" color="textPrimary">
          {description}
        </Typography>
      </Box>
      {children}
    </div>
  );
};

export default FormContainer;
