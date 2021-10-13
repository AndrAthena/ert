import { Box, Button, Typography } from '@material-ui/core';
import CustomSelect from '../../../../Common/CustomSelect';

const ConditionalRenderingTab = () => {
  return (
    <Box>
      <Typography gutterBottom>Add a conditional rendering</Typography>
      <Box>
        <CustomSelect
          value="promotion"
          items={[{ label: 'Promotion', value: 'promotion' }]}
          fullWidth
        />
        <CustomSelect value="equals" items={[{ label: 'Equals', value: 'equals' }]} fullWidth />
        <CustomSelect value="yes" items={[{ label: 'YES', value: 'yes' }]} fullWidth />
      </Box>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginRight: '0.5rem' }}
        >
          Apply
        </Button>
        <Button variant="outlined" color="secondary" size="small">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ConditionalRenderingTab;
