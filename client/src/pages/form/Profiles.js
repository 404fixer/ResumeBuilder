import React, { useState, useEffect } from "react";
import Profile from "../../components/form/Profile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-toastify'

export default function Profiles() {
    const [profiles, setProfiles] = useState([
        {
            profile_link: "",
            profile_about: "",
        },
    ]);

    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) return navigate("/login");
    }, [user, navigate]);

    const addProfile = () => {
        setProfiles([
            ...profiles,
            {
                profile_link: "",
                profile_about: "",
            },
        ]);
    };

    const handleProfilesSubmit = async (e) => {
        e.preventDefault();

        const token = user.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post("http://localhost:8001/api/form/submit/profiles", profiles, config)
            .then((res) => {
                navigate("/resume");
                toast.success('Profiles Details Saved!');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div>
            <h1>Profiles</h1>
            {profiles.map((e, i) => {
                return (
                    <Profile
                        profiles={profiles}
                        setProfiles={setProfiles}
                        idx={i}
                        key={i}
                    />
                );
            })}
            <button type="button" onClick={addProfile}>
                Add Profile
            </button>
            <button type="submit" onClick={(e) => handleProfilesSubmit(e)}>Submit And Next</button>
        </div>
    );
}
