import React from 'react';
import facebook from '../../store/facebook.png';
import youtube from '../../store/youtube.png';
import linkedin from '../../store/linkedin.png';
import './index.css';

function Footer() {
    return (
        <div>
            <footer className="reflex-footer">
                <div className="reflex-l-footer">
                    <h1>
                        REFLEX ID</h1>
                    <p>
                        Reflex Id provides schools a more <br /> secured verification platform for <br /> parents and guardians. </p>
                </div>
                <ul className="reflex-r-footer">
                    <li>
                        <h2>
                            Company</h2>
                        <ul className="reflex-box">
                            <li><a href="/">About</a></li>
                            <li><a href="/">Testimonials</a></li>
                            <li><a href="/">Apps</a></li>
                        </ul>
                    </li>
                    <li className="reflex-features">
                        <h2>
                            Region</h2>
                        <ul className="reflex-box h-box">
                            <li><a href="/">Nigeria</a></li>
                            <li><a href="/">South Africa</a></li>
                            <li><a href="/">United States</a></li>
                            <li><a href="/">Canada</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>
                            Help</h2>
                        <ul className="reflex-box">
                            <li><a href="/">Help Center</a></li>
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Terms of Use</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="reflex-sf-footer">
                    <h2>Follow Us On: </h2>
                    <div className="reflex-sf-footer-images">
                        <a href="https://web.facebook.com/"><img src={facebook} alt="" /></a>
                        <a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a>
                        <a href="https://www.youtube.com/"><img src={youtube} alt="" /></a>

                    </div>
                </div>
                <div className="reflex-b-footer">
                    <p>
                        © ReflexID Corporation 2021. All rights reserved. </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;