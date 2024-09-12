import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      if (user === 'Laxmi') {
        window.location.href = '/video';
      } else {
        window.location.href = '/Nav';
      }
    }
  }, []);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if email and password are valid
    if (!Email || Password.length < 6) {
      setErrorMessage('Email is required, and password must be at least 6 characters.');
      return;
    }

    // Check if email and password match the hardcoded values
    if (Email === 'Laxmi@gmail.com' && Password === 'Veera@1234') {
      localStorage.setItem('user', 'Laxmi');
      navigate("/video");
    } else {
      const userName = Email.split('@')[0]; // Use the part of the email before '@' as username
      localStorage.setItem('user', userName); // Store the username
      navigate("/Nav");
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleLogin}>
          <h1>Sign-In</h1>
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input
              className='w-100'
              type="email"
              placeholder='Enter your email'
              name="Email"
              value={Email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input
              className='w-100'
              type="password"
              placeholder='Enter your password'
              name="Password"
              value={Password}
              onChange={handlePasswordChange}
            />
          </div>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <button className='btn btn-success w-100' type="submit">
            Log in
          </button>
          <p>You agree to our terms and policies</p>
          <Link to="/Signup" className='btn btn-default border w-100 bg-light text-decoration-none'>
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}
