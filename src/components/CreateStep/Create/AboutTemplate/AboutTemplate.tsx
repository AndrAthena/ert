import { Chip, Fade, TextField, Typography, withStyles } from '@material-ui/core';
import ChipInput, { ChipRendererArgs, Props } from 'material-ui-chip-input';
import { FC } from 'react';
import styles from '../style';

interface AboutTemplateProps {}

const CustomChipInput = withStyles({
  root: {
    '& > div > div': {
      paddingTop: '0 !important',
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

const AboutTemplate: FC<AboutTemplateProps> = (props) => {
  const cls = styles();

  return (
    <Fade
      in={true}
      timeout={{
        appear: 1000,
        exit: 300,
      }}
    >
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
    </Fade>
  );
};

export default AboutTemplate;
