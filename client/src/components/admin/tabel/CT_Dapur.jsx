// ./components/admin/tabel/CT_Dapur.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiDetail, BiPencil, BiTrash } from "react-icons/bi";

const CT_Dapur = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsersAndRoles = async () => {
      try {
        const resUsers = await axios.get("http://localhost:5000/api/users");
        const resRoles = await axios.get("http://localhost:5000/api/roles");
        const filtered = resUsers.data.filter(user => user.role_id === 4);
        setUsers(filtered);
        setRoles(resRoles.data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      }
    };
    fetchUsersAndRoles();
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("Data diedit:", selectedUser);
    closeModal();
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold text-center mb-8">Daftar Petugas Dapur</h1>
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
                <td className="py-3 px-6 text-center flex justify-center gap-2">
                  <button className="p-1 rounded hover:bg-gray-200" title="Lihat">
                    <BiDetail className="text-blue-500 w-5 h-5" />
                  </button>
                  <button
                    className="p-1 rounded hover:bg-gray-200"
                    title="Edit"
                    onClick={() => openModal(user)}
                  >
                    <BiPencil className="text-yellow-500 w-5 h-5" />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-200" title="Hapus">
                    <BiTrash className="text-red-500 w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal horizontal (label & input sejajar) */}
      {showModal && selectedUser && (
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white border rounded shadow-lg p-6 w-11/12 max-w-2xl z-50">
          <h2 className="text-lg font-bold mb-4">Edit Data Petugas Dapur</h2>
          <form onSubmit={handleEditSubmit} className="flex flex-col gap-3">
            {/* ID */}
            <div className="flex items-center gap-2">
              <label className="w-32 font-medium">ID:</label>
              <input type="text" className="border p-2 rounded flex-1" value={selectedUser._id} disabled />
            </div>
            {/* Nama */}
            <div className="flex items-center gap-2">
              <label className="w-32 font-medium">Nama:</label>
              <input
                type="text"
                className="border p-2 rounded flex-1"
                value={selectedUser.nama}
                placeholder="Belum input"
                onChange={(e) => setSelectedUser({ ...selectedUser, nama: e.target.value })}
              />
            </div>
            {/* Email */}
            <div className="flex items-center gap-2">
              <label className="w-32 font-medium">Email:</label>
              <input
                type="email"
                className="border p-2 rounded flex-1"
                value={selectedUser.email}
                placeholder="Belum input"
                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
              />
            </div>
            {/* Password */}
            <div className="flex items-center gap-2">
              <label className="w-32 font-medium">Password:</label>
              <input
                type="text"
                className="border p-2 rounded flex-1"
                value={selectedUser.password}
                placeholder="Belum input"
                onChange={(e) => setSelectedUser({ ...selectedUser, password: e.target.value })}
              />
            </div>
            {/* Alamat */}
            <div className="flex items-center gap-2">
              <label className="w-32 font-medium">Alamat:</label>
              <input
                type="text"
                className="border p-2 rounded flex-1"
                value={selectedUser.alamat}
                placeholder="Belum input"
                onChange={(e) => setSelectedUser({ ...selectedUser, alamat: e.target.value })}
              />
            </div>
            {/* No. Telp */}
            <div className="flex items-center gap-2">
              <label className="w-32 font-medium">No. Telp:</label>
              <input
                type="text"
                className="border p-2 rounded flex-1"
                value={selectedUser.no_telp}
                placeholder="Belum input"
                onChange={(e) => setSelectedUser({ ...selectedUser, no_telp: e.target.value })}
              />
            </div>
            {/* Foto Profil */}
            <div className="flex items-center gap-2">
              <label className="w-32 font-medium">Foto Profil:</label>
              <input
                type="file"
                className="border p-2 rounded flex-1"
                onChange={(e) => setSelectedUser({ ...selectedUser, foto_profil: e.target.files[0] })}
              />
            </div>
            {/* Role */}
            <div className="flex items-center gap-2">
              <label className="w-32 font-medium">Role:</label>
              <select
                className="border p-2 rounded flex-1"
                value={roles.find(r => r._id === selectedUser.role_id)?.role_name || ""}
                onChange={(e) => {
                  const selectedRole = roles.find(r => r.role_name === e.target.value);
                  if (selectedRole) setSelectedUser({ ...selectedUser, role_id: selectedRole._id });
                }}
              >
                {roles.map(role => (
                  <option key={role._id} value={role.role_name}>{role.role_name}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={closeModal}
              >
                Batal
              </button>
              <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CT_Dapur;
