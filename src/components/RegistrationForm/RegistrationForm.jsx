import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useId } from 'react';
import { register } from '../../redux/auth/operations';

import { StyledForm, StyledLabel, StyledField, StyledButton } from './RegistrationForm.styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledLabel htmlFor={nameId}>Name:</StyledLabel>
        <StyledField id={nameId} type="text" name="name" />

        <StyledLabel htmlFor={emailId}>Email:</StyledLabel>
        <StyledField id={emailId} type="email" name="email" />

        <StyledLabel htmlFor={passwordId}>Password:</StyledLabel>
        <StyledField id={passwordId} type="password" name="password" />

        <StyledButton type="submit" variant="contained">
          Register
        </StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default RegistrationForm;