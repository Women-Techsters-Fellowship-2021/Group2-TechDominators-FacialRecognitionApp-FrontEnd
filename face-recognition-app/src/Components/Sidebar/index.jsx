import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function SideBar() {
    return (
        <div id="side-bar-links-container">
            <ul id="side-bar-links">

                <li>
                    <Link to='/addnewuser' >Add New Student</Link>
                </li>
                <li>
                    <Link to='/parent-form' >Add Parent/Guardian</Link>
                </li>

                <li>
                    <Link to='/face-scan' > Face Scan</Link>
                </li>
                <li>
                    <Link to='/' > Log Out</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;