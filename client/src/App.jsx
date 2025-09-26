// /client/src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/guest/P_guest";
import P_Konsumen from "./pages/konsumen/P_Konsumen";
import DashboardSuperadmin from "./pages/admin/P_Admin";
import React from 'react'
import './App.css'



const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        {/* Guest */}
        <Route path="/" element={<Home />} />

        {/* User */}
        <Route path="/konsumen" element={<P_Konsumen />} />

        {/* Admin Superadmin */}
        <Route path="/admin" element={<DashboardSuperadmin />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App