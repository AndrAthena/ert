import { Button, Checkbox, Divider, FormControlLabel, TextField, Typography } from '@material-ui/core';
import { FC } from 'react';
import SEO from '../../Common/SEO';
import FormContainer from '../FormContainer';
import PasswordInput from '../../Common/PasswordInput';
import GoogleLoginButton from '../../Common/GoogleLoginButton';
import { GOOGLE_CLIENT_ID } from '../../../constants/config';
import FacebookLoginButton from '../../Common/FacebookLoginButton/FacebookLoginButton';
import Illustration from '../../../assets/images/signup.svg';
import CustomLink from '../../Common/CustomLink';

const Signup: FC = () => {
  return (
    <>
      <SEO title="Sign Up" />
      <FormContainer
        title="Sign up to RTE"
        description="Please login to your account"
        className="m-auto"
        illustration={Illustration}
        alt="Signup illustration"
      >
        <form>
          <div className="d-flex align-items-start mb-5">
            <GoogleLoginButton clientId={GOOGLE_CLIENT_ID} buttonText="Sign up with Google" className="mr-3" />
            <FacebookLoginButton appId="1088597931155576" callback={() => {}} textButton="Sign up with Facebook" />
          </div>
          <TextField label="Name" variant="outlined" required fullWidth />
          <TextField type="email" label="Email" variant="outlined" required fullWidth />
          <PasswordInput label="Password" />
          <PasswordInput label="Confirm Password" />
          <FormControlLabel
            control={<Checkbox color="primary" className="p-1 pr-2" size="small" />}
            label="I've read and agree with Terms of Service and our Privacy Policy"
            className="align-items-start"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
          <Divider variant="fullWidth" className="my-4" />
          <Typography>
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
export default Signup;
