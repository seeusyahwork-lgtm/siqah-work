const mongoose = require("mongoose");

const prosesSchema = new mongoose.Schema({
  nama_proses: { type: String, required: true },
  deskripsi: { type: String },
  status: { type: String },
}, { collection: "tb_proses" }); // pastikan collection sesuai

module.exports = mongoose.model("Proses", prosesSchema);
