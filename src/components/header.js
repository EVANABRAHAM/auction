import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="website-name">Bidwiser</div>
      <div className="login-form">
        <input type="text" placeholder="Email" id="email" />
        <input type="password" placeholder="Password" id="password" />
        <button>Login</button>
      </div>
    </header>
  );
};
export default Header;