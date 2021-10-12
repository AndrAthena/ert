import { Box, Typography } from '@material-ui/core';
import CarouselSwiper from '../../../../Common/CarouselSwiper';
import CustomSearchInput from '../../../../Common/CustomSearchInput';
import template1 from '../../../../../assets/images/template-1.png';
import template2 from '../../../../../assets/images/template-2.png';
import template3 from '../../../../../assets/images/template-3.png';
import template4 from '../../../../../assets/images/template-4.png';
import CardImage from '../../../../Common/CardImage';

const TemplatePanel = () => {
  return (
    <>
      <CustomSearchInput placeholder="Search a template" fullWidth />
      <Box mb={2}>
        <Typography variant="body2" gutterBottom>
          Facebook image template
        </Typography>
        <div className="d-flex">
          <CarouselSwiper
            slidesPerView={2.15}
            slides={[template1, template2, template3, template4].map((image) => {
              return <CardImage image={image} style={{ height: 150 }} className="mr-3" />;
            })}
          />
        </div>
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Instagram template
        </Typography>
        <div className="d-flex">
          <CarouselSwiper
            slidesPerView={2.15}
            slides={[template4, template3, template1, template2].map((image) => {
              return <CardImage image={image} style={{ height: 150 }} className="mr-3" />;
            })}
          />
        </div>
      </Box>
    </>
  );
};

export default TemplatePanel;
