const express = require("express");
const router = express.Router();
const {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/roleControllers");

// CRUD endpoints
router.get("/", getRoles); // GET all
router.get("/:id", getRoleById); // GET by ID
router.post("/", createRole); // CREATE
router.put("/:id", updateRole); // UPDATE
router.delete("/:id", deleteRole); // DELETE

module.exports = router;
