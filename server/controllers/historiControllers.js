const Histori = require("../models/Histori");

// GET all histori
const getHistori = async (req, res) => {
  try {
    const histori = await Histori.find()
      .populate("user_id", "name email")  // optional: tampilkan data user
      .populate("paket_id", "nama_paket highlight"); // optional: tampilkan data paket
    res.json(histori);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
};

// GET histori by ID
const getHistoriById = async (req, res) => {
  try {
    const histori = await Histori.findById(req.params.id)
      .populate("user_id", "name email")
      .populate("paket_id", "nama_paket highlight");
    if (!histori) return res.status(404).json({ message: "Histori tidak ditemukan" });
    res.json(histori);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
};

// CREATE histori
const createHistori = async (req, res) => {
  try {
    const newHistori = new Histori(req.body);
    const savedHistori = await newHistori.save();
    res.status(201).json(savedHistori);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat histori", error: error.message });
  }
};

// UPDATE histori
const updateHistori = async (req, res) => {
  try {
    const updated = await Histori.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Histori tidak ditemukan" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Gagal update histori", error: error.message });
  }
};

// DELETE histori
const deleteHistori = async (req, res) => {
  try {
    const deleted = await Histori.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Histori tidak ditemukan" });
    res.json({ message: "Histori berhasil dihapus ✅" });
  } catch (error) {
    res.status(500).json({ message: "Gagal hapus histori", error: error.message });
  }
};

module.exports = {
  getHistori,
  getHistoriById,
  createHistori,
  updateHistori,
  deleteHistori,
};
