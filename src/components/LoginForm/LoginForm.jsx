import { Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

import { StyledForm, StyledLabel, StyledField, StyledButton } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (value) => {
    dispatch(login(value));
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <StyledForm>
        <StyledLabel htmlFor={emailId}>Email:</StyledLabel>
        <StyledField id={emailId} type="email" name="email" />

        <StyledLabel htmlFor={passwordId}>Password:</StyledLabel>
        <StyledField id={passwordId} type="password" name="password" />

        <StyledButton type="submit" variant="contained">
          Login
        </StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;