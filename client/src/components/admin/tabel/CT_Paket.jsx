// ./components/admin/tabel/CT_Paket.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiDetail } from "react-icons/bi";

const CT_Paket = () => {
  const [paket, setPaket] = useState([]);

  // Fetch data paket dari backend
  useEffect(() => {
    const fetchPaket = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/paket"); // pastikan endpoint backend
        setPaket(res.data); // simpan array paket ke state
      } catch (err) {
        console.error("Gagal mengambil data paket:", err);
      }
    };

    fetchPaket();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Daftar Paket Aqiqah</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Nama Paket</th>
              <th className="py-3 px-6 text-left">Item</th>
              <th className="py-3 px-6 text-left">Highlight</th>
              <th className="py-3 px-6 text-left">Keterangan</th>
              <th className="py-3 px-6 text-left">Harga</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {paket.map((p) => (
              <tr
                key={p._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{p._id}</td>
                <td className="py-3 px-6 text-left">{p.nama_paket}</td>
                <td className="py-3 px-6 text-left">{p.item.join(", ")}</td>
                <td className="py-3 px-6 text-left">{p.highlight}</td>
                <td className="py-3 px-6 text-left">{p.keterangan}</td>
                <td className="py-3 px-6 text-left">
                  Rp {p.harga.toLocaleString()}
                </td>
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

export default CT_Paket;

