import FormContainer from '../FormContainer';
import Illustration from '../../../assets/images/success.svg';
import CustomLink from './../../Common/CustomLink/CustomLink';

const Success = () => {
  return (
    <FormContainer title="Congratulation !" description="Your password has been successfully created." illustration={Illustration} alt="Success">
      <CustomLink button buttonProps={{ variant: 'contained', color: 'primary', fullWidth: true }} href="/login">
        Sign in
      </CustomLink>
    </FormContainer>
  );
};

export default Success;
