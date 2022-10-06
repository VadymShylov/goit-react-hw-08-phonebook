import Form from 'components/Form/Form';
import LinkGoBack from 'components/LinkGoBack/LinkGoBack';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = data => dispatch(registerThunk(data));

  return (
    <>
      <Form
        title={'Registration'}
        titleSubmit={'Sign up'}
        register
        cbSubmit={handleFormSubmit}
      />
      <LinkGoBack />
    </>
  );
};

export default RegisterPage;
