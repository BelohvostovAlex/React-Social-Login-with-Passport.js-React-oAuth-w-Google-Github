import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';

import './app.css';
import { AppRouter } from './components/AppRouter';

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      fetch('http://localhost:4000/auth/login/success', {
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error('authentication has been failed!');
        })
        .then((res) => {
          setUser(res.user);
        })
        .catch((err) => console.log(err));
    };

    getUser();
  }, []);

  const logoutHandler = () => {
    setUser(null);
    window.open('http://localhost:4000/auth/logout', '_self');
  };

  console.log(user);
  return (
    <div className="app">
      <Navbar user={user} logoutHandler={logoutHandler} />
      <AppRouter user={user} />
    </div>
  );
};
