import React from "react";
import { Link } from "react-router-dom";
import { decodeToken } from "react-jwt";

export default function Home() {
    const token = localStorage.getItem("token");
    const myDecodedToken = decodeToken(token);

    const renderButtons = () => {
        if (token && myDecodedToken) {
            return <Link to={"/intro"}>Get Started</Link>;
        } else {
            if(token && !myDecodedToken) localStorage.removeItem('token')
            return (
                <>
                    <Link to={"/login"}>Login</Link>
                    <br />
                    <Link to={"/signup"}>Sign Up</Link>
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
