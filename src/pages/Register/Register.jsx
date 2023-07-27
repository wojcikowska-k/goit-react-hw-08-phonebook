import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const Register = () => (
  <div>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <RegisterForm />
  </div>
);
