// /client/src/layouts/L_Guest.jsx
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import bgSiqah from '../assets/img/background-siqah.jpeg'

const L_Guest = ({ children, onNavClick }) => {
  return (
    <div className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bgSiqah})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '10vw 10vw',
        backgroundPosition: 'top left',
      }}
    >
      {/* TERUSKAN onNavClick KE NAVBAR */}
      <Navbar onNavClick={onNavClick} /> 

      <main className="flex-1 p-4">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default L_Guest
