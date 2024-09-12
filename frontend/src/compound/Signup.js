import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formdata, setFormdata] = useState({
    UserName: '',
    Email: '',
    Password: '',
  });

  const [fieldErrors, setFieldErrors] = useState({
    UserName: '',
    Email: '',
    Password: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    const hasErrors = validateForm();

    if (hasErrors) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/adddata', formdata);
      if (response.status === 200) {
        alert("Success");
        setFormdata({
          UserName: '',
          Email: '',
          Password: '',
        });
      }
    } catch (error) {
      console.error("Error: ", error);
      alert("An error occurred during sign-up");
    }
  };

  const validateForm = () => {
    let hasErrors = false;
    const errors = {};

    if (!formdata.UserName) {
      errors.UserName = 'Please fill in this field';
      hasErrors = true;
    }

    if (!formdata.Email) {
      errors.Email = 'Please fill in this field';
      hasErrors = true;
    }

    if (!formdata.Password) {
      errors.Password = 'Please fill in this field';
      hasErrors = true;
    }

    setFieldErrors(errors);
    return hasErrors;
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleSignup}>
          <h1>Sign-Up</h1>
          <div>
            <label htmlFor="userNameInput">Username:</label>
            <input
              type="text"
              id="userNameInput"
              name="name"
              style={{ width: '100%' }}
              value={formdata.UserName}
              onChange={(e) => {
                setFormdata({ ...formdata, UserName: e.target.value });
                setFieldErrors({ ...fieldErrors, UserName: '' });
              }}
            />
            <span className="error-message">{fieldErrors.UserName}</span>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="Email"
              style={{ width: '100%' }}
              value={formdata.Email}
              onChange={(e) => {
                setFormdata({ ...formdata, Email: e.target.value });
                setFieldErrors({ ...fieldErrors, Email: '' });
              }}
            />
            <span className="error-message">{fieldErrors.Email}</span>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="Password"
              value={formdata.Password}
              style={{ width: '100%' }}
              onChange={(e) => {
                setFormdata({ ...formdata, Password: e.target.value });
                setFieldErrors({ ...fieldErrors, Password: '' });
              }}
            />
            <span className="error-message">{fieldErrors.Password}</span>
          </div><br />
          <button className='btn btn-success w-100'>Sign up</button>
          <p>You agree to our terms and policies</p>
          <a href="/Login" className='btn btn-default border w-100 bg-light text-decoration-none'>Login</a>
        </form>
      </div>
    </div>
  );
}

export default Signup;
