import React, { useState, useEffect } from "react";
import Profile from "../../components/form/Profile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-toastify'
import { UsersIcon } from "@heroicons/react/24/solid";

export default function Profiles() {
    const [profiles, setProfiles] = useState([
        {
            profile_link: "",
            profile_about: "",
        },
    ]);

    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) return navigate("/login");

        const token = user.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get("/api/form/profiles", config)
            .then((res) => {
                setProfiles(res.data);
            })
            .catch((err) => console.log(err.message));
    }, [user, navigate]);

    const addProfile = () => {
        setProfiles([
            ...profiles,
            {
                profile_link: "",
                profile_about: "",
            },
        ]);
    };

    const handleProfilesSubmit = async (e) => {
        e.preventDefault();

        const token = user.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post("/api/form/profiles", profiles, config)
            .then((res) => {
                navigate("/resume");
                toast.success('Profiles Details Saved!');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex flex-row items-center justify-center">
                    <UsersIcon className="h-14 w-auto pr-1" />
                    <h2 className="text-center text-5xl font-extrabold text-gray-900">
                        Profiles
                    </h2>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Please fill your profiles details
                    {/* <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</Link> */}
                </p>
            </div>

            <form onSubmit={handleProfilesSubmit}>
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

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-50 px-4 py-2 text-center sm:px-6">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-zinc-700 py-3 px-4 w-full text-sm font-medium text-white shadow-sm hover:bg-zinc-900"
                        onClick={addProfile}
                    >
                        Add Profile
                    </button>
                </div>
                <div className="bg-gray-50 px-4 py-2 text-center sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 w-full text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                </div>
            </div>
            </form>
        </>

        // <div>
        //     <h1>Profiles</h1>
            // {profiles.map((e, i) => {
            //     return (
            //         <Profile
            //             profiles={profiles}
            //             setProfiles={setProfiles}
            //             idx={i}
            //             key={i}
            //         />
            //     );
            // })}
        //     <button type="button" onClick={addProfile}>
        //         Add Profile
        //     </button>
        //     <button type="submit" onClick={(e) => handleProfilesSubmit(e)}>Submit And Next</button>
        // </div>
    );
}
