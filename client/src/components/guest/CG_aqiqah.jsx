import React from 'react'





const CG_aqiqah = () => {
    return (
        <div className='flex flex-col h-auto mb-10'>

            {/* Responsive Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20'>
                {/* Kartu Grid */}
                <div className="card bg-white bg-opacity-70 shadow-sm flex-row overflow-hidden backdrop-blur-sm">
                    {/* Gambar kiri */}
                    <figure className="w-1/2">
                        <img
                            className="h-full w-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1676049342470-e0c3bd0d6707?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Movie"
                        />
                    </figure>

                    {/* Keterangan kanan */}
                    <div className="card-body w-1/2 flex flex-col justify-between bg-white bg-opacity-70 backdrop-blur-sm">
                        <div>
                            <h2 className="font-cormorant sm:text-2xl font-bold text-center mb-2 text-[#B9914D]">
                                Pengertian Aqiqah
                            </h2>
                            <p className="text-black font-montserrat text-justify">
                                Pengertian aqiqah dalam istilah agama berarti penyembelihan hewan
                                untuk anak yang baru lahir sebagai bentuk rasa syukur kepada Allah
                                SWT atas anugerahnya, dengan niat dan syarat-syarat tertentu.
                                Biasanya aqiqah dilakukan saat anak berusia tujuh hari. Tetapi ada
                                juga yang baru mengaqiqahkan anaknya pada hari ke-14 atau ke-21
                                usai kelahiran sang anak.
                            </p>
                        </div>

                        {/* Tombol di bawah pojok kanan */}
                        <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
                            Mulai Sekarang
                        </button>
                    </div>
                </div>



                <div className="card bg-white bg-opacity-70  shadow-sm flex-row overflow-hidden rounded">
                    {/* Gambar kiri */}
                    <figure className="w-1/2">
                        <img
                            className="h-full w-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1678476398143-4fc367ac88f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Ilustrasi Aqiqah"
                        />
                    </figure>

                    {/* Keterangan kanan */}
                    <div className="card-body w-1/2 flex flex-col justify-between">
                        <div>
                            <h3 className=" font-cormorant sm:text-2xl font-bold text-center mb-2 text-[#B9914D]">Hukum Aqiqah</h3>
                            <p className="font-montserrat text-justify">
                                Hukum aqiqah adalah sunnah muakkadah, yaitu sangat dianjurkan dan
                                memiliki pahala jika dikerjakan, namun tidak berdosa jika ditinggalkan.
                            </p>
                        </div>

                        {/* Tombol pojok kanan bawah */}
                        <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
                            Mulai Sekarang
                        </button>
                    </div>
                </div>


                <div className="card bg-white bg-opacity-70  shadow-sm flex-row overflow-hidden rounded">
                    {/* Gambar kiri */}
                    <figure className="w-2/5">
                        <img
                            className="h-full w-full object-cover"
                            src="https://media.istockphoto.com/id/2215582274/id/foto/black-head-goat-inside-bamboo-cage.jpg?s=2048x2048&w=is&k=20&c=UyGj6gF8DYVS-cYlOUFkduZ46QgtJUHhVOHizrhoWvM="
                            alt="Ilustrasi Syarat Aqiqah"
                        />
                    </figure>

                    {/* Konten kanan */}
                    <div className="card-body w-3/5 flex flex-col justify-between">
                        <div>
                            <h3 className=" font-cormorant sm:text-2xl font-bold text-center mb-2 text-[#B9914D]">Syarat Aqiqah</h3>
                            <p className="text-justify font-montserrat">
                                Syarat aqiqah tentunya mengacu pada ketentuan kambing atau domba yang
                                disembelih. Adapun syarat aqiqah terkait kambing atau domba yang digunakan
                                adalah:
                            </p>

                            <ul className="font-montserrat list-decimal m-3 space-y-1">
                                <li>Kambing atau domba harus dalam keadaan sehat dan tidak sakit.</li>
                                <li>Kambing atau domba aqiqah tidak kurus.</li>
                                <li>Syarat aqiqah adalah kambing atau domba tidak cacat.</li>
                                <li>
                                    Kambing atau domba aqiqah sudah berumur satu tahun lebih atau sudah
                                    pernah berganti gigi.
                                </li>
                            </ul>

                        </div>

                        {/* Tombol di bawah kanan */}
                        <button className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-2 px-6 rounded">
                            Mulai Sekarang
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CG_aqiqah