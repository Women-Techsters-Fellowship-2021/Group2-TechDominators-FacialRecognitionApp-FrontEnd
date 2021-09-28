import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import StudentDisplay from '../StudentDisplay';

function CallStudentDisplay() {
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
        <div>
            {list.map(({ StudentPhoto, StudentName, Age, Class, Address, Country }) => (
                <StudentDisplay StudentPhoto={StudentPhoto} StudentName={StudentName} Age={Age} Class={Class} Address={Address} Country={Country} />
            ))}
        </div>
    );
}

export default CallStudentDisplay;