import React from 'react';
import './index.css';


function StudentDisplay({ StudentPhoto, StudentName, Age, Class, Address, Country }) {

    return (

        <div id="studentdisplaymaincontainer">
            <div id="studentdisplaycontainer">
                <div id="studentdisplayformgroup">

                    <div id="studentdisplayformgroupimage">
                        {/* <img src={StudentPhoto} alt="" /> */}
                        <img src="https://i.pinimg.com/474x/d5/09/db/d509dbbfc92344fefca47a07925ab008--beautiful-little-girls-beautiful-eyes.jpg" alt="" />
                    </div>
                </div>

                <div id="studentdisplayformgroup">
                    <label htmlFor="">Student Name</label>
                    <div>{/* {StudentName} */}
                        Ava Bangs
                    </div>
                </div>
                <div id="studentdisplayformageandclass">
                    <div id="studentdisplayformgroup" className="studentdisplayformgroupage">
                        <label htmlFor="">Student Age</label>
                        <div>
                            {/* {Age} */}
                            14
                        </div>
                    </div>
                    <div id="studentdisplayformgroup">
                        <label htmlFor="">Student Class</label>
                        <div>
                            {/* {Class} */}
                            grade 4
                        </div>
                    </div>
                </div>
                <div id="studentdisplayformaddressandcountry">
                    <div id="studentdisplayformgroup" className="studentdisplayformgroupaddress">
                        <label htmlFor="">Student Address</label>
                        <div>
                            {/* {Address} */}
                            675, mellow st.
                        </div>
                    </div>
                    <div id="studentdisplayformgroup">
                        <label htmlFor="">Country </label>
                        <div>
                            {/* {Country} */}
                            Kenya
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDisplay;