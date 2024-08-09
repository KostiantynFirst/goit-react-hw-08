import { LoginForm } from '../../components';
import { LoginPageContainer, Title } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Title>Login</Title>
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;