import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

const Form = ({ title, titleSubmit, register = false, cbSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    register === true
      ? cbSubmit({ name, email, password })
      : cbSubmit({ email, password });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section>
      <h2 className={s.FormTitle}>{title}</h2>
      <form className={s.Form} onSubmit={handleSubmit}>
        {register && (
          <label className={s.FormLabel}>
            Name
            <input
              className={s.FormInput}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
        )}
        <label className={s.FormLabel}>
          Email
          <input
            className={s.FormInput}
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
        <label className={s.FormLabel}>
          Password
          <input
            className={s.FormInput}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <button className={s.FormBtn} type="submit">
          {titleSubmit}
        </button>
      </form>
    </section>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  titleSubmit: PropTypes.string.isRequired,
  register: PropTypes.bool,
  cbSubmit: PropTypes.func.isRequired,
};

export default Form;
