import { Button } from '@material-ui/core';
import FormContainer from '../FormContainer';
import Illustration from '../../../assets/images/error.svg';

const Error = () => {
  return (
    <FormContainer
      title="An error has occurred !"
      description="There was an error resetting your password. Please try again later!"
      illustration={Illustration}
      alt="Success"
    >
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign in
      </Button>
    </FormContainer>
  );
};

export default Error;
