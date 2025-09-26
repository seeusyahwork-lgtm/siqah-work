const express = require("express");
const router = express.Router();
const {
  getProses,
  getProsesById,
  createProses,
  updateProses,
  deleteProses,
} = require("../controllers/prosesControllers");

// CRUD endpoints
router.get("/", getProses); // GET all
router.get("/:id", getProsesById); // GET by ID
router.post("/", createProses); // CREATE
router.put("/:id", updateProses); // UPDATE
router.delete("/:id", deleteProses); // DELETE

module.exports = router;
