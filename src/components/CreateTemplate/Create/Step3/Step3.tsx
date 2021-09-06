import { Typography } from '@material-ui/core';
import CustomAdsCard from './CustomAdsCard/CustomAdsCard';
import styles from './style';
import Facebook from './../../../Icons/Facebook';
import Instagram from './../../../Icons/Instagram';
import { Settings, YouTube } from '@material-ui/icons';

const Step3 = () => {
  const cls = styles();

  return (
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
        <CustomAdsCard size={{ width: 125, height: 120 }} title="Custom size" icon={Settings} color="#86C232" />
      </div>
    </div>
  );
};

export default Step3;
