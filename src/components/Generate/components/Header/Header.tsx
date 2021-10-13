import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowLeft, CheckCircle } from '@material-ui/icons';
import ImageIcon from '../../../Icons/ImageIcon';

const Header = () => {
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
              8 images
            </Typography>
          </div>
        </div>
        <Box display="flex" alignItems="center" ml="auto">
          <CheckCircle color="primary" fontSize="large" />
          <Box ml={1}>
            <Typography color="textSecondary">Rendering complete</Typography>
            <Typography color="textSecondary" variant="body2">
              5 of 5 rendered successfully
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
