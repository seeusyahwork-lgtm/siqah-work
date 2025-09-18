import React from 'react'
import { FaCheck } from "react-icons/fa";
import logoOnly from '../../assets/lg/Siqah-lg-HD.png'
import kenapaSiqah from '../../assets/img/kenapa_siqah.png'

const CG_Tentang = () => {
  return (
    <div className="flex flex-col h-auto mx-4 md:mx-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5">

        {/* LOGO & PENJELASAN 1 */}
        <div className="h-auto w-full flex justify-center items-center flex-col text-center px-4">
          <img
            src={logoOnly}
            alt="logo-only"
            className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-3/4 h-auto mb-4"
          />
        </div>

        <div className="h-auto w-full flex flex-col items-center p-6">
          <h1 className="sm:text-5xl font-bold text-[#B9914D] mb-4 font-cormorant">
            Siqah - Siap Aqiqah
          </h1>
          <p className="text-base sm:text-lg text-[#45624B] mb-8 font-montserrat font-bold max-w-2xl text-center">
            Siqah Akikah adalah layanan akikah terpercaya yang berdiri sejak tahun 2025 di Bandung,
            dengan visi menghadirkan pengalaman akikah yang praktis, syar’i, dan berkesan bagi setiap keluarga Muslim.
          </p>
          <p className="text-base sm:text-lg text-[#45624B] mb-8 font-montserrat font-bold max-w-2xl text-center">
            Berangkat dari kebutuhan para orang tua akan layanan akikah yang tidak hanya mudah,
            tapi juga amanah dan sesuai tuntunan, Siqah lahir sebagai solusi yang mengedepankan kualitas,
            kejujuran, dan pelayanan terbaik.
          </p>
          <h1 className="sm:text-3xl font-bold text-[#B9914D] mb-4 font-cormorant">
            “Siap Akikah” — Itulah semangat kami.
          </h1>
          <p className="text-base sm:text-lg text-[#45624B] mb-8 font-montserrat font-bold max-w-2xl text-center">
            Siqah (dalam tulisan Arab: الثقة) berasal dari kata yang berarti “terpercaya” atau “dapat dipercaya.”
            Filosofi ini menjadi dasar dari setiap langkah kami dalam melayani.
          </p>
        </div>

        {/* KENAPA SIQAH */}
        <div className="h-auto w-full flex flex-col items-center p-6 order-last md:order-none">
          <h1 className="sm:text-5xl font-bold text-[#B9914D] mb-4 font-cormorant">
            Kenapa Siqah Akikah?
          </h1>

          <ul className="list-none text-base sm:text-lg text-[#45624B] mb-8 font-montserrat font-bold max-w-2xl space-y-2">
            {[
              "Berpengalaman & amanah",
              "Proses penyembelihan sesuai syariat",
              "Paket lengkap & praktis",
              "Daging diolah di dapur higienis & profesional",
              "Pelayanan ramah dan transparan",
              "Biaya terjangkau & transparan",
              "Dokumentasi setiap langkah"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheck className="text-[#B9914D] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-base sm:text-lg text-[#45624B] mb-8 font-montserrat font-bold max-w-2xl text-center">
            Mulai dari pemilihan hewan, proses pemotongan, pengolahan hingga pendistribusian — semua kami tangani
            dengan sepenuh hati, agar Anda bisa fokus menikmati momen spesial bersama keluarga.
          </p>

          <p className="text-base sm:text-lg text-[#45624B] mb-8 font-montserrat font-bold max-w-2xl text-center">
            Kini, ratusan keluarga di Bandung dan sekitarnya telah mempercayakan akikah buah hati mereka kepada Siqah.
            InsyaAllah, kami akan terus menjaga amanah ini dengan pelayanan terbaik dan penuh tanggung jawab.
          </p>
        </div>

        <div className="h-auto w-full flex justify-center items-center flex-col text-center">
          <img src={kenapaSiqah} alt="kenapa-siqah" className="w-3/4 h-auto mb-4" />
        </div>

        <div className="col-span-1 md:col-span-2 text-center mb-10">
          <h1 className="sm:text-3xl font-bold text-[#B9914D] font-cormorant">
            Siqah Akikah
          </h1>
          <p className="text-base sm:text-lg text-[#45624B] font-montserrat italic">
            Siap Akikah. Terpercaya dalam setiap langkah
          </p>
        </div>

      </div>
    </div>
  )
}

export default CG_Tentang
