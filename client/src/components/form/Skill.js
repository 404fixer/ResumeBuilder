import React from "react";

export default function Skill({ skills, setSkills, idx }) {
    const handleOnChange = (e) => {
        const list = [...skills];
        list[idx][e.target.name] = e.target.value;
        setSkills(list);
    };

    const deleteThisSkill = () => {
        const list = [...skills];
        list.splice(idx, 1);
        setSkills(list);
    };

    return (
        <div>
            <input
                type="text"
                name="skill_title"
                placeholder="Skill Title"
                value={skills[idx]["skill_title"]}
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="skill_text"
                placeholder="Skill Text"
                value={skills[idx]["skill_text"]}
                onChange={(e) => handleOnChange(e)}
            />
            {skills.length > 1 && (
                <button type="button" onClick={deleteThisSkill}>
                    Delete
                </button>
            )}
        </div>
    );
}
