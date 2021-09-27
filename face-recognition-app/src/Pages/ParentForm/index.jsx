import React from 'react';
import { useState } from 'react';
import './index.css';
function ParentForm() {
    const initialValues = {
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
        <div id="parentuserformcontainer">
            <form action="" id="parentaddnewuserform">
                <div id="parentadduserformgroup">
                    <label htmlFor="">Guardian Name</label>
                    <input
                        type="text"
                        name="ParentName"
                        label="ParentName"
                        value={values.ParentName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div id="parentadduserformgroup">
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
                <div id="parentadduserformgroup">
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
                <button id="parentadduser_submit_btn" type="submit" value="" >
                    SAVE </button>
            </form>
        </div>
    );
}

export default ParentForm;