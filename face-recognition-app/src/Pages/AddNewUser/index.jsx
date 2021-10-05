import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
// import { parentSubmit } from './partent';
// import { toast } from 'react-toastify';
import './index.css';
// import ParentForm from '../ParentForm';
import SideBar from '../../Components/Sidebar';

function AddNewUser() {
    const addHistory = useHistory();
    const initialValues = {
        SchoolId: "",
        StudentName: "",
        Age: "",
        Class: "",
        Address: "",
        Country: ""
    };
    // const initialImage = { StudentPhoto: "" }
    const [values, setValues] = useState(initialValues);
    const [imageSelected, setImageSelected] = useState("");

    // handle image change function
    const getImage = (e) => {
        setImageSelected(e.target.files[0]);
    }
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

    // uploads image to cloudinary
    const uploadImage = () => {
        console.log(imageSelected);
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "schoolstudentparent");

        const imageResponse = Axios.post(
            "https://api.cloudinary.com/v1_1/corvusonyx/image/upload", formData)
        if (imageResponse.status === 200) {
            console.log(imageResponse.data.url);
            return imageResponse.data.url;
        }
        // .then((response) => {
        //     console.log(response.data.url);
        //     return response.data.url;
        // });
    };

    // handle form submission
    const handleInputSubmit = () => {
        const url = 'https://localhost:5001/api/v1/Student';


        fetch(url, {
            // Adding method type
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify({
                SchoolId: values.SchoolId,
                StudentName: values.StudentName,
                Age: values.Age,
                Class: values.Class,
                Address: values.Address,
                Country: values.Country,
                StudentPhoto: uploadImage
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

        addHistory.push('/addnewuser');
    }


    return (
        <div id="addnewuserformcontainerwithsidebar">
            < SideBar />
            <div id="addnewuserformcontainer">

                <form action="" id="addnewuserform" onSubmit={handleInputSubmit}>
                    <h2 style={{ marginBottom: "1em", textAlign: "center" }}>Student Details Form</h2>
                    <div id="adduserformgroup" className="email">
                        <label htmlFor="">School Id</label>
                        <input
                            type="text"
                            name="SchoolId"
                            label="SchoolId"
                            value={values.SchoolId}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
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
                        <div id="adduserformgroup" className="adduserformgroupage">
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
                        <div id="adduserformgroup" className="adduserformgroupaddress">
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
                            // name="StudentPhoto"
                            // label="StudentPhoto"
                            // value={values.StudentPhoto}
                            onChange={getImage}
                            required
                        />
                    </div>
                    {/* <div id="adduserformgroup">
                    <label htmlFor="">Parent Name</label>
                    <input
                        type="text"
                        name="FullName"
                        label="FullName"
                        value={values.FullName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div id="adduserformgroup">
                    <label htmlFor="">Contact Email</label>
                    <input
                        type="email"
                        name="Email"
                        label="Email"
                        value={values.Email}
                        onChange={handleInputChange}
                        required
                    />
                </div> */}
                    {/* <div id="adduserformgroup">
                    <label htmlFor="">Contact Phonenumber</label>
                    <input
                        type="text"
                        name="PhoneNumber"
                        label="PhoneNumber"
                        value={values.PhoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div id="adduserformgroup">
                    <label htmlFor="">Parent Photo Upload</label>
                    <input
                        type="file"
                        name="ParentPhoto"
                        label="ParentPhoto"
                        value={values.ParentPhoto}
                        onChange={handleInputChange}
                        required
                    />
                </div> */}
                    <button id="adduser_submit_btn" type="submit" value="" >
                        SAVE CHANGES </button>

                </form>
                {/* <ParentForm /> */}
            </div>
        </div>
    );
}

export default AddNewUser;