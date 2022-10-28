import React from 'react'

export default function Project({ projects, setProjects, idx}) {
    const handleOnChange = (e) => {
        const list = [...projects];
        list[idx][e.target.name] = e.target.value;
        setProjects(list);
    };

    const handleThisDescChange = (e, i) => {
        const list = [...projects];
        list[idx]["project_desc"][i] = e.target.value;
        setProjects(list);
    };

    const deleteThisDesc = (i) => {
        const list = [...projects];
        list[idx]["project_desc"].splice(i, 1);
        setProjects(list);
    };

    const handleAddDesc = () => {
        const list = [...projects];
        list[idx]["project_desc"] = [...list[idx]["project_desc"], ""];
        setProjects(list);
    };

    const handleDeleteProject = () => {
        const list = [...projects];
        list.splice(idx, 1);
        setProjects(list);
    }


  return (
    <div>
        <input type="text" name='project_name' placeholder='Enter Project Name' value={projects[idx]['project_name']} onChange={(e) => handleOnChange(e)}/>
        <input type="text" name='project_link' placeholder='Enter Project Link' value={projects[idx]['project_link']} onChange={(e) => handleOnChange(e)}/>
        <input type="text" name='project_github' placeholder='Enter Project Github Link' value={projects[idx]['project_github']} onChange={(e) => handleOnChange(e)}/>
        {
            projects[idx]["project_desc"].map((e, i) => {
                return (
                    <div key={i}>
                        <input
                            type="text"
                            id=""
                            value={projects[idx]["project_desc"][i]}
                            placeholder="Enter Job Description"
                            onChange={(e) => handleThisDescChange(e, i)}
                        />
                        {projects[idx]["project_desc"].length > 1 && (
                            <button type="button" onClick={() => deleteThisDesc(i)}>
                                Delete
                            </button>
                        )}
                    </div>
                )
            })
        }
        <button type="button" onClick={handleAddDesc}>Add Description</button>
        <button type="button" onClick={handleDeleteProject}>Delete Project</button>
    </div>
  )
}
