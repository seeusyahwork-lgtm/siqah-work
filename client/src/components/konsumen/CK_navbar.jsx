import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import logoOnly from '../../assets/lg/Siqah-lg-100px.png';

const CK_navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo di tengah */}
        <div className="flex-1 flex justify-center">
          <img
            src={logoOnly}
            alt="Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Tombol Logout di kanan */}
        <div className="flex-1 flex justify-end">
          <button className="btn btn-soft btn-secondary flex items-center gap-2">
            <IoLogOutOutline />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CK_navbar;
