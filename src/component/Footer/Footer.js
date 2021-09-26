import React from 'react';
import logo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <img className="my-4" src={logo} alt="" />
            <br />
            <p>Copyright © 2021 Programming-Hero</p>
        </div>
    );
};

export default Footer;