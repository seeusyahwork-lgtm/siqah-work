import React from 'react'


import bgSiqah from '../../assets/img/background-siqah.jpeg'
import logoOnly from '../../assets/lg/Siqah-lg-500px.png'


const CG_aqiqah = () => {
    return (
        <div className='flex flex-col h-auto lg:h-[600px]'>

            {/* Responsive Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
                style={{ backgroundImage: `url(${bgSiqah})` }}
            >

               

                <div className="card card-side bg-base-100 shadow-sm ">
                    <figure>
                        <img className='h-[200px] w-[150px]'
                            src="https://plus.unsplash.com/premium_photo-1676049342470-e0c3bd0d6707?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-cormorant text-center font-bold">Pengertian Aqiqah</h2>
                        <p className=' text-black font-montserrat'>
                         Pengertian aqiqah dalam istilah agama berarti penyembelihan hewan untuk anak
                        yang baru lahir sebagai bentuk rasa syukur kepada Allah SWT atas anugerahnya,
                        dengan niat dan syarat-syarat tertentu. Biasanya aqiqah dilakukan saat anak
                        berusia tujuh hari. Tetapi ada juga yang baru mengaqiqahkan anaknya pada hari
                        ke-14 atau ke-21 usai kelahiran sang anak.                     </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>



                <div className='bg-amber-200 p-4 rounded'>
                    <h3 className='text-xl font-bold text-center mb-2'>Hukum Aqiqah</h3>
                    <p className='text-justify'>
                        Hukum aqiqah adalah sunnah muakkadah, yaitu sangat dianjurkan dan memiliki
                        pahala jika dikerjakan, namun tidak berdosa jika ditinggalkan.
                    </p>
                </div>

                <div className='bg-amber-600 p-4 rounded'>
                    <h3 className='text-xl font-bold text-center mb-2'>Syarat Aqiqah</h3>
                    <p className='text-justify'>
                        Syarat aqiqah tentunya mengacu pada ketentuan kambing atau domba yang
                        disembelih. Adapun syarat aqiqah terkait kambing atau domba yang digunakan
                        adalah:
                    </p>

                    <ul className='list-decimal m-3'>
                        <li>Kambing atau domba harus dalam keadaan sehat dan tidak sakit.</li>
                        <li>Kambing atau domba aqiqah tidak kurus.</li>
                        <li>Syarat aqiqah adalah kambing atau domba tidak cacat.</li>
                        <li>Kambing atau domba aqiqah sudah berumur satu tahun lebih atau sudah
                            pernah berganti gigi.</li>
                    </ul>

                    <p className='text-justify mt-3'>
                        Mayoritas ulama berpendapat bahwa jumlah hewan untuk aqiqah disesuaikan
                        dengan jenis kelamin anak:
                    </p>

                    <ul className='list-disc m-3'>
                        <li>Anak laki-laki: 2 ekor kambing atau domba</li>
                        <li>Anak perempuan: 1 ekor kambing atau domba</li>
                    </ul>

                    <p className='mt-3'>Hal ini berdasarkan hadis:</p>
                    <p className='italic text-justify'>
                        “Untuk anak laki-laki dua ekor kambing, dan untuk anak perempuan satu ekor
                        kambing. Tidak mengapa jantan atau betina.” (HR. Abu Dawud No. 2834–2835)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CG_aqiqah