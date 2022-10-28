const express = require('express');
const router = express.Router();
const {protect} = require("../middleware/authMiddleware");
const {formSubmit, introSubmit} = require('../controllers/formController');

router.post("/submit", protect, formSubmit);
router.post("/submit/intro", protect, introSubmit);

module.exports = router;