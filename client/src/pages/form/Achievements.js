import React, { useState, useEffect } from "react";
import Achievement from "../../components/form/Achievement";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-toastify'

export default function Achievements() {
    const [achievements, setAchievements] = useState([
        {
            ach_text: "",
            ach_link: "",
        },
    ]);

    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) return navigate("/login");
    }, [user, navigate]);

    const addAchievement = () => {
        setAchievements([
            ...achievements,
            {
                ach_text: "",
                ach_link: "",
            },
        ]);
    };

    const handleAchSubmit = async (e) => {
        e.preventDefault();

        const token = user.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post("http://localhost:8001/api/form/submit/achievements", achievements, config)
            .then((res) => {
                navigate("/skills");
                toast.success('Achievements Details Saved!');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div>
            <h1>Achievements</h1>
            {achievements.map((e, i) => {
                return (
                    <Achievement
                        achievements={achievements}
                        setAchievements={setAchievements}
                        idx={i}
                        key={i}
                    />
                );
            })}
            <button type="button" onClick={addAchievement}>
                Add Achievement
            </button>
            <button type="submit" onClick={(e) => handleAchSubmit(e)}>Submit And Next</button>
        </div>
    );
}
