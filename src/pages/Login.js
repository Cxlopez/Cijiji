import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', {
        email,
        password,
      });
      console.log(response.data);
      
      const { message, token } = response.data;
      if (message === 'User logged in successfully!' && token) {
        Cookies.set('loggedIn', true, {sameSite: 'strict', secure: false});
        Cookies.set('token', token, {sameSite: 'strict', secure: false});
        console.log('Cookies set:', Cookies.get('loggedIn'), Cookies.get('token'));
        window.location = '/post';
      } else {
        console.error('Invalid response from server:', response);
      }
    } catch (error) {
      console.log(error.message);
      console.error('Error logging in user:', error);
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