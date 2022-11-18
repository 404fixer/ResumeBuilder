const helper = (exp) => {
    const temp = 
`
\\resumeSubheading
      {${exp.company_name ? exp.company_name: ''}}{${exp.job_location ? exp.job_location: ''}}
      {${exp.job_title ? exp.job_title: ''}}{${exp.job_start_date ? exp.job_start_date: ''} \\textbf{--} ${exp.job_end_date ? exp.job_end_date: ''}}
      \\resumeItemListStart
      ${exp.job_desc.map(curr_desc => 
        `\\resumeItem{${curr_desc}}`
        ).join('')}
        \\resumeItemListEnd
`

    return temp;
}

const getExpTex = (exp) => {
    // console.log(exp);
    if(exp.length === 0) {
        return '';
    }

    exp = JSON.parse(JSON.stringify(exp).replace(/%/g, '\\\\%'));

    for(let i = 0; i<exp.length; i++) {
        exp[i].company_name = exp[i].company_name.replace(/%/g, "\\%");
        exp[i].job_title = exp[i].job_title.replace(/%/g, "\\%");
        exp[i].job_start_date = exp[i].job_start_date.replace(/%/g, "\\%");
        exp[i].job_end_date = exp[i].job_end_date.replace(/%/g, "\\%");
        for(let j = 0; j<exp[i].job_desc.length; j++) {
            exp[i].job_desc[j] = exp[i].job_desc[j].replace(/%/g, "\\%");
        }
    }

    const expTex = 
`

%----------- EXPERIENCE -----------

\\section{Experience}
  \\vspace{3pt}
  \\resumeSubHeadingListStart

  ${exp.map(curr => helper(curr)).join('')}

  \\resumeSubHeadingListEnd

`

    return expTex;
}

module.exports = {getExpTex};