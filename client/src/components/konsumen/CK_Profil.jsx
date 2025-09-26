import React from 'react'

const CK_Profil = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 mt-6">
      
      {/* Header / Foto Profil */}
      <div className="flex items-center p-4" style={{ backgroundColor: '#45624B' }}>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Profil"
          className="w-20 h-20 rounded-full object-cover border-2"
          style={{ borderColor: '#B9914D' }}
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-white">Naufal Rahmawan</h2>
          <p className="text-gray-200 text-sm">Alamat: <span className="font-medium text-white">Isi alamat lengkap</span></p>
        </div>
      </div>

      {/* Detail Paket */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#45624B] mb-2">Paket yang Dipilih</h3>
        <div className="p-3 rounded-lg border" style={{ borderColor: '#B9914D', backgroundColor: '#FDF6EC' }}>
          <p className="font-medium text-[#45624B]">Nama Paket: <span className="font-normal text-[#45624B]">Paket Aqiqah Premium</span></p>
          <p className="mt-1 text-[#45624B] text-sm">Deskripsi: Cocok untuk acara besar, sudah termasuk pengantaran dan hidangan lengkap.</p>
        </div>
      </div>

      {/* Footer / Actions (opsional) */}
      <div className="p-4 border-t border-gray-100 flex justify-end gap-2">
        <button
          className="px-4 py-2 rounded-lg transition-colors"
          style={{ backgroundColor: '#45624B', color: 'white' }}
        >
          Hubungi Admin
        </button>
      </div>
    </div>
  )
}

export default CK_Profil
