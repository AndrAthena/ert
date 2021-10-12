import { Box, Button, Divider, Typography } from '@material-ui/core';
import styles from './style';

const ImageTab = () => {
  const cls = styles();

  return (
    <Box>
      <Typography>Add image</Typography>
      <Box my={3} textAlign="center">
        <Button variant="outlined" color="secondary">
          Upload image
        </Button>
      </Box>
      <Box p={2} position="relative">
        <Divider variant="fullWidth" />
        <Typography variant="body2" className={cls.divider}>
          OR
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageTab;
