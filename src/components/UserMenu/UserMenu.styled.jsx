import styled from 'styled-components';
import { Button } from '@mui/material';

export const UserMenuContainer = styled.div`
  display: flex;
  flex-basis: 300px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #333;
`;

export const StyledButton = styled(Button)`
  && {
    height: 30px;
    color: #007aff;
    border-color: #007aff;

    &:hover {
      border-color: #005bb5;
      color: #005bb5;
    }
  }
`;