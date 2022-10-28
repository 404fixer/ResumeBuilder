import React, {useState} from 'react'
import Skill from '../../components/form/Skill'

export default function Skills() {
  const [skills, setSkills] = useState([{
    skill_title: "",
    skill_text: ""
  }])

  const addSkill = () => {
        setSkills([
            ...skills,
            {
                skill_title: "",
                skill_text: ""
            },
        ]);
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
    </div>
  )
}
