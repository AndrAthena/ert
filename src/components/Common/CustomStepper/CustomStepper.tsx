import { AppBar, LinearProgress, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { FC } from 'react';
import CustomLink from '../CustomLink';

interface CustomStepperprops {
  active: number;
  stepNumber: number;
}

const CustomStepper: FC<CustomStepperprops> = ({ active, stepNumber }) => {
  const progress: number = (active / stepNumber) * 100;

  return (
    <AppBar color="inherit" elevation={0} position="relative" component="div" classes={{ root: 'mb-5' }}>
      <Toolbar classes={{ root: 'container' }} disableGutters>
        <div className="d-flex align-items-center">
          <CustomLink style={{ color: 'inherit' }} href="/create-template">
            <ArrowBack />
          </CustomLink>
          <div className="ml-2">
            <Typography color="textPrimary">
              <strong>New template</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Create a new template quickly
            </Typography>
          </div>
        </div>
        <div className="flex-grow-1">
          <Typography color="textPrimary" align="center">
            Step {active}/3
          </Typography>
        </div>
      </Toolbar>
      <LinearProgress variant="determinate" value={progress} style={{ width: '100%', position: 'absolute', bottom: 0 }} />
    </AppBar>
  );
};

export default CustomStepper;
