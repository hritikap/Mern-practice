import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/pages/Home/Home';
import Profile from './components/pages/Home/Profile';
import Sidebar from './components/Sidebar';
import Inbox from './components/pages/Inbox';
import Sent from './components/pages/Sent';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box
  }

  a {
    color: white;
    text-decoration:none
  }

`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/inbox' component={Inbox} />
        <Route path='/sent-mails' component={Sent} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
