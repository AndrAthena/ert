import stl from './style';
import { useHistory } from 'react-router';
import SEO from '../Common/SEO';
import Header from '../Common/Header';
import { Typography } from '@material-ui/core';
import TemplateCard from '../Common/TemplateCard';
import NewTemplate from '../Icons/NewTemplate';
import ImageAds from '../Icons/ImageAds';
import AdsCreative from '../Icons/AdsCreative';
import AutomatedCreative from '../Icons/AutomatedCreative';
import FeedEditor from '../Icons/FeedEditor';

const CreateTemplate = () => {
  const history = useHistory();
  const handleClickCreate = () => history.push('/template-destination');
  const cls = stl();

  return (
    <>
      <SEO title="Create Template" />
      <Header />
      <div className={`${cls.create} container`}>
        <Typography align="center" variant="h1" gutterBottom>
          Hello Barry !
        </Typography>
        <Typography align="center" color="textSecondary">
          Quickly create your campaign ad. Browse the templates, the ads already created and your feeds
        </Typography>
        <div className={`${cls.cardContainer} my-3 my-lg-5`}>
          <TemplateCard icon={NewTemplate} title="New Creative Template" onClick={handleClickCreate} />
          <TemplateCard icon={ImageAds} title="Creative Templates Library" />
          <TemplateCard icon={AdsCreative} title="Ads Creatives" />
          <TemplateCard icon={AutomatedCreative} title="Automated Creatives" />
          <TemplateCard icon={FeedEditor} title="Feed Editor" />
        </div>
      </div>
    </>
  );
};

export default CreateTemplate;
