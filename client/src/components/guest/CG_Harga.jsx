// /client/src/components/guest/CG_Harga.jsx

import Paket from '../../assets/img/Paket_all.jpeg'

const CG_Harga = () => {
    return (
        <div className="flex flex-col h-auto">

            {/* Judul */}
            <div className="flex flex-col items-center h-auto justify-center text-center space-y-2 px-4">
                <h1 className="sm:text-3xl font-bold text-[#B9914D] font-cormorant">
                    Siqah Akikah
                </h1>
                <p className="text-base sm:text-lg text-[#45624B] font-montserrat">
                    Berikut adalah harga paket layanan akikah kami :
                </p>
            </div>

            {/* Kartu Paket */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 lg:mx-40 mt-10">
                
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img src={Paket} alt="paket_all" className="w-full h-auto" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title sm:text-2xl font-bold text-[#B9914D] font-cormorant justify-center">
                            Paket Premium
                        </h2>
                        <p>
                            A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                            <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
                                Pesan Sekarang
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img src={Paket} alt="paket_all" className="w-full h-auto" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>
                            A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                            <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
                                Pesan Sekarang
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img src={Paket} alt="paket_all" className="w-full h-auto" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>
                            A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                            <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
                                Pesan Sekarang
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CG_Harga
