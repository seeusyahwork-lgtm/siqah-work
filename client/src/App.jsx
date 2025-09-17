// /client/src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/guest/P_guest";
import DashboardUser from "./pages/konsumen/P_Konsumen";
import DashboardSuperadmin from "./pages/admin/superadmin/P_superadmin";
import React from 'react'
import './App.css'


const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        {/* Guest */}
        <Route path="/" element={<Home />} />

        {/* User */}
        <Route path="/user/dashboard" element={<DashboardUser />} />

        {/* Admin Superadmin */}
        <Route path="/admin/superadmin" element={<DashboardSuperadmin />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App