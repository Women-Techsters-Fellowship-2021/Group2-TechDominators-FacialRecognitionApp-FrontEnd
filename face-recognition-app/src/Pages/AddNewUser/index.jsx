import React from 'react';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import './index.css';

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
        <div id="addnewuserformcontainer">
            <form action="" id="addnewuserform">
                <div id="adduserformgroup" className="email">
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
                <div id="adduserageandclass">
                    <div id="adduserformgroup">
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
                    <div id="adduserformgroup">
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
                </div>
                <div id="adduseraddressandcountry">
                    <div id="adduserformgroup">
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
                    <div id="adduserformgroup">
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
                </div>
                <div id="adduserformgroup">
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
                <div id="adduserformgroup">
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
                <div id="adduserformgroup">
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
                <div id="adduserformgroup">
                    <label htmlFor="">Contact Phonenumber</label>
                    <input
                        type="text"
                        name="ParentPhonenumber"
                        label="ParentPhonenumber"
                        value={values.ParentPhonenumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button id="adduser_submit_btn" type="submit" value="" >
                    SAVE CHANGES </button>

            </form>

        </div>

    );
}

export default AddNewUser;