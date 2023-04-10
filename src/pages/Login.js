import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8000/api/auth/login', {
      email,
      password,
    });

    if (response && response.data && response.data.user) {
      const userId = response.data.user.id || ''; // set default value to empty string
      Cookies.set('loggedIn', true);
      Cookies.set('userId', userId);
      window.location = '/post';
    } else {
      console.error('Invalid response from server:', response);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;