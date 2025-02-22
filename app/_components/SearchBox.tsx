// develop by rvnkrwn

const SearchBox = () => {
    return (
        <div className="w-full bg-white/20 backdrop-blur p-2 rounded-lg">
            <label htmlFor="hs-trailing-button-add-on-with-icon-and-button" className="sr-only">Label</label>
            <div className="relative flex rounded-lg shadow-sm">
                <input type="text" id="hs-trailing-button-add-on-with-icon-and-button"
                       name="hs-trailing-button-add-on-with-icon-and-button"
                       placeholder="Kata kunci, jabatan, perusahaan"
                       className="p-4 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm outline-none"/>
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg className="shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </div>
                <button type="button"
                        className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-[#00AAFF] text-white">Search
                </button>
            </div>
        </div>
    )
}

export default SearchBox;