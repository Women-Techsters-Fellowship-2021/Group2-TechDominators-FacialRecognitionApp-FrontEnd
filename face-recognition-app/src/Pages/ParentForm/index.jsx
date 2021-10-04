import React from 'react';
import { useState } from 'react';
import SideBar from '../../Components/Sidebar';
// import Navbar2 from '../../Components/Navbar2';
import './index.css';

function ParentForm() {
    const initialValues = {
        StudentId: "",
        FullName: "",
        Email: "",
        PhoneNumber: "",
        ParentPhoto: ""
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

    // function for parent detail submission 
    const parentSubmit = () => {
        const urls = 'https://localhost:5001/api/v1/Parent';

        fetch(urls, {

            method: "POST",
            body: JSON.stringify({
                StudentId: values.StudentId,
                FullName: values.FullName,
                Email: values.Email,
                PhoneNumber: values.PhoneNumber,
                ParentPhoto: values.ParentPhoto
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => {
                console.log('Error message: ', error);
            });
    }

    return (
        <div id="parentuserformcontainermain">
            < SideBar />

            <div id="parentuserformcontainer">

                <form action="" id="parentaddnewuserform" onSubmit={parentSubmit}>
                    <a href="/addnewuser">Back</a>
                    <h2 style={{ marginBottom: "1em", textAlign: "center" }}>Guardian Details Form</h2>
                    <div id="parentadduserformgroup">
                        <label htmlFor="">Student Id</label>
                        <input
                            type="text"
                            name="StudentId"
                            label="StudentId"
                            value={values.StudentId}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div id="parentadduserformgroup">
                        <label htmlFor="">Guardian Name</label>
                        <input
                            type="text"
                            name="FullName"
                            label="FullName"
                            value={values.FullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div id="parentadduserformgroup">
                        <label htmlFor="">Contact Email</label>
                        <input
                            type="email"
                            name="Email"
                            label="Email"
                            value={values.Email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div id="parentadduserformgroup">
                        <label htmlFor="">Contact PhoneNumber</label>
                        <input
                            type="text"
                            name="PhoneNumber"
                            label="PhoneNumber"
                            value={values.PhoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div id="parentadduserformgroup">
                        <label htmlFor="">Parent Photo Upload</label>
                        <input
                            type="file"
                            name="ParentPhoto"
                            label="ParentPhoto"
                            value={values.ParentPhoto}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button id="parentadduser_submit_btn" type="submit" value="" >
                        SAVE </button>
                </form>
            </div>
        </div>
    );
}

export default ParentForm;