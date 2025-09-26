const express = require("express");
const router = express.Router();
const {
  getPaket,
  getPaketById,
  createPaket,
  updatePaket,
  deletePaket,
} = require("../controllers/paketControllers"); // ⬅️ nama baru

// CRUD endpoints
router.get("/", getPaket); // GET all
router.get("/:id", getPaketById); // GET by ID
router.post("/", createPaket); // CREATE
router.put("/:id", updatePaket); // UPDATE
router.delete("/:id", deletePaket); // DELETE

module.exports = router;
