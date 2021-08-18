import { Box, Typography } from '@material-ui/core';
import { FC, ReactNode } from 'react';
import Logo from '../../Icons/Logo';
import stl from './style';

interface FormContainerprops {
  illustration: string;
  alt: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}

const FormContainer: FC<FormContainerprops> = ({ title, description, children, className, illustration, alt, reverse }) => {
  const cls = stl();

  return (
    <div className={`${cls.auth} container h-100`}>
      <div className={`row h-100 ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="col-lg-6 d-lg-flex d-none">
          <div className={`${cls.imgContainer} w-100 p-lg-5`}>
            <img src={illustration} alt={alt} role="presentation" />
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column">
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
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
