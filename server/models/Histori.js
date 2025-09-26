const mongoose = require("mongoose");

const historiSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  paket_id: { type: mongoose.Schema.Types.ObjectId, ref: "Paket", required: true },
  tanggal: { type: Date, default: Date.now },
  status: { type: String, default: "pending" },
  catatan: { type: String },
}, { collection: "tb_histori" });

module.exports = mongoose.model("Histori", historiSchema);
