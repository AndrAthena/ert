import { Box, Link, Typography } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';
import CustomLink from '../../Common/CustomLink';
import Facebook from '../../Icons/Facebook';
import LinkedIn from '../../Icons/LinkedIn';
import Logo from '../../Icons/Logo';
import stl from './style';

const Footer = () => {
  const cls = stl();
  return (
    <footer>
      <div className={cls.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <CustomLink className="d-flex align-items-end" href="/" color="initial" underline="none">
                <Logo className={cls.logo} />
                <Typography className="ml-3 text-white">
                  <strong>RTE Technologies</strong>
                </Typography>
              </CustomLink>
            </div>
            <div className="col-md-5">
              <Typography className="mb-3" color="primary" variant="subtitle1">
                <strong>Links</strong>
              </Typography>
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
                <CustomLink href="/" underline="none">
                  Terms
                </CustomLink>
                <CustomLink href="/about" underline="none">
                  Privacy
                </CustomLink>
              </nav>
            </div>
            <div className="col-md-3">
              <Typography className="mb-3" color="primary" variant="subtitle1">
                <strong>Suivez-nous</strong>
              </Typography>
              <Box p={1} component="nav">
                <Link href="https://www.facebook.com" className="mr-3">
                  <Facebook htmlColor="#fff" />
                </Link>
                <Link href="https://www.linkedin.com" className="mr-3">
                  <LinkedIn htmlColor="#fff" />
                </Link>
                <Link href="https://www.linkedin.com" className="mr-3">
                  <Twitter htmlColor="#fff" />
                </Link>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.copyright}>
        <Typography variant="body2">&copy; Copyright {new Date().getFullYear()} RTE Technologie</Typography>
      </div>
    </footer>
  );
};

export default Footer;
