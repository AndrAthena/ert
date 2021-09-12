import { InputAdornment, TextField, Typography } from '@material-ui/core';
import Folder from '../../../Icons/Folder';
import TemplateCard from '../../../Common/TemplateCard';
import { Search } from '@material-ui/icons';
import styles from './style';

const ChooseFolder = () => {
  const cls = styles();
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center h-100">
      <div className={cls.chooseFolder}>
        <Typography variant="h2" align="center" gutterBottom>
          Choose template folder
        </Typography>
        <Typography align="center" color="textSecondary">
          Choose where to put your ads
        </Typography>
        <div className="my-4">
          <TextField
            variant="outlined"
            placeholder="Search a folder"
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
          <div className="d-flex flex-wrap justify-content-center align-items-center my-5">
            <TemplateCard className={cls.card} icon={Folder} iconProps={{ htmlColor: '#FBB244' }} title="Folder 1" subtitle="13 items, 2 sub folders" />
            <TemplateCard className={cls.card} icon={Folder} iconProps={{ htmlColor: '#FBB244' }} title="Folder 2" subtitle="13 items, 2 sub folders" />
            <TemplateCard className={cls.card} icon={Folder} iconProps={{ htmlColor: '#FBB244' }} title="Folder 2" subtitle="13 items, 2 sub folders" />
            <TemplateCard className={cls.card} icon={Folder} iconProps={{ htmlColor: '#FBB244' }} title="Folder 2" subtitle="13 items, 2 sub folders" />
          </div>
          <Typography>
            Template will be created in{' '}
            <Typography color="primary" component="span">
              Folder 1
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ChooseFolder;
