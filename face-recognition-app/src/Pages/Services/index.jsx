import React from "react";
import mobile from "../../store/mobile.svg";
import verification from "../../store/verification.svg";
import services from "../../store/services.PNG";
import fingerprint from "../../store/fingerprint.svg";
import beforeAccess from "../../store/beforeAccess.png";
import access from "../../store/access.PNG";
import details from "../../store/details.PNG";
import detailsInfo from "../../store/detailsInfo.svg";
import Footer from "../../Components/Footer";
import "./index.css";

function Services() {
  return (
    <div>
      <section className="services">
        <div className="services-inside">
          <h1>Our Services</h1>
          <div className="header-underline"></div>
          <p>
            We provide you the best options and services to suit your
            convenience while ensuring adequate safety measures are in check
          </p>
        </div>
        <div className="box-image-1">
          <img src={services} alt="" />
        </div>
      </section>

      <section className="mobile-view">
        <div className="box-image-2">
          <img src={mobile} alt="image of a mobile phone" />
        </div>
        <div className="box-one">
          <h3>Mobile view</h3>
          <p>
            Access to login and confirm ward's pickup on the go using the mobile
            app option
          </p>
        </div>
        <div className="box-two">
          <p id="second-p">
            The app gives an explicit access to the parents to use their mobile
            phone wherever they are to check, and confirm their wards pickup,
            and also to know when their ward was picked up by whoever they sent.
          </p>
        </div>
      </section>

      <section className="fingerprint-verification">
        <div className="box-image-3">
          <img src={fingerprint} alt="fingerprint image" />
        </div>
        <div className="box-one">
          <h3>Fingerprint Verification</h3>
          <p>App is secured using the fingerprint verification option</p>
        </div>
        <div className="box-two">
          <p id="second-p">
            The Fingerprint verification is to ensure that only the parents have
            exclusive access to the app on their mobile. The security is
            tailored to each parent's unique fingerprint.
          </p>
        </div>
      </section>

      <section className="access">
        <div className="box-image-4">
          <img
            src={beforeAccess}
            alt="two people with communication devices between them"
          />
        </div>

        <div className="box-image-4">
          <img src={access} alt="access to information" />
        </div>

        <div className="box-one">
          <h3>Ease of Access</h3>
          <p>It allows users update basic information via App</p>
        </div>

        <div className="box-two">
          <p id="second-p">
            The main aim of the app is easy navigation for the parents, so that
            they can know, understand and be able to use the basic function the
            app offers.
          </p>
        </div>
      </section>

      <section className="detail">
        <div className="box-image-5">
          <img src={detailsInfo} alt="image of text" />
        </div>

        <div className="box-one">
          <h3>Details Info</h3>
          <p>
            Facial scan as primary mode of identification for verifyig
            Parent/Guardian
          </p>
        </div>

        <div className="box-two">
          <p id="second-p">
            The main aim of the app is easy navigation for the parents, so that
            they can know, understand and be able to use the basic function the
            app offers. It also stores the details of every parent/guardian and
            their wards on the school database.
          </p>
        </div>
      </section>

      <section className="two-verification">
        <div className="box-image">
          <img src={verification} alt="image of linked computers" />
        </div>

        <div className="box-one">
          <h3>Two-step Verification</h3>
          <p>
            Your account is kept safe using this feature hence reducing
            unauthorized access to information leak
          </p>
        </div>

        <div className="box-two">
          <p id="second-p">
            This feature is to strengthen the security of the app so as to
            prevent unathorized access, to notify the school authorities and the
            owner of the account being tampered with. A security app must be
            double secured.
          </p>
        </div>
      </section>

      <section className="tracking">
        <div className="box-image-5">
          <img src={details} alt="image of text" />
        </div>

        <div className="box-one">
          <h3>Tracking</h3>
          <p>Schools can keep track of each student's activities</p>
        </div>

        <div className="box-two">
          <p id="second-p">
            It helps the school management to keep track of students in school
            and also to be able to know when they’ve left school.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
