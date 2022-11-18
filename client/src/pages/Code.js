import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Code() {
    const [texCode, setTexCode] = useState("");

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
            .get("/api/resume/code", config)
            .then((res) => {
                // console.log(res);
                setTexCode(res.data);
            })
            .catch((err) => console.log("error", err));
    }, [user, navigate]);

    return (
        <div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex flex-row items-center justify-center">
                    <h2 className="text-center text-5xl font-extrabold text-gray-900">
                        Latex Code
                    </h2>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Here is your Latex code of the resume, {user.name}!
                    {/* <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</Link> */}
                </p>
            </div>

        
            <div className="mt-10 w-9/12 sm:w-10/12 mx-auto shadow-lg bg-gray-200 p-5">
                <div className="overflow-x-auto font-mono">{texCode}</div>
            </div>

        </div>
    );
}