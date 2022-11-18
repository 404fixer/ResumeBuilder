const helper = (edu) => {
    const temp = 
`
\\resumeSubheading
{${edu.clg_name ? edu.clg_name : ''}
}{${edu.clg_location ? edu.clg_location : ''}}
{${edu.clg_degree ? edu.clg_degree : ''} in ${edu.clg_major ? edu.clg_major : ''};   \\textbf{CGPA: ${edu.clg_cgpa ? edu.clg_cgpa : ''}}}{${edu.clg_start_date ? edu.clg_start_date : ''} \\textbf{--} ${edu.clg_end_date ? edu.clg_end_date : ''}}
`

    return temp;
}

const getEduTex = (edu) => {
    if(edu.length === 0) {
        return '';
    }

    edu = JSON.parse(JSON.stringify(edu).replace(/%/g, '\\\\%'));

    // for(let i = 0; i<edu.length; i++) {
    //     edu[i].clg_name = edu[i].clg_name.replace(/%/g, "\\%");
    //     edu[i].clg_location = edu[i].clg_location.replace(/%/g, "\\%");
    //     edu[i].clg_degree = edu[i].clg_degree.replace(/%/g, "\\%");
    //     edu[i].clg_major = edu[i].clg_major.replace(/%/g, "\\%");
    //     edu[i].clg_cgpa = edu[i].clg_cgpa.replace(/%/g, "\\%");
    //     edu[i].clg_start_date = edu[i].clg_start_date.replace(/%/g, "\\%");
    //     edu[i].clg_end_date = edu[i].clg_end_date.replace(/%/g, "\\%");
    // }

     const eduTex = 
`

%----------- EDUCATION -----------

\\section{Education}
  \\vspace{3pt}
  \\resumeSubHeadingListStart

  ${edu.map((curr) => helper(curr)).join('')}

  \\resumeSubHeadingListEnd
`

    return eduTex;
}

module.exports = {getEduTex};