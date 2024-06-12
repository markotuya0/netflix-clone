import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.jpeg';
import userIcon from '../../assets/images/user.jpeg';

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Netflix Logo" />
      <img className="header__userIcon" src={userIcon} alt="User Icon" />
    </div>
  );
};

export default Header;
