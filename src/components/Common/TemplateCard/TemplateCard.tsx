import { Card, CardActionArea, CardActionAreaProps, Typography } from '@material-ui/core';
import { FC } from 'react';
import stl from './style';

interface ITemplateCard {
  icon: JSX.Element;
  title: string;
  className?: string;
}

const TemplateCard: FC<ITemplateCard & CardActionAreaProps> = ({ icon, title, className, ...rest }) => {
  const cls = stl();
  return (
    <Card elevation={0} className={`${className ?? ''} p-3 text-center`}>
      <CardActionArea className={cls.templateCard} {...rest}>
        {icon}
        <Typography variant="body2" align="center">
          {title}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default TemplateCard;
