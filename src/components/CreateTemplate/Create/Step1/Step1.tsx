import { Box, TextField, Typography } from '@material-ui/core';
import CustomTreeView, { RenderTreeProps } from '../../../Common/CustomTreeView';
import styles from '../style';

const Step1 = () => {
  const cls = styles();

  const data: RenderTreeProps = {
    id: 'root',
    name: 'New Folder',
    children: [
      {
        id: 'sub-root-1',
        name: 'Sub Folder 1',
      },
      {
        id: 'sub-root-2',
        name: 'Sub Folder 2',
      },
    ],
  };

  return (
    <div className={cls.step}>
      <Typography variant="h2" color="textPrimary" gutterBottom>
        Configure the structure of your template folder
      </Typography>
      <Typography color="textSecondary">Choose the number of sub-folder and where to put your ads </Typography>
      <form className="mt-4">
        <TextField
          type="number"
          variant="outlined"
          label="Number of sub-folder"
          inputProps={{
            min: 0,
          }}
          required
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Where to put your ads ?"
          select
          SelectProps={{
            native: true,
          }}
          required
          fullWidth
        >
          <option>Sub-Folder 1</option>
          <option>Sub-Folder 2</option>
          <option>Sub-Folder 3</option>
        </TextField>
        <Box mt={2}>
          <Typography color="textSecondary" gutterBottom>
            Rename your folder
          </Typography>
          <Box mb={3}>
            <CustomTreeView data={data} defaultExpanded={['root']} />
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Step1;
