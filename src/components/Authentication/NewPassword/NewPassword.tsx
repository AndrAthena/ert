import { FC } from 'react';
import SEO from '../../Common/SEO';
import FormContainer from '../FormContainer';
import Illustration from '../../../assets/images/password-reset.svg';
import PasswordInput from '../../Common/PasswordInput';
import { Button, Divider, FormHelperText, Typography } from '@material-ui/core';
import CustomLink from '../../Common/CustomLink';

const NewPassword: FC = () => {
  return (
    <>
      <SEO title="New Password" />
      <FormContainer title="Reset" description="Enter your new password" className="m-auto" illustration={Illustration} alt="Login illustration">
        <form>
          <PasswordInput label="New password" />
          <PasswordInput label="Confirm new password" />

          <FormHelperText className="mb-4">
            Your password must:
            <ul className="list-unstyled">
              <li>- At least contain 8 characters</li>
              <li>- Contain at least one capital letter, one special character, one number and a lowercase </li>
              <li>- Do not contain your personal data</li>
            </ul>
          </FormHelperText>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Reset password
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

export default NewPassword;
