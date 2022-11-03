import React, { useState, useEffect } from "react";
import Work from "../../components/form/Work";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-toastify'

export default function Experience() {
    const [expHeading, setExpHeading] = useState("Experience");
    const [exp, setExp] = useState([
        {
            company_name: "",
            job_title: "",
            job_location: "",
            job_start_date: "",
            job_end_date: "",
            job_desc: [""],
        },
    ]);

    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) return navigate("/login");
    }, [user, navigate]);

    const addExp = () => {
        setExp([
            ...exp,
            {
                company_name: "",
                job_title: "",
                job_location: "",
                job_start_date: "",
                job_end_date: "",
                job_desc: [""],
            },
        ]);
    };

    const handleExpSubmit = async (e) => {
        e.preventDefault();

        const token = user.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post("http://localhost:8001/api/form/submit/exp", exp, config)
            .then((res) => {
                navigate("/projects");
                toast.success('Experience Details Saved!');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div>
            <h1>Experience</h1>
            <input
                type="text"
                value={expHeading}
                onChange={(e) => setExpHeading(e.target.value)}
            />
            {exp.map((e, i) => {
                return <Work exp={exp} setExp={setExp} idx={i} key={i} />;
            })}
            <button type="button" onClick={addExp}>
                Add Experience
            </button>
            <button type="submit" onClick={(e) => handleExpSubmit(e)}>Submit And Next</button>
        </div>
    );
}
