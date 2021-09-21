import React from 'react';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Components/Footer';
import contactimg from '../../store/contactimg.svg';
import './index.css';

function ContactUs() {
    // const history = useHistory();

    const initialValues = {
        FullName: "",
        Email: "",
        Message: ""
    };

    const [values, setValues] = useState(initialValues);
    // handle change function
    const handleInputChange = (e) => {

        const { name, value } = e.target;
        e.preventDefault();
        setValues({
            ...values,
            [name]: value,
        });
        console.log(values);
    };
    const handleInputSubmission = (e) => {
        e.preventDefault();
        toast.success("Thank you for your input! We will get back to you shortly.");
        // history.push('/');
    }

    return (
        <div id="contact-us-section">

            <img className="contact-us-image" src={contactimg} alt="" />


            <form className="contact-us-form" onSubmit={handleInputSubmission}>
                <h1>Get in touch for more enquiries</h1>

                <p>Leave us a message, we will get back to you shortly</p>

                <label htmlFor="">Full Name</label>
                <input
                    className="contact-us-inputs"
                    type="text"
                    name="FullName"
                    label="FullName"
                    value={values.FullName}
                    onChange={handleInputChange}
                    required />


                <label htmlFor="">Email Address</label>
                <input
                    className="contact-us-inputs"
                    type="text"
                    name="Email"
                    label="Email"
                    value={values.Email}
                    onChange={handleInputChange}
                    required />


                <label htmlFor="">Message</label>
                <input
                    className="contact-us-input3"
                    type="text"
                    name="Message"
                    label="Message"
                    value={values.Message}
                    onChange={handleInputChange}
                    required />

                <input id="contact-us-btn" type="submit" value="Send" />

            </form>

            <Footer />
        </div>

    );
}
export default ContactUs;