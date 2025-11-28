const express = require("express");
const { authenticateToken, authorizeAdmin } = require("../middleware/authMiddleware");
const statsController = require("../controllers/statsController");

const router = express.Router();

router.get("/", authenticateToken, authorizeAdmin, statsController.getStats);

module.exports = router;
