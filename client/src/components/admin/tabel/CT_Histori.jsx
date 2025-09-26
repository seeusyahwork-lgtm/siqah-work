// ./components/admin/tabel/CT_Histori.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiDetail } from "react-icons/bi";

const CT_Histori = () => {
  const [histori, setHistori] = useState([]);

  // Fetch data histori dari backend
  useEffect(() => {
    const fetchHistori = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/histori"); // pastikan endpoint backend
        setHistori(res.data);
      } catch (err) {
        console.error("Gagal mengambil data histori:", err);
      }
    };

    fetchHistori();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Histori Pesanan</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">User ID</th>
              <th className="py-3 px-6 text-left">Paket ID</th>
              <th className="py-3 px-6 text-left">Proses ID</th>
              <th className="py-3 px-6 text-left">Tanggal Selesai</th>
              <th className="py-3 px-6 text-left">Catatan</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {histori.map((h) => (
              <tr key={h._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{h._id}</td>
                <td className="py-3 px-6 text-left">{h.user_id}</td>
                <td className="py-3 px-6 text-left">{h.paket_id}</td>
                <td className="py-3 px-6 text-left">{h.proses_id}</td>
                <td className="py-3 px-6 text-left">
                  {new Date(h.tanggal_selesai.$date).toLocaleDateString("id-ID")}
                </td>
                <td className="py-3 px-6 text-left">{h.catatan}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110">
                      <BiDetail />
                    </button>
                    {/* Tombol edit / delete bisa ditambahkan di sini */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CT_Histori;
