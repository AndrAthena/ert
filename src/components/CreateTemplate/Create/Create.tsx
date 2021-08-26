import { Button } from '@material-ui/core';
import { useState } from 'react';
import Header from '../../Common/Header';
import CustomStepper from '../../Common/CustomStepper';
import Step1 from './Step1';

const stepContent = (step: number) => {
  switch (step) {
    case 1:
      return <Step1 />;
  }
};

const Create = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const handlePrev = () => setActiveStep((activeStep) => activeStep - 1);
  const handleNext = () => setActiveStep((activeStep) => activeStep + 1);

  return (
    <div>
      <Header elevation={0} />
      <CustomStepper active={activeStep} stepNumber={3} />
      <div className="container">
        <div className="row">{stepContent(activeStep)}</div>
        <div className="mx-auto text-center">
          {activeStep !== 1 && (
            <Button variant="outlined" color="secondary" classes={{ root: 'mr-2' }} onClick={handlePrev}>
              Back
            </Button>
          )}
          {activeStep !== 3 && (
            <Button variant="contained" color="secondary" onClick={handleNext}>
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Create;
