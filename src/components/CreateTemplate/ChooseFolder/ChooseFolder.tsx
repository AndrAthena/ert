import { Typography } from '@material-ui/core';
import Folder from '../../Icons/Folder';
import FolderList from '../../Icons/FolderList';
import TemplateCard from '../../Common/TemplateCard';

const ChooseFolder = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center h-100">
      <Typography variant="h2" align="center" gutterBottom>
        Where to put your template ?
      </Typography>
      <Typography align="center" color="textSecondary">
        Choose / Create a folder where you can store your design template
      </Typography>
      <div className="d-flex justify-content-center align-items-center my-5">
        <TemplateCard icon={<Folder />} title="Create a folder" />
        <TemplateCard icon={<FolderList />} title="Choose a folder" />
      </div>
    </div>
  );
};

export default ChooseFolder;
