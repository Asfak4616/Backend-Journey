const express = require("express");
const { create } = require("../controller/user.controller");
const upload = require("../config/multer.config");
const router = express.Router();

router.post("/create", upload.single("profilePic"), create);

module.exports = router;
