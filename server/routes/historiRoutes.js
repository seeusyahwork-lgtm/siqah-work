const express = require("express");
const router = express.Router();
const {
  getHistori,
  getHistoriById,
  createHistori,
  updateHistori,
  deleteHistori,
} = require("../controllers/historiControllers");

// CRUD endpoints
router.get("/", getHistori); // GET all
router.get("/:id", getHistoriById); // GET by ID
router.post("/", createHistori); // CREATE
router.put("/:id", updateHistori); // UPDATE
router.delete("/:id", deleteHistori); // DELETE

module.exports = router;
