import { Helmet } from 'react-helmet';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => (
  <div>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <RegisterForm />
  </div>
);
export default Register;
