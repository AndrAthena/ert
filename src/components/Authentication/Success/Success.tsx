import { Button } from '@material-ui/core';
import FormContainer from '../FormContainer';
import Illustration from '../../../assets/images/success.svg';

const Success = () => {
  return (
    <FormContainer title="Congratulation !" description="Your password has been successfully created." illustration={Illustration} alt="Success">
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign in
      </Button>
    </FormContainer>
  );
};

export default Success;
