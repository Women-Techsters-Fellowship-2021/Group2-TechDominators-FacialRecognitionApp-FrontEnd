import React from 'react';

function AddNewUser() {
    return (
        <div>
            <div id="signinform-group" className="email">
                <label htmlFor="">Student Name</label>
                <input
                    type="text"
                    name="StudentName"
                    label="StudentName"
                    value={values.StudentNam}
                    // onChange={handleInputChange}
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
        </div>
    );
}

export default AddNewUser;