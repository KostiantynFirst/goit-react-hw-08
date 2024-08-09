import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.nav`
  display: flex;
  flex-basis: 150px;
  align-items: center;
  justify-content: space-between;
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