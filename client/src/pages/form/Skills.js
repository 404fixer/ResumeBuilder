import React, {useState, useEffect} from 'react'
import Skill from '../../components/form/Skill'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

export default function Skills() {
  const [skills, setSkills] = useState([{
    skill_title: "",
    skill_text: ""
  }])

  const navigate = useNavigate();

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if(!user) return navigate('/login');
  }, [user, navigate]);

  const addSkill = () => {
        setSkills([
            ...skills,
            {
                skill_title: "",
                skill_text: ""
            },
        ]);
    };

    const handleSkillsSubmit = async (e) => {
      e.preventDefault();

      const token = user.token;
      const config = {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      };

      axios
          .post("http://localhost:8001/api/form/submit/skills", skills, config)
          .then((res) => {
              navigate("/profiles");
              toast.success('Skills Details Saved!');
          })
          .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h1>Skills</h1>
      {
        skills.map((e, i) => {
          return <Skill skills={skills} setSkills={setSkills} idx={i} key={i}/>
        })
      }
      <button type="button" onClick={addSkill}>
          Add Skill
      </button>
      <button type="submit" onClick={(e) => handleSkillsSubmit(e)}>Submit And Next</button>
    </div>
  )
}
