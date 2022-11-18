import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
    ExclamationCircleIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";

const navigation = [
    // { name: 'Dashboard', to: '/', current: true },
    { name: "Introduction", to: "/intro", current: false },
    { name: "Education", to: "/edu", current: false },
    { name: "Experience", to: "/exp", current: false },
    { name: "Projects", to: "/projects", current: false },
    { name: "Achievement", to: "/achievements", current: false },
    { name: "Skills", to: "/skills", current: false },
    { name: "Profiles", to: "/profiles", current: false },
    { name: "Resume", to: "/resume", current: true },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                                <div className="flex flex-shrink-0 items-center bg-indigo-700 px-3 rounded-lg shadow-md py-1">
                                    <Link
                                        to="/"
                                        className="flex md:hidden text-gray-100 font-normal text-lg items-center"
                                    >
                                        ResumeBuilder
                                    </Link>
                                    <Link
                                        to="/"
                                        className="hidden md:flex text-gray-100 font-normal text-lg items-center"
                                    >
                                        ResumeBuilder
                                    </Link>
                                </div>
                                <div className="hidden lg:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "px-3 py-2 rounded-md text-sm font-medium"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            {user ? (
                                                <UserCircleIcon className="h-8 w-8 text-gray-100" />
                                            ) : (
                                                <ExclamationCircleIcon className="h-8 w-8 text-gray-100" />
                                            )}
                                            {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        {user ? (
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/user"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Your Profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            onClick={(e) =>
                                                                handleLogout(e)
                                                            }
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Sign out
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        ) : (
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/login"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Login
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/register"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Register
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        )}
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    // to={item.to}
                                    onClick={() => {
                                        navigate(`${item.to}`);
                                    }}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        // <div>
        //     <h1>ResumeBuilder</h1>
        //     <Link to="/intro" >Introduction</Link>
        //     <Link to="/edu" >Education</Link>
        //     <Link to="/exp" >Experience</Link>
        //     <Link to="/projects" >Projects</Link>
        //     <Link to="/achievements" >Achievements</Link>
        //     <Link to="/skills" >Skills</Link>
        //     <Link to="/profiles" >Profiles</Link>
        //     {user ? (
        //         <>
        //             <p>{user._id}</p>
        //             <p>{user.name}</p>
        //             <p>{user.email}</p>
        //             <p>{user.token}</p>

        //             <button onClick={(e) => handleLogout(e)}>Logout</button>
        //         </>
        //     ) : (
        //         <>
        //             <Link to="/login">Login</Link>
        //             <Link to="/register">Register</Link>
        //         </>
        //     )}
        // </div>
    );
}
