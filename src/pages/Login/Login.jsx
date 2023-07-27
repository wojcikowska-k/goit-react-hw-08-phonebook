import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const Login = () => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <LoginForm />
  </div>
);
