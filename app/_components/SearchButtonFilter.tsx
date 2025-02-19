import DrowpDownCheckList from './DrowpDownCheckList';

const jasaCategories: string[] = [
  'Jasa Pekerja Kasar',
  'Jasa Kebersihan',
  'Jasa Pendidikan',
  'Jasa Kesehatan dan Perawatan',
  'Jasa Kreatif',
  'Jasa Penjahitan',
  'Jasa Perbaikan',
  'Jasa Rumah Tangga',
  'Jasa Transportasi dan Logistik',
  'Jasa Kuliner',
  'Jasa Retail',
  'Jasa Kecantikan',
  'Jasa Event dan Hiburan',
  'Jasa Konsultasi',
];

const SearchButtonFilter = () => {
  return (
    <div className="flex justify-center">
      <div className="relative lg:w-2/3 flex rounded-lg shadow-sm border border-slate-200">
        <input
          type="text"
          id="hs-trailing-button-add-on-with-icon-and-button"
          name="hs-trailing-button-add-on-with-icon-and-button"
          className="py-3 px-4 ps-11 block w-full border-gray-200 rounded-s-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 focus:outline-none "
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
          <svg
            className="shrink-0 size-4 text-gray-400 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <DrowpDownCheckList
          dropDownName="Pilih Jasa"
          dropDownList={jasaCategories}
        />
        <DrowpDownCheckList
          dropDownName="Pilih Lokasi"
          dropDownList={jasaCategories}
        />
        <button
          type="button"
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchButtonFilter;
