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
import ServicesCard from "./ServicesCard";
import "./index.css";

function Services() {
    return (
        <div>
            <section className="servicespageonecontainer">
                <div className="services-inside">
                    <h1>Our Services</h1>
                    <p>
                        We provide you the best options and services to suit your
                        convenience while ensuring adequate safety measures are in check
                    </p>
                </div>
            </section>

            <section className="big-image">
                <div>
                    <img src={services} alt="" />
                </div>
            </section>

            <section className="small-details">
                <div>
                    <ServicesCard
                        description="Access to login and confirm ward's pickup on the go using the mobile
            app option"
                        image={mobile}
                        title="Mobile View"
                    />

                    <ServicesCard
                        title="Fingerprint"
                        image={fingerprint}
                        description="The Fingerprint verification is to ensure that only the parents have
            exclusive access to the app on their mobile. The security is
            tailored to each parent's unique fingerprint."
                    />
                </div>
            </section>

            <section className="small-details">
                <div>
                    <ServicesCard
                        description="The app gives an explicit access to the parents to use their mobile
            phone wherever they are to check, and confirm their wards pickup,
            and also to know when their ward was picked up by whoever they sent."
                    />
                    <ServicesCard
                        description="The Fingerprint verification is to ensure that only the parents have
            exclusive access to the app on their mobile. The security is
            tailored to each parent's unique fingerprint."
                    />
                </div>
            </section>

            <section className="big-image">
                <div>
                    <img
                        src={beforeAccess}
                        alt="two people with communication devices between them"
                    />
                </div>
            </section>

            <section className="small-details">
                <div>
                    <ServicesCard
                        title="Ease of Access"
                        description="It allows users update basic information via App"
                        image={access}
                    />

                    <ServicesCard
                        title="Details Info"
                        description="Facial scan as primary mode of identification for verifyig
            Parent/Guardian"
                        image={detailsInfo}
                    />
                </div>
            </section>

            <section className="small-details">
                <div>
                    <ServicesCard
                        description="The main aim of the app is easy navigation for the parents, so that
            they can know, understand and be able to use the basic function the
            app offers."
                    />
                    <ServicesCard
                        description="The main aim of the app is easy navigation for the parents, so that
            they can know, understand and be able to use the basic function the
            app offers. It also stores the details of every parent/guardian and
            their wards on the school database."
                    />
                </div>
            </section>

            <section className="small-details">
                <div>
                    <ServicesCard
                        title="Two-step Verification"
                        description="Your account is kept safe using this feature hence reducing
            unauthorized access to information leak"
                        image={verification}
                    />

                    <ServicesCard
                        title="Tracking"
                        description="Schools can keep track of each student's activities"
                        image={details}
                    />
                </div>
            </section>

            <section className="small-details">
                <div>
                    <ServicesCard
                        description="This feature is to strengthen the security of the app so as to
            prevent unathorized access, to notify the school authorities and the
            owner of the account being tampered with. A security app must be
            double secured.
"
                    />
                    <ServicesCard description="It helps the school management to keep track of students in school" />
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Services;