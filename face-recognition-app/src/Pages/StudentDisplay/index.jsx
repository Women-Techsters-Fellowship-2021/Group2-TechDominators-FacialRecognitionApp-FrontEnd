import React from 'react';
import SideBar from '../../Components/Sidebar';
import './index.css';


function StudentDisplay({ StudentPhoto, StudentName, Age, Class, Address, Country }) {

    return (

        <div id="studentdisplaymaincontainer">
            <SideBar />
            <div id="studentdisplaycontainer">
                <div id="studentdisplayformgroup">

                    <div id="studentdisplayformgroupimage" style={{ border: 0 }}>
                        {/* <img src={StudentPhoto} alt="" /> */}
                        <img src="https://p1.pxfuel.com/preview/101/697/102/african-child-black-child-child-face.jpg" alt="" />
                    </div>
                </div>
                <div id="studentdisplayformgroup">
                    <label htmlFor="">Student Id</label>
                    <div>{/* {StudentName} */}
                        2c4cf11c-daa5-4070-b658-360b7e50889c
                    </div>
                </div>
                <div id="studentdisplayformgroup">
                    <label htmlFor="">Student Name</label>
                    <div>{/* {StudentName} */}
                        Shannon Shaw
                    </div>
                </div>
                <div id="studentdisplayformageandclass">
                    <div id="studentdisplayformgroup" className="studentdisplayformgroupage">
                        <label htmlFor="">Student Age</label>
                        <div>
                            {/* {Age} */}
                            8
                        </div>
                    </div>
                    <div id="studentdisplayformgroup">
                        <label htmlFor="">Student Class</label>
                        <div>
                            {/* {Class} */}
                            Grade 3
                        </div>
                    </div>
                </div>
                <div id="studentdisplayformaddressandcountry">
                    <div id="studentdisplayformgroup" className="studentdisplayformgroupaddress">
                        <label htmlFor="">Student Address</label>
                        <div>
                            {/* {Address} */}
                            675, Mellow st., Lagos
                        </div>
                    </div>
                    <div id="studentdisplayformgroup">
                        <label htmlFor="">Country </label>
                        <div>
                            {/* {Country} */}
                            Nigeria
                        </div>
                    </div>
                </div>

                <h2>Guardian details</h2>

                <div id="studentdisplayformgroup">
                    <label htmlFor="">Name</label>
                    <div>{/* {ParentName} */}
                        Mercy Shaw
                    </div>
                </div>
                <div id="studentdisplayformgroup">
                    <label htmlFor="">Contact Email</label>
                    <div>{/* {StudentName} */}
                        mercy.shaw@gmail.com
                    </div>
                </div>
                <div id="studentdisplayformgroup">
                    <label htmlFor="">Contact Phonenumber</label>
                    <div>{/* {StudentName} */}
                        +234765893768
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDisplay;