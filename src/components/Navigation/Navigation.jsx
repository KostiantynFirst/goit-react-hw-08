import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';

import { NavigationContainer, Link } from './Navigation.styled';

const getClassName = ({ isActive }) => clsx(isActive && 'active');

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      <ul>
        <li>
          <Link className={getClassName} to={'/'}>
            Home
          </Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link className={getClassName} to={'/contacts'}>
              Contacts
            </Link>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;