import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { FC } from 'react';
import Logo from '../../Icons/Logo';
import CustomLink from '../CustomLink';
import stl from './style';

const Header: FC = () => {
  const cls = stl();

  return (
    <AppBar position="sticky" color="transparent" elevation={1}>
      <Toolbar className="container" disableGutters>
        <div className="d-flex align-items-center mr-5">
          <Logo />
          <Typography className="ml-2" color="textPrimary">
            <strong>RTE Technologies</strong>
          </Typography>
        </div>
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
        <div className="ml-auto">
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
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
