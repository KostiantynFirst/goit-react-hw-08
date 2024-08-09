import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  flex-basis: 150px;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0 10px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  text-decoration: none;

  &.active {
    color: #007aff;
    text-decoration: underline;
  }

  &:hover {
    color: #007aff;
  }
`;