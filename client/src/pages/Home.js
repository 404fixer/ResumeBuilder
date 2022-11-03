import React from "react";
import { Link } from "react-router-dom";
import { decodeToken } from "react-jwt";

export default function Home() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;
    const myDecodedToken = token ? decodeToken(token) : null;

    const renderButtons = () => {
        if (token && myDecodedToken) {
            return <Link to={"/intro"}>Get Started</Link>;
        } else {
            if(token && !myDecodedToken) localStorage.removeItem('user')
            return (
                <>
                    <Link to={"/login"}>Login</Link>
                    <br />
                    <Link to={"/register"}>Register</Link>
                </>
            );
        }
    };

    return (
        <div>
            <h1>Landing Page</h1>
            {renderButtons()}
        </div>
    );
}
