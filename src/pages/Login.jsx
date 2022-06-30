import React from 'react';

import Google from '../assets/img/google.png';
import Facebook from '../assets/img/facebook.png';
import Github from '../assets/img/github.png';

export const Login = () => {
  const googleHandler = () => {
    window.open('http://localhost:4000/auth/google', '_self');
  };

  const githubHandler = () => {
    window.open('http://localhost:4000/auth/github', '_self');
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton googleButton" onClick={googleHandler}>
            <img src={Google} alt="google" className="icon" />
            Google
          </div>
          <div className="loginButton facebookButton">
            <img src={Facebook} alt="Facebook" className="icon" />
            Facebook
          </div>
          <div className="loginButton githubButton" onClick={githubHandler}>
            <img src={Github} alt="Github" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};
