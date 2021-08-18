import { Button } from '@material-ui/core';
import { FC } from 'react';
import GoogleLogin, { GoogleLoginProps } from 'react-google-login';
import stl from './style';

const GoogleLoginButton: FC<GoogleLoginProps> = (props) => {
  const cls = stl();

  return (
    <GoogleLogin
      {...props}
      render={({ onClick }: any) => (
        <Button onClick={onClick} variant="contained" className={`${cls.btnGoogle} ${props.className}`} color="default">
          {props.buttonText}
        </Button>
      )}
    />
  );
};

export default GoogleLoginButton;
