import React, { useRef } from 'react';
import axios from 'axios';

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value
    };

    try {
      const response = await axios.post('http://localhost:8000/api/auth/register', data);
      if (response.status === 201) {
        window.location = '/login';
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Register-container">
      <h1 className="Register-title">Register</h1>
      <form className="Register-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label className="Register-label" htmlFor="email">Email address</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control Register-input"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label className="Register-label" htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control Register-input"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group">
          <label className="Register-label" htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            className="form-control Register-input"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary Register-submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
