import React from "react";

export default function Work({ exp, setExp, idx }) {
    const handleOnChange = (e) => {
        const list = [...exp];
        list[idx][e.target.name] = e.target.value;
        setExp(list);
    };

    const handleThisDescChange = (e, i) => {
        const list = [...exp];
        list[idx]["job_desc"][i] = e.target.value;
        setExp(list);
    };

    const deleteThisDesc = (i) => {
        const list = [...exp];
        list[idx]["job_desc"].splice(i, 1);
        setExp(list);
    };

    const handleAddDesc = () => {
        const list = [...exp];
        list[idx]["job_desc"] = [...list[idx]["job_desc"], ""];
        setExp(list);
    };

    const handleDeleteExp = () => {
        const list = [...exp];
        list.splice(idx, 1);
        setExp(list);
    }

    return (
        <form>
            <input
                type="text"
                name="company_name"
                id=""
                value={exp[idx]["company_name"]}
                placeholder="Company Name"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="job_title"
                id=""
                value={exp[idx]["job_title"]}
                placeholder="Job Title"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="job_location"
                id=""
                value={exp[idx]["job_location"]}
                placeholder="Job Location"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="job_start_date"
                id=""
                value={exp[idx]["job_start_date"]}
                placeholder="Job Start Date"
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="job_end_date"
                id=""
                value={exp[idx]["job_end_date"]}
                placeholder="Job End Date"
                onChange={(e) => handleOnChange(e)}
            />
            {exp[idx]["job_desc"].map((e, i) => {
                return (
                    <div key={i}>
                        <input
                            type="text"
                            id=""
                            value={exp[idx]["job_desc"][i]}
                            placeholder="Enter Job Description"
                            onChange={(e) => handleThisDescChange(e, i)}
                        />
                        {exp[idx]["job_desc"].length > 1 && (
                            <button type="button" onClick={() => deleteThisDesc(i)}>
                                Delete
                            </button>
                        )}
                    </div>
                );
            })}
            <button type="button" onClick={handleAddDesc}>Add Description</button>
            <button type="button" onClick={handleDeleteExp}>Delete Experience</button>
        </form>
    );
}
