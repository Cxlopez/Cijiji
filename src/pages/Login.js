import React, { useRef } from 'react';
import axios from 'axios';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin(event) {
    event.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', data);
      if (response.status === 200) {
        window.location = '/myCijiji';
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Login-container">
      <h1 className="Login-title">Login</h1>
      <form className="Login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label className="Login-label" htmlFor="email">Email address</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control Login-input"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label className="Login-label" htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control Login-input"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary Login-submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

