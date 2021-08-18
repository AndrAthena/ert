import SEO from '../../Common/SEO';
import FormContainer from '../FormContainer';
import Illustration from '../../../assets/images/login.svg';
import { FC } from 'react';
import GoogleLoginButton from '../../Common/GoogleLoginButton';
import FacebookLoginButton from '../../Common/FacebookLoginButton';
import { GOOGLE_CLIENT_ID } from '../../../constants/config';
import { Button, Checkbox, Divider, FormControlLabel, TextField } from '@material-ui/core';
import PasswordInput from '../../Common/PasswordInput';
import CustomLink from '../../Common/CustomLink';

const Login: FC = () => {
  return (
    <>
      <SEO title="Login" />
      <FormContainer
        title="Welcome to RTE"
        description="Please login to your account"
        className="m-auto"
        illustration={Illustration}
        alt="Login illustration"
      >
        <form>
          <div className="d-flex align-items-start mb-5">
            <GoogleLoginButton clientId={GOOGLE_CLIENT_ID} buttonText="Login with Google" className="mr-3" />
            <FacebookLoginButton appId="1088597931155576" callback={() => {}} textButton="Login with Facebook" />
          </div>

          <TextField type="email" label="Email" variant="outlined" required fullWidth />
          <PasswordInput label="Password" />

          <div className="d-flex align-items-center">
            <FormControlLabel control={<Checkbox color="primary" className="pr-2" size="small" />} label="Remember me" />
            <CustomLink href="/forgot-password" className="ml-auto mb-2" underline="always">
              Forgot Password ?
            </CustomLink>
          </div>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>

          <Divider variant="fullWidth" className="mt-5 mb-4" />

          <CustomLink
            href="/signup"
            button
            buttonProps={{
              variant: 'outlined',
              fullWidth: true,
              color: 'primary',
            }}
          >
            Signup
          </CustomLink>
        </form>
      </FormContainer>
    </>
  );
};

export default Login;
