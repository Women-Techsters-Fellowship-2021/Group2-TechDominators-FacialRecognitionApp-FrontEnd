import React from 'react';
import { useState } from 'react';
// import { toast } from 'react-toastify';

function AddNewUser() {
    const initialValues = {
        StudentName: "",
        Age: "",
        Class: "",
        Address: "",
        Country: "",
        StudentPhoto: "",
        ParentName: "",
        ParentEmail: "",
        ParentPhonenumber: ""
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

    return (
        <div>
            <form action="">
                <div id="signinform-group" className="email">
                    <label htmlFor="">Student Name</label>
                    <input
                        type="text"
                        name="StudentName"
                        label="StudentName"
                        value={values.StudentName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div id="signinform-group">
                    <label htmlFor="">Age</label>
                    <input
                        type="number"
                        name="Age"
                        label="Age"
                        value={values.Age}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div id="signinform-group">
                    <label htmlFor="">Class</label>
                    <input
                        type="text"
                        name="Class"
                        label="Class"
                        value={values.Class}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div id="signinform-group">
                    <label htmlFor="">Address</label>
                    <input
                        type="text"
                        name="Address"
                        label="Address"
                        value={values.Address}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-input-field">
                    <label htmlFor="Country">Country</label>
                    <select name="Country" id="country" className="donor-text-input"
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
                <div id="signinform-group">
                    <label htmlFor="">Student Photo Upload</label>
                    <input
                        type="file"
                        name="StudentPhoto"
                        label="StudentPhoto"
                        value={values.StudentPhoto}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div id="signinform-group">
                    <label htmlFor="">Parent Name</label>
                    <input
                        type="text"
                        name="ParentName"
                        label="ParentName"
                        value={values.ParentName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div id="signinform-group">
                    <label htmlFor="">Contact Email</label>
                    <input
                        type="email"
                        name="ParentEmail"
                        label="ParentEmail"
                        value={values.ParentEmail}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div id="signinform-group">
                    <label htmlFor="">Contact Phonenumber</label>
                    <input
                        type="number"
                        name="ParentPhonenumber"
                        label="ParentPhonenumber"
                        value={values.ParentPhonenumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button id="signin_submit_btn" type="submit" value="" >
                    SAVE CHANGES </button>

            </form>

        </div>

    );
}

export default AddNewUser;