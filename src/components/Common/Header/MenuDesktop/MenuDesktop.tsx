import CustomLink from '../../CustomLink';
import stl from './style';

const MenuDesktop = () => {
  const cls = stl();

  return (
    <>
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
      </div>
    </>
  );
};

export default MenuDesktop;
