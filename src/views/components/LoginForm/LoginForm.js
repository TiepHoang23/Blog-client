import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGIN_MUTATION from '../../../services/apollo/mutation/login';
import './LoginForm.css';

const LoginForm = () => {
  // Form data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [Error, setError] = useState(null);
  const [Login] = useMutation(LOGIN_MUTATION, {
    variables: { username, password },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error, data } = await Login();
    if (error) {
      setError({
        isSuccess: false,
        message: error.message,
      });
      return;
    }
    if (!data.login.isSuccess) {
      setError({
        isSuccess: false,
        message: data.login.message,
      });
      return;
    }
    localStorage.setItem('token', data.login.token);
    navigate('/');
  };

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleLogin}>
        <h2 className='login-title'>Login to your account</h2>

        <label htmlFor='username' className='form-label'>
          Username
        </label>
        <input
          type='text'
          name='username'
          className='form-input'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          type='password'
          name='password'
          className='form-input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button className='button'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
