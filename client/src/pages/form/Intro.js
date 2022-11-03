import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {toast} from 'react-toastify';

export default function Intro() {
    const [intro, setIntro] = useState({
        name: "",
        email: "",
        mob_num: "",
        portfolio_link: "",
        linkedin: "",
        github: "",
    });
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) return navigate("/login");
    }, [user, navigate]);

    const handleChange = (e) => {
        setIntro((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleIntroSubmit = async (e) => {
        e.preventDefault();

        const token = user.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post("http://localhost:8001/api/form/submit/intro", intro, config)
            .then((res) => {
                navigate("/edu");
                toast.success('Introduction Details Saved!');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div>
            <h1>Introduction</h1>
            <form>
                <input
                    type="text"
                    name="name"
                    id=""
                    value={intro.name}
                    placeholder="Enter Your Full Name"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    name="email"
                    id=""
                    value={intro.email}
                    placeholder="Enter Your Email"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    name="mob_num"
                    id=""
                    value={intro.mob_num}
                    placeholder="Enter Your Mobile Number with Country Code"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    name="portfolio_link"
                    value={intro.portfolio_link}
                    id=""
                    placeholder="Enter Your Portfolio Link"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    name="linkedin"
                    id=""
                    value={intro.linkedin}
                    placeholder="Enter Your LinkedIn Profile Link"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    name="github"
                    id=""
                    value={intro.github}
                    placeholder="Enter Your Github Profile Link"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="submit"
                    onClick={(e) => handleIntroSubmit(e)}
                    value="Submit And Next"
                />
            </form>
        </div>
    );
}
