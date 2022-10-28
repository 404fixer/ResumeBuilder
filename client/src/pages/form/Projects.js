import React, { useState } from "react";
import Project from "../../components/form/Project";

export default function Projects() {
    const [projectsHeadline, setProjectsHeadline] = useState("Projects");
    const [projects, setProjects] = useState([
        {
            project_name: "",
            project_link: "",
            project_github: "",
            project_desc: [""],
        },
    ]);

    const addProject = () => {
        setProjects([
            ...projects,
            {
                project_name: "",
                project_link: "",
                project_github: "",
                project_desc: [""],
            },
        ]);
    };

    return (
        <div>
          <h1>Your Projects Details</h1>
            <input type="text" placeholder="Section Heading" value={projectsHeadline} onChange={(e) => setProjectsHeadline(e.target.value)}/>
            {projects.map((e, i) => {
                return <Project projects={projects} setProjects={setProjects} idx={i} key={i}/>;
            })}
            <button type="button" onClick={addProject}>
                Add Project
            </button>
        </div>
    );
}
