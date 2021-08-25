import { AppBar, Step, StepContent, Stepper, TextField, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useState } from 'react';
import CustomLink from '../../Common/CustomLink';

const Create = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  return (
    <div className="container">
      <AppBar color="transparent" elevation={1}>
        <Toolbar classes={{ root: 'container' }}>
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
              Step {activeStep}/3
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Stepper activeStep={activeStep} orientation="horizontal" style={{ paddingTop: 64 }}>
        <Step active={activeStep === 1} classes={{ root: 'mx-auto' }}>
          <StepContent classes={{ root: 'pt-3' }}>
            <Typography variant="subtitle1" color="textPrimary">
              Configure the structure of your template folder
            </Typography>
            <Typography color="textSecondary">Choose the number of sub-folder and where to put your ads </Typography>
            <form className="mt-4">
              <TextField
                type="number"
                variant="outlined"
                label="Number of sub-folder"
                inputProps={{
                  min: 0,
                }}
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Where to put your ads ?"
                select
                SelectProps={{
                  native: true,
                }}
                fullWidth
              >
                <option>Sub-Folder 1</option>
                <option>Sub-Folder 2</option>
              </TextField>
            </form>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
};

export default Create;
