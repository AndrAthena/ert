import SEO from '../../Common/SEO';
import FormContainer from '../FormContainer';
import Illustration from '../../../assets/images/login.svg';
import stl from './style';
import { FC } from 'react';
import GoogleLoginButton from '../../Common/GoogleLoginButton';
import FacebookLoginButton from '../../Common/FacebookLoginButton';
import { GOOGLE_CLIENT_ID } from '../../../constants/config';
import { Button, Checkbox, Divider, FormControlLabel, TextField } from '@material-ui/core';
import PasswordInput from '../../Common/PasswordInput';
import CustomLink from '../../Common/CustomLink';

const Login: FC = () => {
  const cls = stl();
  return (
    <>
      <SEO title="Login" />
      <div className={`${cls.login} container h-100`}>
        <div className="row flex-row-reverse h-100">
          <div className="col-lg-6 d-lg-flex d-none">
            <div className={`${cls.imgContainer} w-100 p-lg-5`}>
              <img src={Illustration} alt="Login illustration" role="presentation" />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column">
            <FormContainer title="Welcome to RTE" description="Please login to your account" className="m-auto">
              <form>
                <div className="d-flex align-items-start mb-5">
                  <GoogleLoginButton clientId={GOOGLE_CLIENT_ID} buttonText="Login with Google" className="mr-3" />
                  <FacebookLoginButton appId="1088597931155576" callback={() => {}} textButton="Login with Facebook" />
                </div>

                <TextField type="email" label="Email" variant="outlined" required fullWidth />
                <PasswordInput label="Password" />

                <div className="d-flex align-items-center">
                  <FormControlLabel control={<Checkbox color="primary" className="pr-2" size="small" />} label="Remember me" />
                  <CustomLink href="/forgot-password" className="ml-auto mb-2" style={{ color: '#FF725E' }} underline="always">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
