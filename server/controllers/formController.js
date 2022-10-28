const asyncHandler = require('express-async-handler');
const Resume = require("../models/resumeModel");

const formSubmit = asyncHandler( async (req, res) => {
    console.log("body", req.body);
    res.send(req.body.name);
});

const introSubmit = asyncHandler(async (req, res) => {
    try {
        console.log(req.user);
        const resume = await Resume.create({
            intro: req.body
        });
        console.log(resume);
        res.send(resume);
    } catch (e) {
        console.log(e.message)
    }
});

module.exports = {
    formSubmit,
    introSubmit
}