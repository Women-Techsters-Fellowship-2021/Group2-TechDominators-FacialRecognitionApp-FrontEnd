import React from 'react';
import faceone from '../../store/faceone.svg';
import Card from '../../Components/Card';
import { data } from '../../store/data';
import './index.css';
import image from '../../store/image 11.svg';
import getgoogleplay from '../../store/getgoogleplay.png';
import appstore from '../../store/appstore.png';
import trafalgar from '../../store/trafalgar.svg';
import left from '../../store/left-arrows.png';
import right from '../../store/right-arrows.svg';

import './index.css';
import Footer from '../../Components/Footer';

function Landing() {
    return (
        <div>
            <section className="first-section">
                <div className="first-section-inside">
                    <div className="first-section-content">
                        <div className="first-section-contents">
                            <h2>Facial Recognition <br /> App for Schools</h2>
                            <p>Reflex ID provides schools a more <br /> secured
                                verification platform for <br /> parents and guardians
                                come over <br /> to pick up their wards from schools</p>
                            <div className="first-section-btn">
                                <a href="/sign-up">Sign Up Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="first-section-image">
                        <img src={faceone} alt="" />
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <h1> Our Services </h1>
                <div id="services-line"></div>
                <h5>We provide you the best options and services to suit your convenience while ensuring <br /> adequate safety measures are in check.</h5>
                <div className="services-div">
                    <div className="services-div-cards">
                        {data.map(({ image, title, description }) => (
                            <Card image={image} title={title} description={description} />
                        ))}
                    </div>
                </div>
                <div className="services-btn">
                    <a href="/services">Learn More</a>
                </div>


            </section>

            <section className="features" id="features">
                <div className="features-inside">
                    <div className="features-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="features-content">
                        <div className="features-contents">
                            <h1>Facial Recognition Feature</h1>
                            <div id="features-line"></div>
                            <p>Reflex ID possses the facial scab feature <br /> which uses the 3D face unlocking feature.</p>
                            <button className="features-btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Mobile-app" id="Mobile-app">
                <div className="Mobile-app-inside">
                    <div className="Mobile-app-content">
                        <div className="Mobile-app-contents">
                            <h1>Worry less and stay security conscious with our mobile app</h1>
                            <p>If you are ever concerned about your child's activities while in school, explore our mobile-friendly app tohelp you learn how to keep track.</p>

                            <div id="mobile-app-images">
                                <img id="mobile-app-images-one" src={getgoogleplay} alt="" />

                                <img id="mobile-app-images-two" src={appstore} alt="" />
                            </div>
                            <p className="orange">IOS and Android apps coming soon!</p>
                        </div>
                    </div>

                    <div className="Mobile-app-image">
                        <img src={trafalgar} alt="" />
                    </div>
                </div>

            </section>
            <section className="Testimonials">

                <div className="Testimonials-box">
                    <div className="Testimonials-heading">
                        <h1>What our users are saying</h1>
                        <div className="Testimonials-line"></div>
                    </div>
                    <div className="Testimonials-contents" >
                        <div className="Testimonials-inside">
                            <img src="https://miro.medium.com/max/2000/1*CadPWIt6C8Ef0k5u9TOFyw.jpeg" alt="" />
                            <div className="Testimonials-content">
                                <h3>Edward Newgate</h3>
                                <p>Parent</p>
                            </div>
                        </div>
                        <p>"App is easy to navigate and I feel safer knowing that I am in charge of authorizing and confirming who comes to pick up my son."</p>
                    </div>
                </div>
                <div>
                    {/* <!-- Next and previous buttons --> */}
                    <a className="testimonials-prev" href="/testimonials"><img src={left} alt="" /></a>
                    {/* <!-- The dots/circles --> */}

                    <span className="testimonials-dot"></span>
                    <span className="testimonials-dot"></span>
                    <span className="testimonials-dot"></span>

                    <a className="testimonials-prev" href="/testimonials" ><img src={right} alt="" /></a>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />


        </div>

    );
}

export default Landing;