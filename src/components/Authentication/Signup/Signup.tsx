import { Button, Checkbox, Divider, FormControlLabel, TextField } from '@material-ui/core';
import { FC } from 'react';
import SEO from '../../Common/SEO';
import FormContainer from '../FormContainer';
import PasswordInput from '../../Common/PasswordInput';
import GoogleLoginButton from '../../Common/GoogleLoginButton';
import { GOOGLE_CLIENT_ID } from '../../../constants/config';
import FacebookLoginButton from '../../Common/FacebookLoginButton/FacebookLoginButton';
import Illustration from '../../../assets/images/signup.svg';

const Signup: FC = () => {
  return (
    <>
      <SEO title="Sign Up" />
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="p-5">
              <img src={Illustration} alt="Signup illustration" role="presentation" />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column">
            <FormContainer title="Sign up to RTE" description="Please login to your account" className="m-auto">
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
                  Signup
                </Button>
                <Divider variant="fullWidth" className="my-4" />
              </form>
            </FormContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
