import { Button } from '@material-ui/core';
import { useState } from 'react';
import Header from '../../Common/Header';
import CustomStepper from '../../Common/CustomStepper';
import AboutTemplate from './AboutTemplate';
import ChooseTemplate from './ChooseTemplate';
import CustomSize from './CustomSize';
import CustomLink from '../../Common/CustomLink';
import Step1 from './Step1';
import { useParams } from 'react-router-dom';

const stepContent = (steps: { step: number; handleNext: () => void }, action: string) => {
  const { step, handleNext } = steps;

  switch (step) {
    case 1:
      return <Step1 action={action} />;
    case 2:
      return <AboutTemplate />;
    case 3:
      return <ChooseTemplate handleNext={handleNext} />;
    case 4:
      return <CustomSize />;
  }
};

const Create = () => {
  const [step, setStep] = useState<number>(1);
  const handlePrev = () => setStep((step) => step - 1);
  const handleNext = () => setStep((step) => step + 1);
  const { action } = useParams<{ action: string }>();

  return (
    <div>
      <Header elevation={0} />
      <CustomStepper active={step} stepNumber={4} />
      <div className="container">
        <div>{stepContent({ step, handleNext }, action)}</div>
        <div className="mx-auto text-center py-3">
          {step === 1 ? (
            <CustomLink href="/template-destination" button buttonProps={{ variant: 'outlined', color: 'secondary', classes: { root: 'mr-3' } }}>
              Back
            </CustomLink>
          ) : (
            <Button variant="outlined" color="secondary" classes={{ root: 'mr-3' }} onClick={handlePrev}>
              Back
            </Button>
          )}
          {step !== 3 && step !== 4 ? (
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
