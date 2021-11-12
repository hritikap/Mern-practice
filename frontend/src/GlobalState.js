import React, { createContext, useState, useEffect } from 'react';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const refreshToken = async () => {
    const refresh = await fetch('http://localhost:4000/api/auth/refreshToken', {
      method: 'GET',
    });

    const data = await refresh.json();
    setToken(data.accessToken);
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) refreshToken();
  }, []);

  const state = {
    token: token,
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
