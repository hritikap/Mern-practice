import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from './types';

const LoginStart = (userCredentials) => ({
  type: LOGIN_START,
});

const LoginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });

const LoginFailure = () => ({ type: LOGIN_FAILURE });

const Logout = () => ({ type: LOGOUT });

export { LoginFailure, LoginStart, LoginSuccess, Logout };
