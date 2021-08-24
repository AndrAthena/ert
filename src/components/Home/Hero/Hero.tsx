import { Typography } from '@material-ui/core';
import HeroImg from '../../../assets/images/hero.svg';
import CustomLink from '../../Common/CustomLink';
import stl from './style';
import brand1 from '../../../assets/images/brand-1.svg';
import brand2 from '../../../assets/images/brand-2.svg';
import brand3 from '../../../assets/images/brand-3.svg';
import brand4 from '../../../assets/images/brand-4.svg';
import brand5 from '../../../assets/images/brand-5.svg';

const Hero = () => {
  const cls = stl();

  return (
    <div className={cls.hero}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <Typography variant="h1" color="textPrimary" className="mb-3">
              Create your ads easily <br />
              and convert more customers
            </Typography>
            <Typography color="textSecondary" className="mb-4" variant="h6">
              RTE Technologies is a platform where you can create ads images or video easily that empowers your brands and marketing strategy.
            </Typography>
            <CustomLink
              button
              buttonProps={{
                variant: 'contained',
                color: 'secondary',
              }}
              href="/create-template"
            >
              Create your first design
            </CustomLink>
          </div>
          <div className="col-md-6 text-right">
            <img src={HeroImg} alt="" />
          </div>
        </div>
        <div className="mt-5">
          <Typography align="center">Trusted by world's most innovative global brands and agencies</Typography>
          <div className="d-flex justify-content-center align-items-center my-4">
            <img src={brand1} className="mx-5" alt="" />
            <img src={brand2} className="mx-5" alt="" />
            <img src={brand3} className="mx-5" alt="" />
            <img src={brand4} className="mx-5" alt="" />
            <img src={brand5} className="mx-5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
