const mongoose = require("mongoose");

const paketSchema = new mongoose.Schema({
  nama_paket: { type: String, required: true },
  item: [{ type: String, required: true }],
  highlight: { type: String },
  keterangan: { type: String },
}, { collection: "tb_paket" }); // pastikan collection sesuai

module.exports = mongoose.model("Paket", paketSchema);
