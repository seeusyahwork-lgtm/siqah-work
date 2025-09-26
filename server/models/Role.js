const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // nama role, misal: superadmin, konsumen, petugas_kandang
  description: { type: String }, // optional
}, { collection: "tb_roles" });

module.exports = mongoose.model("Role", roleSchema);
