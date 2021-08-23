import { Typography } from '@material-ui/core';
import Header from '../../Common/Header';
import AdsCreative from '../../Icons/AdsCreative';
import AutomatedCreative from '../../Icons/AutomatedCreative';
import FeedEditor from '../../Icons/FeedEditor';
import NewTemplate from '../../Icons/NewTemplate';
import TemplateLibrary from '../../Icons/TemplateLibrary';
import TemplateCard from '../TemplateCard';
import stl from './style';

const CreateTemplate = () => {
  const cls = stl();

  return (
    <>
      <Header />
      <div className={`${cls.create} container`}>
        <div className="d-flex h-100 flex-column justify-content-center align-items-center">
          <Typography align="center" variant="h1" gutterBottom>
            Hello Barry !
          </Typography>
          <Typography align="center" color="textSecondary">
            Quickly create your campaign ad. Browse the templates, the ads already created and your feeds
          </Typography>
          <div className="d-flex align-items-center my-5">
            <TemplateCard className="mx-4" icon={<NewTemplate />} title="New Creative Template" />
            <TemplateCard className="mx-4" icon={<TemplateLibrary />} title="Creative Templates Library" />
            <TemplateCard className="mx-4" icon={<AdsCreative />} title="Ads Creatives" />
            <TemplateCard className="mx-4" icon={<AutomatedCreative />} title="Automated Creatives" />
            <TemplateCard className="mx-4" icon={<FeedEditor />} title="Feed Editor" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTemplate;
