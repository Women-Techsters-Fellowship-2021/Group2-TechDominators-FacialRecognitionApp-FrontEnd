import React from 'react';
import { useState } from 'react';


function StudentDisplay() {
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        fetch('https://localhost:5001/api/v1/Authentication/login')
            .then(data => data.json())
            .then(items => {
                if (mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])

    return (
        <div id="studentdisplaycontainer">
            <div id="studentdisplayformgroup">
                <label htmlFor="">Student Photo</label>
                <div>
                    <img src={list.StudentPhoto} alt="" />
                </div>
            </div>

            <div id="studentdisplayformgroup">
                <label htmlFor="">Student Name</label>
                <div>
                    {list.StudentName}
                </div>
            </div>
            <div id="studentdisplayformgroup">
                <label htmlFor="">Student Age</label>
                <div>
                    {list.Age}
                </div>
            </div>
            <div id="studentdisplayformgroup">
                <label htmlFor="">Student Class</label>
                <div>
                    {list.Class}
                </div>
            </div>
            <div id="studentdisplayformgroup">
                <label htmlFor="">Student Address</label>
                <div>
                    {list.Address}
                </div>
            </div>
            <div id="studentdisplayformgroup">
                <label htmlFor="">Country </label>
                <div>
                    {list.Country}
                </div>
            </div>
        </div>
    );
}

export default StudentDisplay;