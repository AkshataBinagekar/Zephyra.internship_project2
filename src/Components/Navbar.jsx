import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-links">
          <li className="nav-item active">Women</li>
          <li className="nav-item">Men</li>
          <li className="nav-item">Kids</li>
        </ul>
        <ul className="nav-icons">
          <li className="nav-item">EN</li>
          <li className="nav-item"><i className="fa fa-globe"></i></li>
          <li className="nav-item"><i className="fa fa-user"></i></li>
          <li className="nav-item"><i className="fa fa-heart"></i></li>
          <li className="nav-item"><i className="fa fa-shopping-bag"></i></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

