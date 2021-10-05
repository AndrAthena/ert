import { Box, Typography } from '@material-ui/core';
import template from '../../../../assets/images/template-1.png';
import CardImage from '../../../Common/CardImage';
import styles from './style';

const filters: any[] = [
  {
    label: 'None',
    image: template,
  },
  {
    label: 'Epic',
    image: template,
  },
  {
    label: 'Festive',
    image: template,
  },
  {
    label: 'Summer',
    image: template,
  },
  {
    label: 'Afterglow',
    image: template,
  },
  {
    label: 'Solar',
    image: template,
  },
  {
    label: 'Selfie',
    image: template,
  },
  {
    label: 'Cali',
    image: template,
  },
  {
    label: 'The Blues',
    image: template,
  },
  {
    label: 'Nordic',
    image: template,
  },
  {
    label: 'Whimsical',
    image: template,
  },
  {
    label: 'Retro',
    image: template,
  },
  {
    label: 'Edge',
    image: template,
  },
  {
    label: 'Dalliance',
    image: template,
  },
  {
    label: 'Peony',
    image: template,
  },
  {
    label: 'Dare',
    image: template,
  },
  {
    label: 'Rosie',
    image: template,
  },
  {
    label: 'Drama',
    image: template,
  },
  {
    label: 'Greyscale',
    image: template,
  },
  {
    label: 'Street',
    image: template,
  },
];

const Filter = () => {
  const cls = styles();

  return (
    <Box>
      <Typography variant="body2" gutterBottom>
        Add a filter
      </Typography>
      <Box className={cls.filters}>
        {filters.map(({ label, image }) => (
          <Box>
            <CardImage image={image} label={label} style={{ height: 110 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Filter;
