import { Box, Button, FormControlLabel, FormGroup, Typography } from '@material-ui/core';
import CustomSelect from '../../../../Common/CustomSelect';
import CustomSwitch from '../../../../Common/CustomSwitch';

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
          <FormControlLabel
            control={<CustomSwitch color="primary" />}
            label="Show grid"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<CustomSwitch color="primary" />}
            label="Show layers outside canvas"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<CustomSwitch color="primary" />}
            label="Show format overlay"
            labelPlacement="end"
          />
        </FormGroup>
      </Box>
      <Box>
        <Typography>Editor</Typography>
        <FormGroup row>
          <FormControlLabel
            control={<CustomSwitch color="primary" />}
            label="Enable"
            labelPlacement="end"
          />
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
