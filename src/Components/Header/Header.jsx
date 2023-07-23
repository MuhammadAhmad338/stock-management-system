import React from 'react';
import image1 from '../../assets/graph.png';
import './Header.css';

const Header = () => {
  return (
    <header>
    <div className="logo">
      <img src={image1} height={50} width={50} alt="Stock Management System Logo" />
      <h1>Stock Management System</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Inventory</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  </header>
  );
}

export default Header