import clsx from 'clsx';
import { Link } from './AuthNav.styled';

import { AuthNavContainer } from './AuthNav.styled';

const getClassName = ({ isActive }) => clsx(isActive && 'active');

const AuthNav = () => {
  return (
    <AuthNavContainer>
      <Link className={getClassName} to={'/register'}>
        Register
      </Link>
      <Link className={getClassName} to={'/login'}>
        Login
      </Link>
    </AuthNavContainer>
  );
};

export default AuthNav;
