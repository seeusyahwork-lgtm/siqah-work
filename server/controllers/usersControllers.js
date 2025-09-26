// /server/controllers/usersControllers.js
const User = require("../models/User");

// GET semua users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data users", error: error.message });
  }
};

// GET user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data user", error: error.message });
  }
};

// POST tambah user
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat user", error: error.message });
  }
};

// PUT update user
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User tidak ditemukan" });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Gagal update user", error: error.message });
  }
};

// DELETE hapus user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User tidak ditemukan" });
    res.json({ message: "User berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal hapus user", error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
