import React, { useState, useEffect } from "react";
import Project from "../../components/form/Project";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

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

    const navigate = useNavigate();

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if(!user) return navigate('/login');
  }, [user, navigate]);

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

    const handleProjectsSubmit = async (e) => {
        e.preventDefault();

        const token = user.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post("http://localhost:8001/api/form/submit/projects", projects, config)
            .then((res) => {
                navigate("/achievements");
                toast.success('Projects Details Saved!');
            })
            .catch((err) => console.log(err.message));
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
            <button type="submit" onClick={(e) => handleProjectsSubmit(e)}>Submit And Next</button>
        </div>
    );
}
