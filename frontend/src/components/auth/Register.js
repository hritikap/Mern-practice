import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthStyled } from './Auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    try {
      const res = await response.json();
      console.log(res);
      window.location.href = '/login';
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthStyled>
      <form onSubmit={handleSubmit} className='loginContainer'>
        <>
          <label>Name</label>
          <input
            type='text'
            autoFocus
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </>

        <>
          <label>Email</label>
          <input
            type='text'
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <p className='errorMsg'>{emailError}</p> */}
          <label>Password</label>
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <p className='errorMsg'>{passwordError}</p> */}
        </>

        <div className='btnContainer'>
          <button>register</button>
        </div>

        <>
          <p>
            Already have an account?
            <span>
              <Link to='/login'>Login</Link>
            </span>
          </p>
        </>
      </form>
    </AuthStyled>
  );
};

export default Register;
