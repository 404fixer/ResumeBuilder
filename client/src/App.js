import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import Form from "./components/Form";
import Resume from "./pages/Resume";
import Header from "./components/Header"
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Intro from "./pages/form/Intro";
import Education from "./pages/form/Education";
import Experience from "./pages/form/Experience";
import Projects from "./pages/form/Projects";
import Achievements from "./pages/form/Achievements";
import Skills from "./pages/form/Skills";
import Profiles from "./pages/form/Profiles";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/edu" element={<Education />} />
                    <Route path="/exp" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/profiles" element={<Profiles />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </Router>
            <ToastContainer />
        </>
    );
}

export default App;
