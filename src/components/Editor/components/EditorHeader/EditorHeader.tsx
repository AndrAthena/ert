import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';
import ImageIcon from '../../../Icons/ImageIcon';

const EditorHeader = () => {
  return (
    <AppBar elevation={1} color="inherit" position="sticky">
      <Toolbar>
        <IconButton size="small" className="mr-2">
          <ArrowLeft />
        </IconButton>
        <div className="d-flex align-items-center">
          <ImageIcon htmlColor="#FF725E" className="mr-3" />
          <div>
            <Typography variant="subtitle1">Template Name</Typography>
            <Typography variant="body2" color="textSecondary">
              Folder location
            </Typography>
          </div>
        </div>
        <Button variant="contained" color="secondary" className="ml-auto">
          Genearte Ads
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default EditorHeader;
