import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { IdentificationIcon } from "@heroicons/react/24/solid";

export default function Intro() {
    const [intro, setIntro] = useState({
        name: "",
        email: "",
        mob_num: "",
        portfolio_link: "",
        linkedin: "",
        github: "",
    });
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
            .get(process.env.REACT_APP_SERVER_URL + "/api/form/intro", config)
            .then((res) => {
                setIntro(res.data);
            })
            .catch((err) => console.log(err.message));
    }, [user, navigate]);

    const handleOnChange = (e) => {
        setIntro((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleIntroSubmit = async (e) => {
        e.preventDefault();

        // if(!intro.name) {
        //     toast.warning('Please add your name');
        //     return;
        // }

        // if(!intro.email) {
        //     toast.warning('Please add your email');
        //     return;
        // }

        const token = user.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post(process.env.REACT_APP_SERVER_URL + "/api/form/intro", intro, config)
            .then((res) => {
                navigate("/edu");
                toast.success("Introduction Details Saved!");
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex flex-row items-center justify-center">
                    <IdentificationIcon className="h-14 w-auto pr-1" />
                    <h2 className="text-center text-5xl font-extrabold text-gray-900">
                        Introduction
                    </h2>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Please fill your introductory details
                    {/* <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</Link> */}
                </p>
            </div>

            <form onSubmit={handleIntroSubmit}>
            <div className="mt-10 sm:mt-0">
                {/* <div className="mt-10 mx-auto md:grid md:grid-cols-3 md:gap-6"> */}
                <div className="mt-10 mx-auto w-8/12 md:w-9/12 max-sm:w-full max-sm:p-2 max-sm:pt-0   ">
                    <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Full name
                                            </label>
                                            <input
                                            required
                                                type="text"
                                                name="name"
                                                value={intro.name}
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="e.g, Govind Tomar"
                                                onChange={(e) =>
                                                    handleOnChange(e)
                                                }
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                id="last-name"
                                                autoComplete="email"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={intro.email}
                                                placeholder="e.g, abc@xyz.com"
                                                onChange={(e) =>
                                                    handleOnChange(e)
                                                }
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label
                                                htmlFor="mob_num"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Mobile number
                                            </label>
                                            <input
                                                type="text"
                                                name="mob_num"
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={intro.mob_num}
                                                placeholder="e.g, +91 98765 43210"
                                                onChange={(e) =>
                                                    handleOnChange(e)
                                                }
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label
                                                htmlFor="portfolio_link"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Portfolio link
                                            </label>
                                            <input
                                                type="text"
                                                name="portfolio_link"
                                                autoComplete="portfolio_link"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={intro.portfolio_link}
                                                placeholder="e.g, https://www.govindtomar.io"
                                                onChange={(e) =>
                                                    handleOnChange(e)
                                                }
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label
                                                htmlFor="linkedin"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                LinkedIn
                                            </label>
                                            <input
                                                type="text"
                                                name="linkedin"
                                                autoComplete="linkedin"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={intro.linkedin}
                                                placeholder="e.g, https://www.linkedin.com/in/govindtomar94/"
                                                onChange={(e) =>
                                                    handleOnChange(e)
                                                }
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                                htmlFor="github"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Github
                                            </label>
                                            <input
                                                type="text"
                                                name="github"
                                                autoComplete="github"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                value={intro.github}
                                                placeholder="e.g, https://www.github.com/404fixer"
                                                onChange={(e) =>
                                                    handleOnChange(e)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
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
        //     <h1>Introduction</h1>
        //     <form>
        //         <input
        //             type="text"
        //             name="name"
        //             id=""
        //             value={intro.name}
        //             placeholder="Enter Your Full Name"
        //             onChange={(e) => handleChange(e)}
        //         />
        //         <input
        //             type="text"
        //             name="email"
        //             id=""
        //             value={intro.email}
        //             placeholder="Enter Your Email"
        //             onChange={(e) => handleChange(e)}
        //         />
        //         <input
        //             type="text"
        //             name="mob_num"
        //             id=""
        //             value={intro.mob_num}
        //             placeholder="Enter Your Mobile Number with Country Code"
        //             onChange={(e) => handleChange(e)}
        //         />
        //         <input
        //             type="text"
        //             name="portfolio_link"
        //             value={intro.portfolio_link}
        //             id=""
        //             placeholder="Enter Your Portfolio Link"
        //             onChange={(e) => handleChange(e)}
        //         />
        //         <input
        //             type="text"
        //             name="linkedin"
        //             id=""
        //             value={intro.linkedin}
        //             placeholder="Enter Your LinkedIn Profile Link"
        //             onChange={(e) => handleChange(e)}
        //         />
        //         <input
        //             type="text"
        //             name="github"
        //             id=""
        //             value={intro.github}
        //             placeholder="Enter Your Github Profile Link"
        //             onChange={(e) => handleChange(e)}
        //         />
        //         <input
        //             type="submit"
        //             onClick={(e) => handleIntroSubmit(e)}
        //             value="Submit And Next"
        //         />
        //     </form>
        // </div>
    );
}
