import { AppBar, LinearProgress, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { FC } from 'react';
import CustomLink from '../CustomLink';
import styles from './style';

interface CustomStepperprops {
  title: string;
  subtitle: string;
  active?: number;
  stepNumber?: number;
}

const CustomStepper: FC<CustomStepperprops> = ({ active, stepNumber, title, subtitle }) => {
  const cls = styles();
  const progress: number = stepNumber && active ? (active / stepNumber) * 100 : 0;

  return (
    <AppBar
      color="inherit"
      elevation={0}
      position="sticky"
      component="div"
      classes={{ root: 'mb-5' }}
    >
      <Toolbar classes={{ root: 'container' }} disableGutters>
        <div className="d-flex align-items-center">
          <CustomLink style={{ color: 'inherit' }} href="/create-template">
            <ArrowBack />
          </CustomLink>
          <div className="ml-2">
            <Typography color="textPrimary">
              <strong>{title}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {subtitle}
            </Typography>
          </div>
        </div>
        <div className={cls.stepText}>
          <Typography color="textPrimary" align="center">
            {stepNumber && active && (
              <>
                Step {active}/{stepNumber}
              </>
            )}
          </Typography>
        </div>
      </Toolbar>
      <LinearProgress
        variant="determinate"
        value={progress}
        style={{ width: '100%', position: 'absolute', bottom: 0 }}
      />
    </AppBar>
  );
};

export default CustomStepper;
