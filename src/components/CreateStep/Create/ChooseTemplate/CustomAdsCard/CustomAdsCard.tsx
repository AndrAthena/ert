import { Card, CardActionArea, CardProps, SvgIconProps, Typography } from '@material-ui/core';
import { ElementType, FC } from 'react';
import styles from './style';

interface CustomAdsCardProps {
  title: string;
  icon: ElementType<SvgIconProps>;
  size: {
    width: number;
    height: number;
  };
  color?: string;
}

const CustomAdsCard: FC<CustomAdsCardProps & CardProps> = ({ color, icon: Icon, title, size, ...rest }) => {
  const { width, height } = size;
  const cls = styles({ width, height });

  return (
    <Card elevation={0} className={`${cls.card} ${rest.className}`} {...rest}>
      <CardActionArea className={cls.border}>
        <Icon htmlColor={color} />
      </CardActionArea>
      <Typography align="center" color="textSecondary" variant="body2" className={cls.text}>
        {title}
      </Typography>
    </Card>
  );
};

export default CustomAdsCard;
