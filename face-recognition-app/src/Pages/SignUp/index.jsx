import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import Navbar from '../../Components/Navbar';
import Group from '../../store/Group 14.svg';
import './index.css';

function SignUp() {

    const signUpHistory = useHistory();
    const initialValues = {
        SchoolName: "",
        Location: "",
        Country: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
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

    // handle input form submission
    function handleInputSubmission() {

        // e.preventDefault();

        // POST request using fetch inside useEffect React hook
        const url = 'https://localhost:5001/api/v1/Authentication';

        fetch(url, {
            // Adding method type
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify({
                SchoolName: values.SchoolName,
                Location: values.Location,
                Country: values.Country,
                Email: values.Email,
                Password: values.Password,
                ConfirmPassword: values.ConfirmPassword
            }),
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            // Converting to JSON
            .then(response => response.json())
            // Displaying results to console
            .then(json => console.log(json))
            .catch(error => {
                // Handle error 
                console.log('Error message: ', error);
            });
        signUpHistory.push('/Login');
    }

    return (
        <div>
            {/* <Navbar /> */}
            <div className="main-sign-up">
                <div className="sign_up_container">

                    <form action="" onSubmit={handleInputSubmission}>
                        <h2>Sign Up</h2>
                        {/* <a href="/" className="back-link">Back</a> */}
                        <div classname="sign_group">
                            <label htmlFor="">SCHOOL NAME</label>
                            <input
                                type="text"
                                name="SchoolName"
                                label="SchoolName"
                                value={values.SchoolName}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label htmlFor="">LOCATION</label>
                            <input
                                type="text"
                                name="Location"
                                label="Location"
                                value={values.Location}
                                onChange={handleInputChange}
                                required />

                        </div>
                        <div>
                            <label htmlFor="">COUNTRY</label>
                            <select name="Country"
                                value={values.Country}
                                onChange={handleInputChange}
                                required >
                                <option value="Egypt"> Egypt</option>
                                <option value="Ghana"> Ghana</option>
                                <option value="Kenya"> Kenya</option>
                                <option value="Nigeria"> Nigeria</option>
                                <option value="SouthAfrica"> SouthAfrica</option>
                            </select>
                        </div>
                        <div className="email_sign_up">
                            <label htmlFor="">EMAIL</label>
                            <input
                                required
                                type="text"
                                name="Email"
                                label="Email"
                                value={values.Email}
                                onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="">PASSWORD</label>
                            <input
                                type="password"
                                name="Password"
                                label="Password"
                                value={values.Password}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label htmlFor="">CONFIRM PASSWORD</label>
                            <input
                                type="password"
                                name="ConfirmPassword"
                                label="ConfirmPassword"
                                value={values.ConfirmPassword}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <input type="checkbox" className="checked" required />
                            <span class="checkmark">I Agree to the terms and conditions</span>
                        </div>
                        <button className="sign_up_submit" type="submit" value="" >
                            SIGN UP</button>

                        <p>Already have an Account? <a href="/Login">Sign In</a></p>
                    </form>
                    <div className="sign_up_image">
                        <img src={Group} alt="" />
                        <h1>Experience the brand new Reflex ID</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

