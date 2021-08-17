import { Button } from '@material-ui/core';
import { ReactFacebookLoginProps } from 'react-facebook-login';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import stl from './style';

function FacebookLoginButton(props: ReactFacebookLoginProps) {
  const cls = stl();
  return (
    <FacebookLogin
      {...props}
      typeButton="button"
      render={({ onClick }: any) => (
        <Button variant="contained" onClick={onClick} color="default" className={cls.btnFacebook}>
          {props.textButton}
        </Button>
      )}
    />
  );
}

export default FacebookLoginButton;
