import { Chip, TextField, Typography, withStyles } from '@material-ui/core';
import ChipInput, { ChipRendererArgs, Props } from 'material-ui-chip-input';
import styles from '../style';

const CustomChipInput = withStyles({
  root: {
    '& [class*="inputRoot"]': {
      paddingTop: 0,
    },
    '& input': {
      margin: 0,
      padding: 0,
    },
  },
})((props: Props) => <ChipInput variant="outlined" chipRenderer={CustomChip} fullWidth {...props} />);

const CustomChip = (props: ChipRendererArgs, key: any) => {
  const { value, handleDelete } = props;

  return <Chip size="small" variant="outlined" color="secondary" label={<Typography variant="caption">{value}</Typography>} className="mr-2" onDelete={handleDelete} key={key} />;
};

const Step2 = () => {
  const cls = styles();

  return (
    <div className={`${cls.step} mb-3`}>
      <Typography variant="h2" color="textPrimary" gutterBottom>
        Tell us more about your template
      </Typography>
      <Typography color="textSecondary">Give a name, description and tags to your design template</Typography>
      <form className="mt-4">
        <TextField variant="outlined" label="Template name" required fullWidth />
        <TextField variant="outlined" label="Add a note" rows={5} multiline fullWidth />
        <CustomChipInput label="Tags" value={['Furniture', 'Chair']} />
      </form>
    </div>
  );
};

export default Step2;
