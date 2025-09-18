// /client/src/pages/guest/P_guest.jsx
import React, { useState } from 'react'
import L_Guest from '../../layouts/L_Guest'
import Navbar from '../../components/Navbar'
import CG_Pembukaan from '../../components/guest/CG_Pembukaan'
import CG_aqiqah from '../../components/guest/CG_aqiqah'
import CG_Minikatalog from '../../components/guest/CG_Minikatalog'
import CG_Tentang from '../../components/guest/CG_Tentang'
import CG_Harga from '../../components/guest/CG_Harga'

const P_guest = () => {
  const [activeSection, setActiveSection] = useState('home')

  const renderSection = () => {
    switch (activeSection) {
      case 'tentang':
        return <CG_Tentang />
      case 'harga':
        return <CG_Harga />
      case 'home':
      default:
        return (
          <>
            <CG_Pembukaan />
            <CG_aqiqah />
            <CG_Minikatalog />
          </>
        )
    }
  }

  return (
    <L_Guest onNavClick={setActiveSection}>
     
      {renderSection()}
    </L_Guest>
  )
}

export default P_guest
