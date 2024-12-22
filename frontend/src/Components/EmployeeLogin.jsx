import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeLogin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/employee/employee_login', values)
      .then((result) => {
        if (result.data.loginStatus) {
          localStorage.setItem('valid', true);
          navigate('/employee_detail/' + result.data.id);
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  };

  const formStyle = {
    padding: '2rem',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    // textAlign: 'center',
  };

  const errorStyle = {
    color: '#dc3545',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '1rem',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

//   const checkboxStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     fontSize: '0.9rem',
//     color: '#333',
//   };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={errorStyle}>{error && error}</div>
        <h2 style={headingStyle}>Employee Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              style={inputStyle}
            />
          </div>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Log in
          </button>
          {/* <div style={checkboxStyle}>
            <input type="checkbox" name="tick" id="tick" className="me-2" />
            <label htmlFor="tick">You agree with terms & conditions</label>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
