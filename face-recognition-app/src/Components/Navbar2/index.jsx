import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../store/logo.svg';
import logo2 from '../../store/logo2.svg';
import ss from '../../store/ss.svg';
import './index.css';

function Navbar2() {
    return (

        <div id="navbar2">
            <nav id="nav2-content">
                <div id="nav2-content-images">
                    <div id="first-logo-nav2">
                        <img src={logo2} alt="" />
                    </div>
                    <div id="second-logo-nav2">
                        <img id="second-logo-nav2-one" src={logo} alt="" />
                        <img src={ss} alt="" />
                    </div>
                </div>
                <ul id="nav2-links">

                    <li>
                        <Link to='/services' >Services</Link>
                    </li>
                    <li>
                        <Link to='/contactus' >Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/' >Logout</Link>
                    </li>

                </ul>

            </nav>



        </div>
    );
}

export default Navbar2;