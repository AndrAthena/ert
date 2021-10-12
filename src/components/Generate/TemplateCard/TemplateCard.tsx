import {
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardProps,
  Checkbox,
  IconButton,
  Typography,
  withStyles,
} from '@material-ui/core';
import { RadioButtonUnchecked, CheckCircle, Edit } from '@material-ui/icons';
import { FC } from 'react';
import styles from './style';

const CustomCard = withStyles({
  root: {
    position: 'relative',
  },
})(Card);

const CustomCardHeader = withStyles({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  avatar: {
    position: 'relative',
    top: -16,
    left: -16,
    marginRight: 0,
  },
})(CardHeader);

interface TemplateCardProps {
  image: string;
  title: string;
  subtitle: string;
}
const TemplateCard: FC<TemplateCardProps & CardProps> = ({ title, subtitle, image, ...rest }) => {
  const cls = styles();

  return (
    <CustomCard square {...rest}>
      <CustomCardHeader
        avatar={
          <Checkbox
            color="primary"
            size="small"
            icon={<RadioButtonUnchecked htmlColor="#fff" />}
            checkedIcon={<CheckCircle />}
          />
        }
        action={
          <IconButton size="small" style={{ backgroundColor: '#f3f3f3' }}>
            <Edit color="primary" fontSize="inherit" />
          </IconButton>
        }
      />
      <CardMedia image={image} style={{ height: 400 }} />
      <Box className={cls.title}>
        <Typography variant="subtitle1" align="center">
          {title}
        </Typography>
      </Box>
      <CardActions>
        <Box width={1} textAlign="center" p={1.5}>
          <Typography>{subtitle}</Typography>
        </Box>
      </CardActions>
    </CustomCard>
  );
};

export default TemplateCard;
