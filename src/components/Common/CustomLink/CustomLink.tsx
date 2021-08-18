import { Button, ButtonProps, Link, LinkProps } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

interface CustomLinkProps extends LinkProps {
  button?: boolean;
  buttonProps?: ButtonProps;
}

const CustomLink: FC<CustomLinkProps> = (props) => {
  const { href, children, button, buttonProps, ...other } = props;
  const history = useHistory();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push(href ? href : '/');
  };

  return !button ? (
    <Link {...other} href={href} onClick={handleClick}>
      {children}
    </Link>
  ) : (
    <Button href={href} onClick={handleClick} {...buttonProps} fullWidth>
      {children}
    </Button>
  );
};

export default CustomLink;
