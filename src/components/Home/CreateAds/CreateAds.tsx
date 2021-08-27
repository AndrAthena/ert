import { Card, CardProps, SvgIconProps, Typography } from '@material-ui/core';
import { ElementType, FC } from 'react';
import AdsCreative from '../../Icons/AdsCreative';
import FeedEditor from '../../Icons/FeedEditor';
import ImageAds from '../../Icons/ImageAds';
import stl, { cardStl } from './style';

interface CustomCardProps {
  title: string;
  icon: ElementType<SvgIconProps>;
  iconColor: string;
  color: string;
}

const CustomCard: FC<CardProps & CustomCardProps> = ({ color, icon: Icon, title, iconColor, ...other }) => {
  const cls = cardStl({ color });

  return (
    <Card variant="outlined" className={`${cls.card} ${other.className}`}>
      <Typography align="center">{title}</Typography>
      <Icon htmlColor={iconColor} fontSize="large" className="mt-4" />
    </Card>
  );
};

const CreateAds = () => {
  const cls = stl();

  return (
    <div className={cls.create_ads}>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-wrap align-content-start col-md-5">
            <CustomCard title="Dynamic Image ads Template" icon={ImageAds} iconColor="#3AC1EC" color="rgb(0, 50, 122)" />
            <CustomCard className="mt-4" title="Dynamic Video ads Template" icon={ImageAds} iconColor="" color="rgb(134,194,50)" />
            <CustomCard title="Dynamic Feed Creative Automation" icon={FeedEditor} iconColor="#FF725E" color="rgb(255,114,94)" />
            <CustomCard
              className="mt-4"
              title="Dynamic Product Catalog Video Creatives"
              icon={AdsCreative}
              iconColor="#FBB244"
              color="rgb(213,149,53)"
            />
          </div>
          <div className="col-md-7">
            <Typography variant="h2" color="textPrimary" gutterBottom>
              Create dynamics ads creatives and discover your audiences through unique cross-platform personalization at scale
            </Typography>
            <Typography color="textSecondary">
              RTE's creative automation enables brands and entreprises to easily plan and put in place marketing persona engagement strategies, at a
              fraction of today's costs
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAds;
