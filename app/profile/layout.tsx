
const layout = () => {
  return (
    <div className="bg-slate-100 text-black">
      <div className="flex justify-center border-b-2">
        <ul className="sm:flex hidden items-center gap-4 py-2">
            <li>
              <a href="" className="inline-block px-4 hover:text-primary duration-200">
               Profil Info
              </a>
            </li>
            <li>
              <a href="" className="inline-block px-4 hover:text-primary duration-200">
               Setting
              </a>
            </li>
        </ul>
      </div>


      <div className='px-8 py-5'>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            className="inline-block size-[62px] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Avatar"
          ></img>

          <div className="">
            <h2 className="">Revan Kurniawan</h2>
            <p>Revan@gmail.com</p>
          </div>
        </div>

        <button
          type="button"
          className="py-2 px-7 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Edit
        </button>
      </div>

      <div className="mt-8">

        <div className="flex items-center gap-5 w-full mb-5">
      <div className="w-1/2">
        <label className="block text-sm font-medium mb-2 text-black" >
          Nama
        </label>
        <input
          type="email"
          id="input-label"
          className=" py-3 w-full px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Revan Kurniawan"
        />
      </div>


      
      <div className="w-1/2">
        <label className="block text-sm font-medium mb-2 text-black">
          Email
        </label>
        <input
          type="email"
          id="input-label"
          className="py-3 w-full px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="revankurniawan@gmail.com"
        />
      </div>

      </div>

      <div className="flex items-center gap-5 w-full mb-5">
      <div className="w-1/2">
        <label className="block text-sm font-medium mb-2 text-black" >
        WhatsApp Number
        </label>
        <input
          type="email"
          id="input-label"
          className="py-3 w-full px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="0812788938"
        />
      </div>


      
      <div className="w-1/2">
        <label className="block text-sm font-medium mb-2 text-black">
          Lokasi
        </label>
        <input
          type="email"
          id="input-label"
          className="py-3 w-full px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Bandung, Jawa Barat"
        />
      </div>

      </div>

      <div className="flex items-center gap-5 w-full mb-5">
      <div className="w-1/2">
        <label className="block text-sm font-medium mb-2 text-black" >
        Usia, Jenis Kelamin
        </label>
        <input
          type="email"
          id="input-label"
          className="py-3 w-full px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="19 tahun, Laki-laki"
        />
      </div>


      
      <div className="w-1/2">
        <label className="block text-sm font-medium mb-2 text-black">
          Pendidikan Terakhir
        </label>
        <input
          type="email"
          id="input-label"
          className="py-3 w-full px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="SMA/SMK"
        />
      </div>

      </div>

      </div>


  <div className="mt-8 flex flex-col bg-white border shadow-sm rounded-xl dark:border-neutral-700 dark:shadow-neutral-700/70">

  <div className="hidden sm:block">
    <nav className="relative z-0 flex border-b rounded-xl divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
      <a className="group hover:text-black relative min-w-0 flex-1 py-4 px-4 border-b-2 border-b-blue-600 text-gray-900 rounded-ss-xl text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:z-10 bg-[#00AAFF] dark:border-blue-500 dark:text-white" aria-current="page" href="#">
        Tantang Saya
      </a>

      <a className="group hover:text-black relative min-w-0 flex-1 py-4 px-4 text-gray-500  text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:z-10 bg-[#00AAFF]  text-white text-white" href="#">
        Pengalaman Kerja
      </a>

      <a className="group hover:text-black relative min-w-0 flex-1 py-4 px-4 text-gray-500  text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:z-10 bg-[#00AAFF]  text-white text-white" href="#">
        Pendidikan
      </a>

      <a className="group hover:text-black relative min-w-0 flex-1 py-4 px-4 text-gray-500  rounded-se-xl text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:z-10 bg-[#00AAFF]  text-white text-white" href="#">
        Skill
      </a>

      <a className="group hover:text-black relative min-w-0 flex-1 py-4 px-4 text-gray-500  rounded-se-xl text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:z-10 bg-[#00AAFF]  text-white  text-white" href="#">
        Minat dan Referensi Pekerjaan 
      </a>
    </nav>
  </div>


  <div className="p-4 text-center md:py-7 md:px-5">
    <p className="mt-2 text-gray-500 dark:text-neutral-400">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <a className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
     + Go somewhere
    </a>
  </div>
</div>
      

    </div>

    </div>

    
  )
}

export default layout
