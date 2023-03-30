import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className="header">
            <a href="/home"><img src={logo} alt="" /></a>
            <div>
                <a href="/home">Home</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;