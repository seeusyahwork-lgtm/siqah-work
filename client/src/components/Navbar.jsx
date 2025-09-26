// /client/src/components/Navbar.jsx
import React, { useState } from 'react'
import axios from 'axios' // untuk request ke backend
import logoOnly from '../assets/lg/Siqah-lg-100px.png'

const Navbar = ({ onNavClick }) => {
    // state untuk form login
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    // fungsi handle login
    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const res = await axios.post("http://localhost:5000/api/login", { email, password }) 
            // backend akan mengembalikan data user
            console.log("Login success:", res.data)

            // simpan token / data user di localStorage (opsional, bisa juga pakai context)
            localStorage.setItem("user", JSON.stringify(res.data))

            // tutup modal setelah login sukses
            document.getElementById('my_modal_3').close()
            alert("Login berhasil ✅")
        } catch (err) {
            console.error(err)
            setError(err.response?.data?.message || "Login gagal, periksa kembali email & password")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-55">
            {/* Kiri - Logo + Dropdown */}
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-4xl font-cormorant font-bold text-[#B9914D] shadow">
                        <li><a onClick={() => onNavClick?.('home')}>Home</a></li>
                        <li><a onClick={() => onNavClick?.('tentang')}>Tentang</a></li>
                        <li><a onClick={() => onNavClick?.('harga')}>Harga</a></li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center m-auto">
                    <img src={logoOnly} className="h-16 w-16 lg:h-20 lg:w-20" alt="logo" />
                </div>
            </div>

            {/* Tengah - Logo di mobile */}
            <div className="navbar-center lg:hidden">
                <img src={logoOnly} className="h-16 w-16" alt="logo" />
            </div>

            {/* Tengah - Menu di desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl font-cormorant font-bold text-[#B9914D]">
                    <li><a onClick={() => onNavClick?.('home')}>Home</a></li>
                    <li><a onClick={() => onNavClick?.('tentang')}>Tentang</a></li>
                    <li><a onClick={() => onNavClick?.('harga')}>Harga</a></li>
                </ul>
            </div>

            {/* Kanan - Tombol Login */}
            <div className="navbar-end">
                <button
                    className="btn bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded font-montserrat"
                    onClick={() => document.getElementById('my_modal_3').showModal()}>
                    Login
                </button>

                {/* Modal Login */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <h3 className="font-bold text-2xl text-center text-[#B9914D] font-cormorant mb-4">
                            Login
                        </h3>

                        <form className="space-y-4" onSubmit={handleLogin}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="masukkan email"
                                    className="input input-bordered w-full mt-1"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    placeholder="masukkan password"
                                    className="input input-bordered w-full mt-1"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Error message */}
                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full btn bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold font-montserrat"
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Login"}
                            </button>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default Navbar
