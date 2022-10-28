import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Form from './components/Form'
import Resume from './pages/Resume'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import Intro from './pages/form/Intro'
import Education from './pages/form/Education'
import Experience from './pages/form/Experience'
import Projects from './pages/form/Projects'
import Achievements from './pages/form/Achievements'
import Skills from './pages/form/Skills'
import Profiles from './pages/form/Profiles'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
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
  );
}

export default App;
