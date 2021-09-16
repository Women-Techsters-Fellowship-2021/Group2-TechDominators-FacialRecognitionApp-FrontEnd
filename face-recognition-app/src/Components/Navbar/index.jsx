import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../store/logo.svg';
import logo2 from '../../store/logo2.svg';
import ss from '../../store/ss.svg';
import './Navbar.css';
//import {Router} from 'react-router-dom';

function Navbar() {
    return (

        // <header className={classes.header}>

        <div id="navbar">
            <nav id="nav-content">
                <div id="nav-content-images">
                    <div id="first-logo-nav">
                        <img src={logo2} alt="" />
                    </div>
                    <div id="second-logo-nav">
                        <img id="second-logo-nav-one" src={logo} alt="" />
                        <img src={ss} alt="" />
                    </div>
                </div>
                <ul id="nav-links">
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/services' >Services</Link>
                    </li>
                    <li>
                        <Link to='/contactus' >Contact Us</Link>
                    </li>

                    <li>
                        <Link to='/Login' > Sign In</Link>
                    </li>
                    <li>
                        <Link id="sign-up-now-link" to='/sign-up' style={{ color: "white", fontWeight: "bold" }} >Sign Up</Link>
                    </li>
                </ul>

            </nav>

        </div>
        // </header>

    );
}

export default Navbar;