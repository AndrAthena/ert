import { Button } from '@material-ui/core';
import { useState } from 'react';
import Header from '../../Common/Header';
import CustomStepper from '../../Common/CustomStepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const stepContent = (step: number) => {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
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
        <div>{stepContent(activeStep)}</div>
        <div className="mx-auto text-center py-3">
          {activeStep !== 1 && (
            <Button variant="outlined" color="secondary" classes={{ root: 'mr-3' }} onClick={handlePrev}>
              Back
            </Button>
          )}
          {activeStep !== 3 ? (
            <Button variant="contained" color="secondary" onClick={handleNext}>
              Continue
            </Button>
          ) : (
            <Button variant="contained" color="secondary">
              Finish
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Create;
