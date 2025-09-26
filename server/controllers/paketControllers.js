const Paket = require("../models/Paket");

// GET all paket
const getPaket = async (req, res) => {
  try {
    const paket = await Paket.find();
    res.json(paket);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
};

// GET paket by ID
const getPaketById = async (req, res) => {
  try {
    const paket = await Paket.findById(req.params.id);
    if (!paket) return res.status(404).json({ message: "Paket tidak ditemukan" });
    res.json(paket);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
};

// CREATE paket
const createPaket = async (req, res) => {
  try {
    const newPaket = new Paket(req.body);
    const savedPaket = await newPaket.save();
    res.status(201).json(savedPaket);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat paket", error: error.message });
  }
};

// UPDATE paket
const updatePaket = async (req, res) => {
  try {
    const updated = await Paket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Paket tidak ditemukan" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Gagal update paket", error: error.message });
  }
};

// DELETE paket
const deletePaket = async (req, res) => {
  try {
    const deleted = await Paket.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Paket tidak ditemukan" });
    res.json({ message: "Paket berhasil dihapus ✅" });
  } catch (error) {
    res.status(500).json({ message: "Gagal hapus paket", error: error.message });
  }
};

module.exports = {
  getPaket,
  getPaketById,
  createPaket,
  updatePaket,
  deletePaket,
};
