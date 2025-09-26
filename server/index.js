const express = require("express");
const cors = require("cors"); // untuk request dari React
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const paketRoutes = require("./routes/paketRoutes"); // ⬅️ tambahkan paketRoutes
const prosesRoutes = require("./routes/prosesRoutes"); // ⬅️ tambahkan prosesRoutes
const historiRoutes = require("./routes/historiRoutes"); // ⬅️ tambahkan historiRoutes
const roleRoutes = require("./routes/roleRoutes"); // ⬅️ tambahkan roleRoutes

const app = express();
const PORT = process.env.PORT || 5000;

// koneksi MongoDB
connectDB();

// middleware
app.use(cors()); // aktifkan CORS
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/paket", paketRoutes); // ⬅️ endpoint paket
app.use("/api/proses", prosesRoutes); // ⬅️ endpoint proses
app.use("/api/histori", historiRoutes); // ⬅️ endpoint histori
app.use("/api/roles", roleRoutes); // ⬅️ endpoint roles

// root route
app.get("/", (req, res) => {
  res.send("API berjalan 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
