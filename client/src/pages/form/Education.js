import React, { useState, useEffect } from "react";
import School from "../../components/form/School";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-toastify';

export default function Education() {
    const [eduHeadline, setEduHeadline] = useState("Education");
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

    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) return navigate("/login");
    }, [user, navigate]);

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

    const handleEduSubmit = async (e) => {
        e.preventDefault();

        const token = user.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post("http://localhost:8001/api/form/submit/edu", edu, config)
            .then((res) => {
                navigate("/exp");
                toast.success('Education Details Saved!');
            })
            .catch((err) => console.log(err.message));
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
                return <School edu={edu} setEdu={setEdu} idx={idx} key={idx} />;
            })}
            <button type="button" onClick={addSchool}>
                Add School
            </button>
            <button type="submit" onClick={(e) => handleEduSubmit(e)}>Submit And Next</button>
        </div>
    );
}
