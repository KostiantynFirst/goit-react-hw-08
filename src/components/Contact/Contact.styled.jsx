import styled from 'styled-components';
import { BsTelephoneFill } from 'react-icons/bs';

import { Button } from '@mui/material';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
`;

export const PhoneBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const PhoneIcon = styled(BsTelephoneFill)`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  color: #007aff;
`;

export const DeleteButton = styled(Button)`
  && {
    height: 30px;
    margin-top: 10px;
    color: #ffffff;
    background-color: #ff3b30;
    border: none;

    &:hover {
      background-color: #ff1e1e;
    }
  }
`;