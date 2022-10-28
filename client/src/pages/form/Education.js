import React, { useState } from "react";
import School from "../../components/form/School";

export default function Education() {
    const [eduHeadline, setEduHeadline] = useState('Education')
    const [edu, setEdu] = useState([
        {
            clg_name: "",
            clg_location: "",
            clg_degree: "",
            clg_major: "",
            clg_cgpa: "",
            clg_start_date: "",
            clg_end_date: "",
        },
    ]);

    const addSchool = () => {
        setEdu([
            ...edu,
            {
                clg_name: "",
                clg_location: "",
                clg_degree: "",
                clg_major: "",
                clg_cgpa: "",
                clg_start_date: "",
                clg_end_date: "",
            },
        ]);
    };

    return (
        <div>
            <h1>Education</h1>
            <input
                type="text"
                name=""
                id=""
                value={eduHeadline}
                onChange={(e) => setEduHeadline(e.target.value)}
            />
            {edu.map((element, idx) => {
                return <School edu={edu} setEdu={setEdu} idx={idx} key={idx}/>
            })}
            <button type="button" onClick={addSchool}>Add School</button>
        </div>
    );
}
