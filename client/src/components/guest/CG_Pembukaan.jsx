
// /client/src/components/guest/CG_Pembukaan.jsx


import logoOnly from '../../assets/lg/Siqah-lg-500px.png'


const CG_Pembukaan = () => {
    return (
        <div className="w-full h-auto bg-cover bg-center mb-10" >
            <div className='flex flex-col lg:flex-row h-auto '>

                {/* ==============================
            BAGIAN KIRI: FOTO-FOTO KOLOM
        =============================== */}
                <div className='basis-1/2 relative flex justify-center items-center p-6'>
                    <div className="relative w-full max-w-md h-[350px] sm:h-[500px]">

                        {/* FOTO 1 */}
                        <img
                            src="https://images.unsplash.com/photo-1716047866470-eee2aa333637?q=80&w=1170&auto=format&fit=crop"
                            alt="foto 1"
                            className="absolute top-0 left-1/8 w-1/3 sm:w-2/5 h-40 sm:h-64 object-cover shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:z-50"
                        />

                        {/* FOTO 2 */}
                        <img
                            src="https://images.unsplash.com/photo-1716047864438-9f91b14d1bb7?q=80&w=1170&auto=format&fit=crop"
                            alt="foto 2"
                            className="absolute top-0 left-2/4 sm:left-50 w-2/5 sm:w-1/2 h-40 sm:h-48 object-cover shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:z-50"
                        />

                        {/* FOTO 3 */}
                        <img
                            src="https://images.unsplash.com/photo-1716047866102-ec21d084fe0e?q=80&w=1170&auto=format&fit=crop"
                            alt="foto 3"
                            className="absolute top-28 sm:top-40 left-12 sm:left-24 w-1/2 sm:w-2/3 h-48 sm:h-80 object-cover shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:z-50"
                        />

                    </div>
                </div>

                {/* ==============================
            BAGIAN KANAN: LOGO + TEKS
        =============================== */}
                <div className='basis-1/2 flex justify-center p-6'>
                    <div className="flex flex-col justify-center items-center text-center">

                        {/* LOGO */}
                        <img src={logoOnly} alt='logo-only' className='w-40 h-40' />

                        {/* JUDUL: Montserrat */}
                        <h1 className="text-3xl sm:text-4xl font-bold text-[#B9914D] mb-4 font-cormorant">
                            Siqah - Siap Aqiqah
                        </h1>

                        {/* PARAGRAF: Cormorant Garamond */}
                        <p className="text-base sm:text-lg text-[#45624B] mb-8 font-bold font-montserrat">
                            Siqah Akikah adalah layanan akikah terpercaya yang berdiri sejak tahun 2025 di Bandung,
                             dengan visi menghadirkan pengalaman akikah yang praktis, syar’i, dan berkesan bagi setiap keluarga Muslim.
                            <br />
                             Berangkat dari kebutuhan para orang tua akan layanan akikah yang tidak hanya mudah,
                             tapi juga amanah dan sesuai tuntunan, Siqah lahir sebagai solusi yang mengedepankan kualitas,
                              kejujuran, dan pelayanan terbaik.

                        </p>
                        
                        {/* TOMBOL CTA */}
                        <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
                            Baca Lebih Lanjut
                        </button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CG_Pembukaan