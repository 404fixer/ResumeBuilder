const asyncHandler = require('express-async-handler');
const Resume = require('../../models/resumeModel');

const helper = (curr_profile) => {
    const temp = `\\resumeItem{\\underline{\\href{${curr_profile.profile_link ? curr_profile.profile_link : ''}}{${curr_profile.profile_about}}}}`
    return temp;
}

const getProfilesTex = (profiles) => {
    if(profiles.length === 0) {
        return '';
    } 

    for(let i = 0; i<profiles.length; i++) {
        profiles[i].profile_link = profiles[i].profile_link.replace(/%/g, "\\%");
        profiles[i].profile_about = profiles[i].profile_about.replace(/%/g, "\\%");
    }

    profilesTex = 
`

%----------- Profiles -----------

\\section{Profiles}
  \\vspace{2pt}
  \\resumeItemListStart
  ${profiles.map(curr => helper(curr)).join('')}
  \\resumeItemListEnd
`
    return profilesTex;
}
module.exports = {getProfilesTex};