const Role = require("../models/Role");

// GET all roles
const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
};

// GET role by ID
const getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: "Role tidak ditemukan" });
    res.json(role);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
};

// CREATE role
const createRole = async (req, res) => {
  try {
    const newRole = new Role(req.body);
    const savedRole = await newRole.save();
    res.status(201).json(savedRole);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat role", error: error.message });
  }
};

// UPDATE role
const updateRole = async (req, res) => {
  try {
    const updated = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Role tidak ditemukan" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Gagal update role", error: error.message });
  }
};

// DELETE role
const deleteRole = async (req, res) => {
  try {
    const deleted = await Role.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Role tidak ditemukan" });
    res.json({ message: "Role berhasil dihapus ✅" });
  } catch (error) {
    res.status(500).json({ message: "Gagal hapus role", error: error.message });
  }
};

module.exports = {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
