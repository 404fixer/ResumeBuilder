import React, { useState } from "react";
import Achievement from "../../components/form/Achievement";

export default function Achievements() {
    const [achievements, setAchievements] = useState([
        {
            ach_text: "",
            ach_link: "",
        },
    ]);

    const addAchievement = () => {
        setAchievements([
            ...achievements,
            {
                ach_text: "",
                ach_link: "",
            },
        ]);
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
        </div>
    );
}
