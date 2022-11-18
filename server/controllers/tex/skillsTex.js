const helper = (skill) => {
    const temp = 
`
    \\textbf{${skill.skill_title ? skill.skill_title : ''}:}{ ${skill.skill_text ? skill.skill_text : ''}} \\\ \\vspace{3pt}
`

    return temp;
}

const getSkillsTex = (skills) => {
    if(skills.length === 0) {
        return '';
    }

    for(let i = 0; i<skills.length; i++) {
        skills[i].skill_title = skills[i].skill_title.replace(/%/g, "\\%");
        skills[i].skill_text = skills[i].skill_text.replace(/%/g, "\\%");
    }

    skillsTex = 
`

%----------- SKILLS -----------

\\section{Skills}
  \\vspace{2pt}
  \\resumeSubHeadingListStart
    \\small{\\item{

  ${skills.map(curr => helper(curr)).join('')}
}}
\\resumeSubHeadingListEnd

`
    return skillsTex;
}

module.exports = {getSkillsTex};