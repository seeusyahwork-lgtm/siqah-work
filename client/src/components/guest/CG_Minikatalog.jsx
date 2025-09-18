import React from 'react'


function CG_Minikatalog() {
    return (
        <div>

            <div className='flex flex-col lg:flex-row h-auto'

            >

                {/* Bagian kiri (kuning) */}
                <div className='basis-1/2  relative flex justify-center items-center p-6'>
                    {/* Container foto */}
                    <div className="carousel carousel-center bg-neutral rounded-box w-4/5 mx-auto space-x-4 p-4">
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                className="rounded-box"
                            />
                        </div>
                    </div>

                </div>

                {/* Bagian kanan (coklat) */}
                <div className="basis-1/2 flex justify-center p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
    
    {/* Card 1 */}
    <div className="bg-white/80 p-6 rounded flex flex-col justify-between shadow-md">
      <div>
        <h1 className="font-cormorant text-2xl font-bold text-center mb-6">
          Paket 1 - Full pack
        </h1>
        <p className="font-montserrat text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
        </p>
        <ul className="font-montserrat list-disc ml-6 my-3">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <p className="font-montserrat text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
        </p>
      </div>

      {/* Tombol di bawah */}
        <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
            Pesan Sekarang
        </button>
    </div>

    {/* Card 2 */}
    <div className="bg-white/80 p-6 rounded flex flex-col justify-between shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-center mb-6">
          Paket 2 - Hemat
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
        </p>
        <ul className="list-disc ml-6 my-3">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
        </p>
      </div>

      <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
            Pesan Sekarang
        </button>
    </div>

    {/* Card 3 */}
    <div className="bg-white/80 p-6 rounded flex flex-col justify-between shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-center mb-6">
          Paket 3 - Premium
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
        </p>
        <ul className="list-disc ml-6 my-3">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
        </p>
      </div>

      <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
            Pesan Sekarang
        </button>
    </div>

    {/* Card 4 */}
    <div className="bg-white/80 p-6 rounded flex flex-col justify-between shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-center mb-6">
          List Paket lainnya
        </h1>
        <p className="text-center">penyesuaian paket dan harga</p>
      </div>

      <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
            Lihat disini 
        </button>
    </div>
    
  </div>
</div>

            </div>
        </div>
    )
}

export default CG_Minikatalog