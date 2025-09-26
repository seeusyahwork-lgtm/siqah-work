// server/controllers/login.js
const User = require("../models/User");

// Login sederhana tanpa hash
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Cek user ada atau tidak
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email tidak terdaftar ❌" });
    }

    // 2. Cek password (plain text)
    if (user.password !== password) {
      return res.status(400).json({ message: "Password salah ❌" });
    }

    // 3. Jika sukses, kirim role_id secara konsisten
    res.json({
      message: "Anda telah masuk ✅",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role_id: user.role_id, // pastikan property ini sama seperti di DB
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan di server", error: error.message });
  }
};

module.exports = { login };
