import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthStyled } from './Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    try {
      const res = await response.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthStyled>
      <form onSubmit={handleSubmit} className='loginContainer'>
        <>
          <label>Email</label>
          <input
            type='text'
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
        <div className='btnContainer'>
          <button>login</button>
        </div>

        <>
          <p>
            Dont have an account?
            <span>
              <Link to='/register'>Register</Link>
            </span>
          </p>
        </>
      </form>
    </AuthStyled>
  );
};

export default Login;
