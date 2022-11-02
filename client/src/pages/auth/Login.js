import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";

export default function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { email, password } = loginData;
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast(message);
        }

        if (isSuccess || user) {
            navigate("/");
        }

        dispatch(reset());
    }, [user, isSuccess, isError, message, navigate, dispatch]);

    const handleOnChange = (e) => {
        setLoginData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        const userData = { email, password };

        dispatch(login(userData));
        navigate("/");
    };

    if (isLoading) return <Spinner />;

    return (
        <div>
            <h1>Login</h1>
            <form>
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
                <button type="submit" onClick={(e) => handleSubmitLogin(e)}>
                    Login
                </button>
            </form>
        </div>
    );
}
