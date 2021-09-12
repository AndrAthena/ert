import { Card, CardMedia, CardMediaProps } from '@material-ui/core';
import { FC } from 'react';

const CardImage: FC<CardMediaProps> = (props) => {
  return (
    <Card elevation={0} style={{ width: 125, height: 125 }}>
      <CardMedia {...props} style={{ height: '100%' }} />
    </Card>
  );
};

export default CardImage;
