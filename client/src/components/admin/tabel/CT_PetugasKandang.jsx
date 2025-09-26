// ./components/admin/tabel/CT_PetugasKandang.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiDetail } from "react-icons/bi";

const CT_PetugasKandang = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        const filtered = res.data.filter(user => user.role_id === 3);
        setUsers(filtered);
      } catch (err) {
        console.error("Gagal mengambil data petugas kandang:", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Daftar Petugas Kandang</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Nama</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Alamat</th>
              <th className="py-3 px-6 text-left">No. Telp</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {users.map(user => (
              <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{user._id}</td>
                <td className="py-3 px-6 text-left">{user.nama}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">{user.alamat}</td>
                <td className="py-3 px-6 text-left">{user.no_telp}</td>
                <td className="py-3 px-6 text-center">
                  <button className="w-4 transform hover:text-green-500 hover:scale-110">
                    <BiDetail />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CT_PetugasKandang;
