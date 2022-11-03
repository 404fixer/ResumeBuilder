const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
    introSubmit,
    eduSubmit,
    expSubmit,
    projectsSubmit,
    achSubmit,
    skillsSubmit,
    profilesSubmit,
} = require("../controllers/formController");

router.post("/intro", protect, introSubmit);
router.post("/edu", protect, eduSubmit);
router.post("/exp", protect, expSubmit);
router.post("/projects", protect, projectsSubmit);
router.post("/achievements", protect, achSubmit);
router.post("/skills", protect, skillsSubmit);
router.post("/profiles", protect, profilesSubmit);

module.exports = router;
