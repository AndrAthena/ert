import { Fade, IconButton } from '@material-ui/core';
import { Close, Menu } from '@material-ui/icons';
import { useState } from 'react';
import CustomLink from '../../CustomLink';
import stl from './style';

const MenuMobile = () => {
  const cls = stl();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <IconButton className="ml-auto" onClick={handleOpen}>
        <Menu />
      </IconButton>
      <Fade in={open}>
        <div className={cls.menu}>
          <IconButton className="ml-auto" size="small" onClick={handleClose}>
            <Close />
          </IconButton>
          <div className="mt-4 text-center">
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
          <nav className={cls.navigation}>
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
        </div>
      </Fade>
    </>
  );
};

export default MenuMobile;
