// ./pages/admin/P_Admin.jsx
import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { MdDataset } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { LuPackage } from "react-icons/lu";
import { GiGoat } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";

// Import komponen konten
import CT_Paket from '../../components/admin/tabel/CT_Paket';
import CT_Proses from '../../components/admin/tabel/CT_Proses';
import CT_Histori from '../../components/admin/tabel/CT_Histori';
import CT_Konsumen from '../../components/admin/tabel/CT_Konsumen';
import CT_PetugasKandang from '../../components/admin/tabel/CT_PetugasKandang';
import CT_Dapur from '../../components/admin/tabel/CT_Dapur';
import CT_Kurir from '../../components/admin/tabel/CT_Kurir';

const P_Admin = () => {
    const [activeComponent, setActiveComponent] = useState('');

    const handleLogout = () => {
        // Hapus data user dari localStorage
        localStorage.removeItem("user");
        // Reset active component
        setActiveComponent('');
        // Redirect ke halaman utama
        window.location.href = "/";
    };

    return (
        <div className='grid gap-2 p-4 grid-cols-[250px_minmax(900px,_1fr)] max-h-auto'>
            {/* Sidebar */}
            <div className='max-h-[calc(100vh-32px)] w-56'>
                <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
                    <div className='flex flex-col gap-2'>
                        {/* Wadah akunToggle */}
                        <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
                            <button className="flex p-0.5 hover:bg-stone-300 hover:text-black rounded transition-colors relative gap-2 w-full items-center">
                                <div className="bg-neutral text-neutral-content w-16 rounded-full">
                                    <span className="text-xl">SA</span>
                                </div>
                                <div className="text-start">
                                    <span className="text-sm font-semibold block">Super Admin</span>
                                    <span className="text-sm font-bold block text-stone-400">
                                        SuperAdmin@siqah.com
                                    </span>
                                </div>
                                <FiChevronDown className="absolute right-2 top-1/2 translate-y-[-50%] text-xs" />
                            </button>
                        </div>

                        {/* Menu Sidebar */}
                        <div>
                            <ul className="menu bg-base-200 rounded-box w-56">
                                <li>
                                    <details open>
                                        <summary className="font-medium flex items-center gap-2 px-2 py-1 text-teal-600">
                                            <LuPackage /> Paket
                                        </summary>
                                        <ul>
                                            <li>
                                                <button
                                                    onClick={() => setActiveComponent('paket')}
                                                    className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded 
            ${activeComponent === 'paket'
                                                            ? 'bg-teal-600 text-white'
                                                            : 'text-teal-600 hover:underline'}`}
                                                >
                                                    <MdDataset /> List Paket
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => setActiveComponent('pesanan')}
                                                    className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded 
            ${activeComponent === 'pesanan'
                                                            ? 'bg-teal-600 text-white'
                                                            : 'text-teal-600 hover:underline'}`}
                                                >
                                                    <MdDataset /> Pesanan
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => setActiveComponent('histori')}
                                                    className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded 
            ${activeComponent === 'histori'
                                                            ? 'bg-teal-600 text-white'
                                                            : 'text-teal-600 hover:underline'}`}
                                                >
                                                    <MdDataset /> Histori
                                                </button>
                                            </li>
                                        </ul>
                                    </details>
                                </li>

                                <li>
                                    <button
                                        onClick={() => setActiveComponent('kandang')}
                                        className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded 
      ${activeComponent === 'kandang'
                                                ? 'bg-teal-600 text-white'
                                                : 'text-teal-600 hover:underline'}`}
                                    >
                                        <GiGoat /> Petugas Kandang
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => setActiveComponent('dapur')}
                                        className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded 
      ${activeComponent === 'dapur'
                                                ? 'bg-teal-600 text-white'
                                                : 'text-teal-600 hover:underline'}`}
                                    >
                                        <FaKitchenSet /> Petugas Dapur
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => setActiveComponent('kurir')}
                                        className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded 
      ${activeComponent === 'kurir'
                                                ? 'bg-teal-600 text-white'
                                                : 'text-teal-600 hover:underline'}`}
                                    >
                                        <FaTruck /> Kurir
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => setActiveComponent('konsumen')}
                                        className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded 
      ${activeComponent === 'konsumen'
                                                ? 'bg-teal-600 text-white'
                                                : 'text-teal-600 hover:underline'}`}
                                    >
                                        <FaRegUser /> Konsumen
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Main */}
            <div className="mt-2">
                <div className="border-b shadow mb-4 mt-2 pb-4 border-stone-300">
                    <div className="flex justify-between items-center px-4 py-2">
                        <div>
                            <span className="text-sm font-bold block">Hi, selamat datang</span>
                            <span className="text-xs block text-stone-500">
                                {new Date().toLocaleDateString("id-ID", {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                })}
                            </span>
                        </div>
                        <button
                            className="btn btn-outline btn-secondary"
                            onClick={handleLogout}
                        >
                            <IoLogOutOutline /> Logout
                        </button>
                    </div>
                </div>

                {/* Tempat isi konten sesuai activeComponent */}
                <div className="p-4">
                    {activeComponent === "paket" && <CT_Paket />}
                    {activeComponent === "pesanan" && <CT_Proses />}
                    {activeComponent === "histori" && <CT_Histori />}
                    {activeComponent === "kandang" && <CT_PetugasKandang />}
                    {activeComponent === "dapur" && <CT_Dapur />}
                    {activeComponent === "kurir" && <CT_Kurir />}
                    {activeComponent === "konsumen" && <CT_Konsumen />}
                </div>
            </div>
        </div>
    );
};

export default P_Admin;
