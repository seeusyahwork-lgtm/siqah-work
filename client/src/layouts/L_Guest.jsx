// /client/src/layouts/L_Guest.jsx

import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const L_Guest = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-4">
        {children} {/* Konten halaman akan tampil di sini */}
      </main>
      <Footer />
    </div>
  );
};

export default L_Guest