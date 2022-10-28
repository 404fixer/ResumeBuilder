import React from "react";

export default function School({ edu, setEdu, idx }) {
    const handleOnChange = (e) => {
        const list = [...edu];
        list[idx][e.target.name] = e.target.value;
        setEdu(list);
    };

    const deleteSchool = (idx) => {
        const list = [...edu];
        list.splice(idx, 1);
        setEdu(list);
    };

    return (
        <form>
            <input
                type="text"
                name="clg_name"
                id=""
                value={edu[idx]["clg_name"]}
                placeholder="College Name"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="clg_location"
                id=""
                value={edu[idx]["clg_location"]}
                placeholder="College Location"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="clg_degree"
                id=""
                value={edu[idx]["clg_degree"]}
                placeholder="Degree"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="clg_major"
                id=""
                value={edu[idx]["clg_major"]}
                placeholder="Major"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="clg_cgpa"
                id=""
                value={edu[idx]["clg_cgpa"]}
                placeholder="CGPA"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="clg_start_date"
                id=""
                value={edu[idx]["clg_start_date"]}
                placeholder="Start Date"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="clg_end_date"
                id=""
                value={edu[idx]["clg_end_date"]}
                placeholder="End Date"
                onChange={(e) => handleOnChange(e)}
            />
            {edu.length > 1 && (
                <button type="button" onClick={() => deleteSchool(idx)}>Delete School</button>
            )}
        </form>
    );
}
