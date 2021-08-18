import { FC } from 'react';
import SEO from '../../Common/SEO';
import FormContainer from '../FormContainer';
import Illustration from '../../../assets/images/password-reset.svg';
import PasswordInput from '../../Common/PasswordInput';
import { Button, Divider } from '@material-ui/core';
import CustomLink from '../../Common/CustomLink';

const NewPassword: FC = () => {
  return (
    <>
      <SEO title="New Password" />
      <FormContainer title="Reset" description="Enter your new password" className="m-auto" illustration={Illustration} alt="Login illustration">
        <form>
          <PasswordInput label="New password" />
          <PasswordInput label="Confirm new password" />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Reset password
          </Button>

          <Divider variant="fullWidth" className="mt-5 mb-4" />

          <CustomLink
            href="/login"
            button
            buttonProps={{
              variant: 'outlined',
              fullWidth: true,
              color: 'primary',
            }}
          >
            Login
          </CustomLink>
        </form>
      </FormContainer>
    </>
  );
};

export default NewPassword;
