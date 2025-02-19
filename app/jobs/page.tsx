type Props = {};

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

const page = (props: Props) => {
  return (
    <div className="px-12 py-12">
      <SearchButton />
    </div>
  );
};

const SearchButton = () => {
  return (
    <div>
      <label
        htmlFor="hs-trailing-button-add-on-with-icon-and-button"
        className="sr-only"
      >
        Label
      </label>
      <div className="relative flex rounded-lg shadow-sm">
        <input
          type="text"
          id="hs-trailing-button-add-on-with-icon-and-button"
          name="hs-trailing-button-add-on-with-icon-and-button"
          className="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
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
        <DropDown dropDownName="Pilih Jasa" dropDownList={jasaCategories} />
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

const DropDown = ({
  dropDownName,
  dropDownList,
}: {
  dropDownName: string;
  dropDownList: string[];
}) => {
  return (
    <div className="hs-dropdown relative">
      <button
        id="hs-dropdown-default"
        type="button"
        className="hs-dropdown-toggle py-3 px-4 items-center gap-x-2 text-sm font-medium  border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none text-nowrap flex dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        {dropDownName}
        <svg
          className="hs-dropdown-open:rotate-180 size-4"
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full text-nowrap"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-default"
      >
        <div className="p-1 space-y-0.5">
          {dropDownList.map((item) => (
            <a
              key={item}
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
