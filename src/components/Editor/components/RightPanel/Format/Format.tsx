import { Box, Button, FormGroup, Typography } from '@material-ui/core';
import CustomRadio from '../../../../Common/CustomRadio';
import CustomSelect from '../../../../Common/CustomSelect';

const Format = () => {
  return (
    <Box p={1.5}>
      <Box>
        <Typography gutterBottom>Format</Typography>
        <CustomSelect
          placeholder="Format"
          items={[{ label: 'Portrait 9:16', value: 'portrait' }]}
          value="portrait"
          fullWidth
        />
      </Box>
      <Box>
        <Typography gutterBottom>Editor</Typography>
        <FormGroup>
          <CustomRadio type="switch" label="Show grid" />
          <CustomRadio type="switch" label="Show layers outside canvas" />
          <CustomRadio type="switch" label="Show format overlay" />
        </FormGroup>
      </Box>
      <Box>
        <Typography>Editor</Typography>
        <FormGroup row>
          <CustomRadio type="switch" label="Enable" />
          <CustomSelect
            placeholder="Format"
            items={[{ label: 'Health Product Feed', value: 'feed' }]}
            value="feed"
          />
        </FormGroup>
        <Button variant="contained" color="secondary" size="small" fullWidth>
          Automate this creatives
        </Button>
      </Box>
    </Box>
  );
};

export default Format;
