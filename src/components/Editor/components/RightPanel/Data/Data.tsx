import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Close, Edit, Refresh } from '@material-ui/icons';
import CustomTabPanel from '../../../../Common/CustomTabPanel';
import CustomSelect from '../../../../Common/CustomSelect';

const CustomTabs = withStyles({
  root: {
    minHeight: 42,
    height: 42,
    marginBottom: 16,
    border: '1px solid #d8d8d8',
    borderRadius: 6,
  },
  indicator: {
    display: 'none',
  },
})(Tabs);

const CustomTab = withStyles((theme) => ({
  root: {
    minHeight: 42,
    height: 42,
    textTransform: 'initial',
    fontSize: '0.875rem',
    '&$selected': {
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
    },
  },
  textColorInherit: {
    color: '#7A7E81',
  },
  selected: {},
}))(Tab);

const Data = () => {
  const [value, setValue] = useState('data');
  const handleChangeValue = (_: any, value: string) => setValue(value);

  return (
    <Box p={1.5}>
      <Typography>Data</Typography>
      <Typography variant="body2" gutterBottom>
        Create images using modules or Feed.
      </Typography>

      <CustomTabs value={value} onChange={handleChangeValue} variant="fullWidth">
        <CustomTab value="feed" label="Feed" />
        <CustomTab value="module" label="Modules" />
      </CustomTabs>

      <CustomTabPanel value={value} name="feed">
        <TextField
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small">
                  <Edit fontSize="inherit" htmlColor="#D8D8D8" />
                </IconButton>
                <IconButton size="small">
                  <Close fontSize="inherit" htmlColor="#D8D8D8" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} name="module">
        <Box textAlign="right">
          <Button startIcon={<Refresh fontSize="small" />} color="secondary" size="small">
            Refresh
          </Button>
        </Box>
        <CustomSelect
          label="Feed source"
          items={[{ label: 'TravelProductFeed', value: 'travel' }]}
          value="travel"
          fullWidth
        />
        <CustomSelect
          label="Content from feed"
          items={[{ label: "products(0)['image']", value: 'travel' }]}
          value="travel"
          fullWidth
        />
        <Divider variant="fullWidth" />
        <FormControlLabel control={<Checkbox size="small" />} label="Number of rows per image" />
        <CustomSelect
          label="Feed source"
          items={[
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
          ]}
          value={1}
          helperText="A total of 1 (3/3 rounded down!) image can be created"
          fullWidth
        />
      </CustomTabPanel>
    </Box>
  );
};

export default Data;
