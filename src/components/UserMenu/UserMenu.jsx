import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

import { UserMenuContainer, StyledButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <UserMenuContainer>
      <p>Welcome, {user.name}</p>
      <StyledButton variant="outlined" onClick={handleLogout}>
        Logout
      </StyledButton>
    </UserMenuContainer>
  );
};

export default UserMenu;