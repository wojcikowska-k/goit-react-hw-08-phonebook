import './Login.css';

import { Helmet } from 'react-helmet';

import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => (
  <div className="login">
    <Helmet>
      <title>Login</title>
    </Helmet>
    <LoginForm />
  </div>
);
export default Login;
