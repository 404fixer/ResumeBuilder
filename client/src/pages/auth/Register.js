import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";


export default function Register() {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { name, email, password, password2 } = registerData;
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if(isError) {
            toast(message);
        }

        if(isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());

    }, [user, isSuccess, isError, message, navigate, dispatch]);

    const handleOnChange = (e) => {
        setRegisterData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        if(password !== password2) {
            toast.error('Passwords do not match!');
        } else {
            const userData = { name, email, password };

            dispatch(register(userData));
            navigate('/login');
        }
    };

    if(isLoading) return <Spinner />

    return (
        <div>
            <h1>Register</h1>
            <form>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => handleOnChange(e)}
                    placeholder="Enter Your Name"
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => handleOnChange(e)}
                    placeholder="Enter Your Email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => handleOnChange(e)}
                    placeholder="Enter New Password"
                />
                <input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={(e) => handleOnChange(e)}
                    placeholder="Confirm Password"
                />
                <button type="submit" onClick={(e) => handleSubmitRegister(e)}>
                    Register
                </button>
            </form>
        </div>
    );
}
