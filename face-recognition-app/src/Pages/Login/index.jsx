import React from "react";
import { useState } from "react";
import Group from '../../store/Group.9.mod.png';
import './index.css';


function Login() {

    const initialValues = {
        Email: "",
        Password: ""
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
    function HandleInputSubmission(e) {
        e.preventDefault();

        // POST request using fetch inside useEffect React hook
        const url = 'https://localhost:5001/api/v1/Authentication/login';

        fetch(url, {
            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                Email: values.Email,
                Password: values.Password
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

    }

    return (
        <div>
            <div id="signin_container">
                <div id="signin_image">
                    <img src={Group} alt="" />
                </div>
                <div id="mid-line">
                </div>
                <form action="" id="signin_container_form" onSubmit={HandleInputSubmission}>
                    <h1>Sign In To Reflex ID</h1>
                    <h4 >
                        Welcome Back!!
                    </h4>
                    <h4 >
                        Please Sign In with the data you entered in your registration.
                    </h4>
                    <div id="signinform-group" className="email">
                        <label htmlFor="">EMAIL</label>
                        <input
                            type="text"
                            name="Email"
                            label="Email"
                            value={values.Email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div id="signinform-group">
                        <label htmlFor="">PASSWORD</label>
                        <input
                            type="password"
                            name="Password"
                            label="Password"
                            value={values.Password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <h6><a id="fp-link" href="/">Forgot Password?</a></h6>

                    <button id="signin_submit_btn" type="submit" value="" >
                        SIGN IN</button>

                    <h5 >Don't have an Account?  <a id="fp-link" href="/sign-up">Sign Up</a></h5>

                </form>
            </div>

        </div>
    );
}

export default Login;

// useEffect(() => {
    //     setAppState({ loading: true });
    //     const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    //     axios.get(apiUrl).then((repos) => {
    //         const allRepos = repos.data;
    //         setAppState({ loading: false, repos: allRepos });
    //     });
    // }, [setAppState]);

     // useEffect(() => {
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);