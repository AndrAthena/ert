import { AppBar, AppBarProps, Avatar, Toolbar, Typography } from '@material-ui/core';
import { FC } from 'react';
import Logo from '../../Icons/Logo';
import CustomLink from '../CustomLink';
import stl from './style';

const Header: FC<AppBarProps> = (props) => {
  const cls = stl();

  return (
    <AppBar position="sticky" color="inherit" elevation={1} {...props}>
      <Toolbar className="container" disableGutters>
        <CustomLink className="d-flex align-items-center mr-5" href="/" color="initial" underline="none">
          <Logo />
          <Typography className="ml-2" color="textPrimary">
            <strong>RTE Technologies</strong>
          </Typography>
        </CustomLink>
        <nav className={cls.menu}>
          <CustomLink href="/" underline="none">
            Home
          </CustomLink>
          <CustomLink href="/about" underline="none">
            About
          </CustomLink>
          <CustomLink href="/pricing" underline="none">
            Pricing
          </CustomLink>
          <CustomLink href="/template" underline="none">
            Template
          </CustomLink>
          <CustomLink href="/help" underline="none">
            Help
          </CustomLink>
        </nav>
        <div className="d-flex ml-auto">
          <CustomLink
            href="/login"
            button
            buttonProps={{
              variant: 'outlined',
              color: 'secondary',
              className: 'mr-3',
            }}
          >
            Sign in
          </CustomLink>
          <CustomLink
            href="/signup"
            button
            buttonProps={{
              variant: 'contained',
              color: 'secondary',
            }}
          >
            Sign up
          </CustomLink>
          <Avatar className="ml-3">B</Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
