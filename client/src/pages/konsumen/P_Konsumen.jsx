import React from "react";
import CK_navbar from "../../components/konsumen/CK_navbar";
import CK_Timeline from "../../components/konsumen/CK_Timeline";
import CK_Profil from "../../components/konsumen/CK_Profil";
import Footer from "../../components/Footer";

const P_Konsumen = () => {
  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <CK_navbar />

    <div className="mt-30"> {/* beri margin agar tidak tertutup navbar */}
        <CK_Profil />
      </div>

      {/* Timeline */}
      <div className="mt-20"> {/* beri margin agar tidak tertutup profil */}
        <CK_Timeline />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default P_Konsumen;
