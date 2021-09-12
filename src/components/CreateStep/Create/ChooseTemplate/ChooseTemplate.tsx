import { Typography, TextField, InputAdornment, Fade } from '@material-ui/core';
import CustomAdsCard from './CustomAdsCard/CustomAdsCard';
import styles from './style';
import Facebook from '../../../Icons/Facebook';
import Instagram from '../../../Icons/Instagram';
import { Search, Settings, YouTube } from '@material-ui/icons';
import CarouselSwiper from '../../../Common/CarouselSwiper/CarouselSwiper';
import CardImage from '../../../Common/CardImage';
import template1 from '../../../../assets/images/template-1.png';
import template2 from '../../../../assets/images/template-2.png';
import template3 from '../../../../assets/images/template-3.png';
import template4 from '../../../../assets/images/template-4.png';
import template5 from '../../../../assets/images/template-5.png';
import template6 from '../../../../assets/images/template-6.png';
import { FC } from 'react';

const slides = [template1, template2, template3, template4, template5, template6];

const cards = slides.map((template: string) => {
  return <CardImage image={template} />;
});

interface ChooseTemplateProps {
  handleNext: () => void;
}

const ChooseTemplate: FC<ChooseTemplateProps> = ({ handleNext }) => {
  const cls = styles();

  return (
    <Fade
      in={true}
      timeout={{
        appear: 500,
        exit: 300,
      }}
    >
      <div className={cls.step3}>
        <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
          Create from scratch or choose from template
        </Typography>
        <Typography color="textSecondary" align="center">
          Create your ads from different format and platform
        </Typography>
        <div className="d-flex justify-content-between align-items-end my-4">
          <CustomAdsCard size={{ width: 125, height: 130 }} title="Instagram Ads" icon={Instagram} />
          <CustomAdsCard size={{ width: 180, height: 100 }} title="Facebook Ads" icon={Facebook} color="#1877F2" />
          <CustomAdsCard size={{ width: 115, height: 170 }} title="Story Facebook" icon={Facebook} color="#1877F2" />
          <CustomAdsCard size={{ width: 175, height: 125 }} title="Facebook Video" icon={Facebook} color="#1877F2" />
          <CustomAdsCard size={{ width: 170, height: 100 }} title="Youtube Video" icon={YouTube} color="#FE0000" />
          <CustomAdsCard size={{ width: 125, height: 120 }} title="Custom size" icon={Settings} color="#86C232" onClick={handleNext} />
        </div>
        <div>
          <TextField
            variant="outlined"
            placeholder="Search a template"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="primary" />
                </InputAdornment>
              ),
            }}
            fullWidth
            type="search"
          />
          <Typography color="textSecondary" gutterBottom>
            Youtube Thumbnails
          </Typography>
          <CarouselSwiper slides={cards} slidesPerView={6} spaceBetween={30} />
        </div>
      </div>
    </Fade>
  );
};

export default ChooseTemplate;
