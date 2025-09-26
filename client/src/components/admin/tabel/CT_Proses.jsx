// ./components/admin/tabel/CT_Proses.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiDetail } from "react-icons/bi";

const CT_Proses = () => {
  const [proses, setProses] = useState([]);

  // Fetch data proses dari backend
  useEffect(() => {
    const fetchProses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/proses"); // pastikan endpoint backend
        setProses(res.data);
      } catch (err) {
        console.error("Gagal mengambil data proses:", err);
      }
    };

    fetchProses();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Daftar Proses Aqiqah</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">User ID</th>
              <th className="py-3 px-6 text-left">Paket ID</th>
              <th className="py-3 px-6 text-left">Tahap</th>
              <th className="py-3 px-6 text-left">Status Proses</th>
              <th className="py-3 px-6 text-left">Tanggal</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {proses.map((p) => (
              <tr key={p._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{p._id}</td>
                <td className="py-3 px-6 text-left">{p.user_id}</td>
                <td className="py-3 px-6 text-left">{p.paket_id}</td>
                <td className="py-3 px-6 text-left">
                  {p.tahap.map((t, index) => (
                    <div key={index} className="mb-2 border-b pb-1">
                      <strong>{t.nama_tahap}</strong> - Status: {t.status}
                      <div className="text-xs text-gray-500">
                        Petugas: {t.petugas_id} | Catatan: {t.catatan} | Foto: {t.foto} | Video: {t.video}
                      </div>
                    </div>
                  ))}
                </td>
                <td className="py-3 px-6 text-left">{p.status_proses}</td>
                <td className="py-3 px-6 text-left">
                  {new Date(p.tanggal.$date).toLocaleDateString("id-ID")}
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110">
                      <BiDetail />
                    </button>
                    {/* Tombol edit / delete bisa ditambahkan */}
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

export default CT_Proses;
