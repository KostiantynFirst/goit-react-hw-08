import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Formik } from 'formik';

import { FormContainer, FormItem, InputField, ErrorText, SubmitButton } from './ContactForm.styled';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Z][a-zA-Z]*( [A-Z][a-zA-Z]*)+$/,
      'Name must consist of two or more words separated by a space, where each word starts with a capital letter'
    )
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name must be at most 30 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Phone number must be at least 3 characters')
    .max(30, 'Phone number must be at most 30 characters')
    .required('Phone number is required')
    .matches(
      /^[\d\s\(\)\-\+]+$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <FormContainer>
        <FormItem>
          <label htmlFor={nameId}>Name</label>
          <InputField
            type="text"
            name="name"
            id={nameId}
          />
          <ErrorText name="name" component="span" />
        </FormItem>
        <FormItem>
          <label htmlFor={numberId}>Number</label>
          <InputField
            type="text"
            name="number"
            id={numberId}
          />
          <ErrorText name="number" component="span" />
        </FormItem>
        <SubmitButton type="submit" variant="contained">
          Add Contact
        </SubmitButton>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;