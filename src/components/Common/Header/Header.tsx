import { AppBar, AppBarProps, Toolbar, Typography } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import Logo from '../../Icons/Logo';
import CustomLink from '../CustomLink';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import stl from './style';

const Header: FC<AppBarProps> = (props) => {
  const cls = stl();
  const [mobile, setMobile] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('load', () => {
      if (window.innerWidth < 992) setMobile(true);
      else setMobile(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth < 992) setMobile(true);
      else setMobile(false);
    });
  });

  return (
    <AppBar position="sticky" color="inherit" elevation={1} {...props}>
      <Toolbar className="container" disableGutters>
        <CustomLink className="d-flex align-items-center mr-5" href="/" color="initial" underline="none">
          <Logo />
          <Typography className="ml-2" color="textPrimary">
            <strong>RTE Technologies</strong>
          </Typography>
        </CustomLink>
        {mobile ? <MenuMobile /> : <MenuDesktop />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
