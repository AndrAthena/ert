import { Card, CardActionArea, CardActionAreaProps, SvgIconProps, Typography } from '@material-ui/core';
import { ElementType, FC } from 'react';
import stl from './style';

interface TemplateCardProps {
  icon: ElementType<SvgIconProps>;
  iconProps?: SvgIconProps;
  title: string;
  subtitle?: string;
  className?: string;
}

const TemplateCard: FC<TemplateCardProps & CardActionAreaProps> = ({ icon: Icon, iconProps, title, subtitle, className, ...rest }) => {
  const cls = stl({ iconProps });
  return (
    <Card elevation={0} className={`${className ?? ''} p-3 text-center`}>
      <CardActionArea className={cls.templateCard} {...rest}>
        {<Icon {...iconProps} />}
        <Typography variant="body2" align="center" gutterBottom={Boolean(subtitle)}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="caption" align="center" color="textSecondary">
            {subtitle}
          </Typography>
        )}
      </CardActionArea>
    </Card>
  );
};

export default TemplateCard;
