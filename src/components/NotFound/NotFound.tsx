import Illustration from '../../assets/images/404.svg';
import SEO from '../Common/SEO';

const NotFound = () => (
  <>
    <SEO title="Not Found" />
    <div className="h-100 d-flex justify-content-center align-items-center">
      <img src={Illustration} alt="Not Found" />
    </div>
  </>
);

export default NotFound;
