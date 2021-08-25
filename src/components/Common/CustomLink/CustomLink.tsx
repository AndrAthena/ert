import { Button, ButtonProps, IconButton, IconButtonProps, Link, LinkProps } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

interface CustomLinkProps extends LinkProps {
  button?: boolean;
  buttonProps?: ButtonProps;
  iconButton?: boolean;
  iconButtonProps?: IconButtonProps;
}

const CustomLink: FC<CustomLinkProps> = (props) => {
  const { href, children, button, buttonProps, iconButton, iconButtonProps, ...other } = props;
  const history = useHistory();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push(href ? href : '/');
  };

  return iconButton ? (
    <IconButton onClick={handleClick} {...iconButtonProps}>
      {children}
    </IconButton>
  ) : button ? (
    <Button href={href} onClick={handleClick} {...buttonProps}>
      {children}
    </Button>
  ) : (
    <Link {...other} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default CustomLink;
