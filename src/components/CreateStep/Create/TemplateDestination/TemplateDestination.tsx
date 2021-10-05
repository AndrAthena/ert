import { Typography } from '@material-ui/core';
import Folder from '../../../Icons/Folder';
import FolderList from '../../../Icons/FolderList';
import TemplateCard from '../../../Common/TemplateCard';
import { useHistory } from 'react-router-dom';
import CustomStepper from '../../../Common/CustomStepper';
import Header from '../../../Common/Header';

const TemplateDestination = () => {
  const history = useHistory();
  const handleCreateTemplate = () => history.push('/create-template/create');
  const handleChooseFolder = () => history.push('/create-template/choose-folder');

  return (
    <>
      <Header />
      <CustomStepper
        active={1}
        stepNumber={4}
        title="New template"
        subtitle="Create a new template quickly"
      />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <Typography variant="h2" align="center" gutterBottom>
          Where to put your template ?
        </Typography>
        <Typography align="center" color="textSecondary">
          Choose / Create a folder where you can store your design template
        </Typography>
        <div className="d-flex justify-content-center align-items-center my-5">
          <TemplateCard icon={Folder} title="Create a folder" onClick={handleCreateTemplate} />
          <TemplateCard icon={FolderList} title="Choose a folder" onClick={handleChooseFolder} />
        </div>
      </div>
    </>
  );
};

export default TemplateDestination;
