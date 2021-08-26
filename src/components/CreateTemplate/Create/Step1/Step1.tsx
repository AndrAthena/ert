import { TextField, Typography } from '@material-ui/core';
import { TreeItem, TreeView } from '@material-ui/lab';
import Folder from '../../../Icons/Folder';

const Step1 = () => {
  return (
    <div className="mx-auto">
      <Typography variant="subtitle1" color="textPrimary">
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
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Where to put your ads ?"
          select
          SelectProps={{
            native: true,
          }}
          fullWidth
        >
          <option>Sub-Folder 1</option>
          <option>Sub-Folder 2</option>
          <option>Sub-Folder 3</option>
        </TextField>
      </form>
      <TreeView>
        <TreeItem label="Folder" icon={<Folder fontSize="large" color="primary" />} nodeId="root-folder-1" />
        <TreeItem label="Folder" nodeId="root-folder-2" />
      </TreeView>
    </div>
  );
};

export default Step1;
