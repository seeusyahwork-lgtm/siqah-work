// server/routes/loginRoutes.js

const express = require("express");
const router = express.Router();
const { login } = require("../controllers/login");

// Endpoint login → POST http://localhost:5000/api/login
router.post("/", login);

module.exports = router; // pastikan ini ada!
