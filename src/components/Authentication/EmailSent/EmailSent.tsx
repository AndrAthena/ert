import { Button, Divider, Typography } from '@material-ui/core';
import { FC } from 'react';
import CustomLink from '../../Common/CustomLink';
import SEO from '../../Common/SEO';
import FormContainer from '../FormContainer';
import Illustration from '../../../assets/images/email-sent.svg';

const EmailSent: FC = () => {
  return (
    <>
      <SEO title="Forgot your password" />
      <FormContainer
        title="Verification"
        description="Check your e-mail box to reset your password. Follow the instructions send to your email box"
        className="m-auto"
        illustration={Illustration}
        alt="Forgot Password"
      >
        <div className="my-4">
          <Typography align="center">
            You haven't received an email?
            <br /> Check your spam or click on the button below
          </Typography>
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Resend email
        </Button>

        <Divider variant="fullWidth" className="mt-5 mb-4" />

        <CustomLink
          href="/login"
          button
          buttonProps={{
            variant: 'outlined',
            color: 'primary',
            fullWidth: true,
          }}
        >
          Sign in
        </CustomLink>
      </FormContainer>
    </>
  );
};

export default EmailSent;
