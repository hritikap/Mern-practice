import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import { AuthStyled } from './Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

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
      await response.json();
      localStorage.setItem('firstLogin', true);
      // history.push('/');
      window.location.href = '/';
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
