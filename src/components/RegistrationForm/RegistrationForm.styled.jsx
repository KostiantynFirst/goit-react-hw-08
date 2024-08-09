import { Field, Form } from 'formik';
import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 320px;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export const StyledField = styled(Field)`
  line-height: 1.5;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 20px;
  background-color: #fff;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007aff;
    outline: none;
  }
`;

export const StyledButton = styled(Button)`
  height: 44px;
  background-color: #007aff !important;
  border-radius: 8px;
  font-weight: 600;
  text-transform: none;
  color: #fff;
  margin-top: 10px;

  &:hover,
  &:focus {
    background-color: #005bb5 !important;
  }
`;