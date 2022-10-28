import React, {useState} from 'react'
import Work from '../../components/form/Work'

export default function Experience() {
  const [expHeading, setExpHeading] = useState('Experience')
  const [exp, setExp] = useState([{
    company_name: "",
    job_title: "",
    job_location: "",
    job_start_date: "",
    job_end_date: "",
    job_desc: [""]
  }])

  const addExp = () => {
    setExp([...exp, {
      company_name: "",
      job_title: "",
      job_location: "",
      job_start_date: "",
      job_end_date: "",
      job_desc: [""]
    }])
  }

  return (
    <div>
      <h1>Experience</h1>
      <input type="text" value={expHeading} onChange={(e) => setExpHeading(e.target.value)} />
      {
        exp.map((e, i) => {
          return <Work exp={exp} setExp={setExp} idx={i} key={i}/>
        })
      }
      <button type='button' onClick={addExp}>Add Experience</button>
    </div>
  )
}
