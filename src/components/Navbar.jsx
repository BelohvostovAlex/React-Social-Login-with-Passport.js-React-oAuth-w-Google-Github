import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ user, logoutHandler }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="link">
          Alex's App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="avatar" className="avatar" />
          </li>
          <li className="listItem">{user.displayName || user.username}</li>
          <li className="listItem" onClick={logoutHandler}>
            Logout
          </li>
        </ul>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};
