import { FC, useState } from 'react';
import stl from './style';
import { Button, Dialog, Fade, Typography } from '@material-ui/core';
import Logo from '../Icons/Logo';

const Splash: FC = () => {
  const cls = stl();
  let visited: string | null = localStorage.getItem('visited');
  const [open, setOpen] = useState<boolean>(Boolean(visited));
  const handleClose = () => {
    setOpen((prev) => !prev);
    localStorage.setItem('visited', 'true');
  };
  return (
    <Dialog
      open={!open}
      onClose={handleClose}
      TransitionComponent={Fade}
      transitionDuration={{
        exit: 500,
      }}
      fullScreen
      fullWidth
    >
      <div className={cls.splash}>
        <Logo />
        <Typography variant="h1" color="textPrimary" align="center" gutterBottom>
          Welcome to <span>RTE</span>
        </Typography>
        <Typography color="textPrimary" align="center" gutterBottom>
          Create your ads fastly and efficiently.
        </Typography>
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Get Started
        </Button>
      </div>
    </Dialog>
  );
};

export default Splash;
