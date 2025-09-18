// /client/src/components/Navbar.jsx
import React from 'react'
import logoOnly from '../assets/lg/Siqah-lg-100px.png'

const Navbar = ({ onNavClick }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-55">
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

            <div className="navbar-center lg:hidden">
                <img src={logoOnly} className="h-16 w-16" alt="logo" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl font-cormorant font-bold text-[#B9914D]">
                    <li><a onClick={() => onNavClick?.('home')}>Home</a></li>
                    <li><a onClick={() => onNavClick?.('tentang')}>Tentang</a></li>
                    <li><a onClick={() => onNavClick?.('harga')}>Harga</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                <button className="btn bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded font-montserrat"
                    onClick={() => document.getElementById('my_modal_3').showModal()}>
                    Login
                </button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default Navbar
