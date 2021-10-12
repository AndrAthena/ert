import { Box, Button, Divider, Typography } from '@material-ui/core';
import { FC } from 'react';
import styles from './style';

const BackgroundTab: FC<{}> = () => {
  const cls = styles();

  return (
    <Box>
      <Typography variant="body2" gutterBottom>
        Add background
      </Typography>
      <Box my={3} textAlign="center">
        <Button variant="outlined" color="secondary">
          Upload background
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

export default BackgroundTab;
