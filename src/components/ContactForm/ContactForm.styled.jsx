import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';
import { Button } from '@mui/material';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid #d1d1d6;
  border-radius: 12px;
  background-color: #f9f9f9;
  width: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputField = styled(Field)`
  height: 40px;
  padding: 8px;
  border: 1px solid #d1d1d6;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 16px;
  color: #333;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #007aff;
    outline: none;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: #ff3b30;
  font-size: 14px;
`;

export const SubmitButton = styled(Button)`
  && {
    height: 45px;
    margin-top: 10px;
    background-color: #007aff;
    color: white;
    border-radius: 8px;
    font-weight: 500;

    &:hover {
      background-color: #0066cc;
    }
  }
`;