const asyncHandler = require("express-async-handler");
const Resume = require("../models/resumeModel");
const User = require("../models/userModel");

const introSubmit = asyncHandler(async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.user);
        const resume = await Resume.findOneAndUpdate(
            req.user.email,
            { intro: req.body },
            { new: true }
        );
        console.log(resume);

        res.send(resume);
    } catch (e) {
        throw new Error(e.message);
    }
});

const eduSubmit = asyncHandler(async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate(
            req.user.email,
            { edu: req.body },
            { new: true }
        );

        res.send(resume);
    } catch (e) {
        throw new Error(e.message);
    }
});

const expSubmit = asyncHandler(async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate(
            req.user.email,
            { exp: req.body },
            { new: true }
        );

        res.send(resume);
    } catch (e) {
        throw new Error(e.message);
    }
});

const projectsSubmit = asyncHandler(async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate(
            req.user.email,
            { projects: req.body },
            { new: true }
        );

        res.send(resume);
    } catch (e) {
        throw new Error(e.message);
    }
});

const achSubmit = asyncHandler(async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate(
            req.user.email,
            { ach: req.body },
            { new: true }
        );

        res.send(resume);
    } catch (e) {
        throw new Error(e.message);
    }
});

const skillsSubmit = asyncHandler(async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate(
            req.user.email,
            { skills: req.body },
            { new: true }
        );

        res.send(resume);
    } catch (e) {
        throw new Error(e.message);
    }
});

const profilesSubmit = asyncHandler(async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate(
            req.user.email,
            { profiles: req.body },
            { new: true }
        );

        res.send(resume);
    } catch (e) {
        throw new Error(e.message);
    }
});

module.exports = {
    introSubmit,
    eduSubmit,
    expSubmit,
    projectsSubmit,
    achSubmit,
    skillsSubmit,
    profilesSubmit,
};
