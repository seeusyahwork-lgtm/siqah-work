import React from 'react'
import logoOnly from '../assets/lg/Siqah-lg-100px.png'

const Nabar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-55">
            {/* LEFT (MOBILE MENU) */}
            <div className="navbar-start ">
                {/* Dropdown menu untuk mobile */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Tentang</a></li>
                        <li><a>Harga</a></li>
                    </ul>
                </div>

                {/* LOGO di kiri (hanya tampil di desktop) */}
                <div className="hidden lg:flex items-center m-auto">
                    <img
                        src={logoOnly}
                        className="h-16 w-16 lg:h-20 lg:w-20"
                        alt="logo"
                    />
                </div>
            </div>

            {/* LOGO di tengah (hanya tampil di mobile) */}
            <div className="navbar-center lg:hidden">
                <img
                    src={logoOnly}
                    className="h-16 w-16"
                    alt="logo"
                />
            </div>

            {/* MENU DESKTOP */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Tentang</a></li>
                    <li><a>Harga</a></li>
                </ul>
            </div>

            {/* LOGIN BUTTON */}
            <div className="navbar-end">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
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

export default Nabar

