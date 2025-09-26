const Proses = require("../models/Proses");

// GET all proses
const getProses = async (req, res) => {
  try {
    const proses = await Proses.find();
    res.json(proses);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
};

// GET proses by ID
const getProsesById = async (req, res) => {
  try {
    const proses = await Proses.findById(req.params.id);
    if (!proses) return res.status(404).json({ message: "Proses tidak ditemukan" });
    res.json(proses);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
};

// CREATE proses
const createProses = async (req, res) => {
  try {
    const newProses = new Proses(req.body);
    const savedProses = await newProses.save();
    res.status(201).json(savedProses);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat proses", error: error.message });
  }
};

// UPDATE proses
const updateProses = async (req, res) => {
  try {
    const updated = await Proses.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Proses tidak ditemukan" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Gagal update proses", error: error.message });
  }
};

// DELETE proses
const deleteProses = async (req, res) => {
  try {
    const deleted = await Proses.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Proses tidak ditemukan" });
    res.json({ message: "Proses berhasil dihapus ✅" });
  } catch (error) {
    res.status(500).json({ message: "Gagal hapus proses", error: error.message });
  }
};

module.exports = {
  getProses,
  getProsesById,
  createProses,
  updateProses,
  deleteProses,
};
