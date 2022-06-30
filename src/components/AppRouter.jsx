import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Post } from '../pages/Post';

export const AppRouter = ({ user }) => {
  const publicRoutes = [{ path: '/login', element: <Login /> }];
  const privateRoutes = [
    { path: '/', element: <Home /> },
    { path: '/post/:id', element: <Post /> },
  ];
  return (
    <Routes>
      {user
        ? privateRoutes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))
        : publicRoutes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
      <Route
        path="*"
        element={user ? <Navigate to="/" /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};
