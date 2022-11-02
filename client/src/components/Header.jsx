import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <div>
            <h1>ResumeBuilder</h1>
            {user ? (
                <>
                <p>{user._id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.token}</p>
                <button onClick={(e) => handleLogout(e)}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </div>
    );
}
