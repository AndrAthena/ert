import { FC } from 'react';
import stl from './style';
import { Button, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Logo from '../Icons/Logo';

const Splash: FC = () => {
  const cls = stl();

  return (
    <div className={cls.splash}>
      <Helmet>
        <title>Bienvenue sur ERT</title>
      </Helmet>
      <Logo />
      <Typography variant="h1" color="textPrimary" align="center" gutterBottom>
        Welcome to <span>RTE</span>
      </Typography>
      <Typography color="textPrimary" align="center" gutterBottom>
        Create your ads fastly and efficiently.
      </Typography>
      <Button variant="outlined" color="primary">
        Get Started
      </Button>
    </div>
  );
};

export default Splash;
