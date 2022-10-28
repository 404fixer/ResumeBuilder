import React, {useState} from "react";
import Profile from '../../components/form/Profile'

export default function Profiles() {
    const [profiles, setProfiles] = useState([
        {
            profile_link: "",
            profile_about: "",
        },
    ]);

    const addProfile = () => {
        setProfiles([
            ...profiles,
            {
              profile_link: "",
              profile_about: ""
            },
        ]);
    };

    return (
        <div>
            <h1>Profiles</h1>
            {profiles.map((e, i) => {
                return (
                    <Profile
                        profiles={profiles}
                        setProfiles={setProfiles}
                        idx={i}
                        key={i}
                    />
                );
            })}
            <button type="button" onClick={addProfile}>
                Add Profile
            </button>
        </div>
    );
}
