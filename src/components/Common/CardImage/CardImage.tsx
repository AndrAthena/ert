import {
  Card,
  CardMedia,
  CardMediaProps,
  CardActionArea,
  CardProps,
  Typography,
} from '@material-ui/core';
import { FC, ReactNode } from 'react';
import styles from './style';

const CardImage: FC<CardProps & CardMediaProps & { label?: ReactNode }> = ({
  image,
  src,
  label,
  ...rest
}) => {
  const cls = styles();

  return (
    <>
      <Card
        elevation={0}
        classes={{ root: cls.cardImage }}
        variant={label ? 'outlined' : 'elevation'}
        color="primary"
        style={label ? { borderColor: '#86C232' } : {}}
        {...rest}
      >
        <CardActionArea>
          <CardMedia image={image} src={src} style={{ height: '100%' }} />
        </CardActionArea>
      </Card>
      {label && (
        <Typography variant="body2" align="center" style={{ marginTop: 4 }}>
          {label}
        </Typography>
      )}
    </>
  );
};

export default CardImage;
