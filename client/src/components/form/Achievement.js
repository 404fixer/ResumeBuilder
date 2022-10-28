import React from "react";

export default function Achievement({ achievements, setAchievements, idx }) {
    const handleOnChange = (e) => {
        const list = [...achievements];
        list[idx][e.target.name] = e.target.value;
        setAchievements(list);
    };

    const deleteThisAch = () => {
        const list = [...achievements];
        list.splice(idx, 1);
        setAchievements(list);
    };

    return (
        <div>
            <input
                type="text"
                name="ach_text"
                placeholder="Achievement"
                value={achievements[idx]["ach_text"]}
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="ach_link"
                placeholder="Achievement Link"
                value={achievements[idx]["ach_link"]}
                onChange={(e) => handleOnChange(e)}
            />
            {achievements.length > 1 && (
                <button type="button" onClick={deleteThisAch}>
                    Delete
                </button>
            )}
        </div>
    );
}
