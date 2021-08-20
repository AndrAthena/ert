import { FC } from 'react';
import SEO from '../../Common/SEO';
import Illustration from '../../../assets/images/forgot-password.svg';
import FormContainer from '../FormContainer';
import { Button, Divider, TextField, Typography } from '@material-ui/core';
import CustomLink from '../../Common/CustomLink';

const ForgotPassword: FC = () => {
  return (
    <>
      <SEO title="Forgot your password" />
      <FormContainer
        title="Password Recovery"
        description="Enter your email address in the field below"
        className="m-auto"
        illustration={Illustration}
        alt="Forgot Password"
      >
        <form>
          <TextField type="email" label="Email" variant="outlined" required fullWidth />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Reset Password
          </Button>

          <Divider variant="fullWidth" className="mt-5 mb-4" />

          <Typography variant="body2">
            Already have an account ?{' '}
            <CustomLink href="/login" underline="hover">
              Sign in
            </CustomLink>
          </Typography>
        </form>
      </FormContainer>
    </>
  );
};

export default ForgotPassword;
