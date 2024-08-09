import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { RegistrationPageContainer, Title } from './RegistrationPage.styled';

const RegistrationPage = () => {
  return (
    <RegistrationPageContainer>
      <Title>Sign Up</Title>
      <RegistrationForm />
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;