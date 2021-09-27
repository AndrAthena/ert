import { Card, CardMedia, CardMediaProps, CardActionArea, CardProps } from '@material-ui/core';
import { FC } from 'react';
import styles from './style';

const CardImage: FC<CardProps & CardMediaProps> = ({ image, src, ...rest }) => {
  const cls = styles();

  return (
    <Card elevation={0} classes={{ root: cls.cardImage }} {...rest}>
      <CardActionArea>
        <CardMedia image={image} src={src} style={{ height: '100%' }} />
      </CardActionArea>
    </Card>
  );
};

export default CardImage;
