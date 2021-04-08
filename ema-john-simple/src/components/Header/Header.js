import React from 'react';
import img from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={img} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Oder Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;