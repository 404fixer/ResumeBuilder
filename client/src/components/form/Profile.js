import React from 'react'

export default function Profile({profiles, setProfiles, idx}) {
    const handleOnChange = (e) => {
        const list = [...profiles];
        list[idx][e.target.name] = e.target.value;
        setProfiles(list);
    };

    const deleteThisProfile = () => {
        const list = [...profiles];
        list.splice(idx, 1);
        setProfiles(list);
    };

  return (
    <div>
        <input
                type="text"
                name="profile_link"
                placeholder="Profile Link"
                value={profiles[idx]["profile_link"]}
                onChange={(e) => handleOnChange(e)}
            />
            <input
                type="text"
                name="profile_about"
                placeholder="Profile About"
                value={profiles[idx]["profile_about"]}
                onChange={(e) => handleOnChange(e)}
            />
            {profiles.length > 1 && (
                <button type="button" onClick={deleteThisProfile}>
                    Delete
                </button>
            )}
    </div>
  )
}
