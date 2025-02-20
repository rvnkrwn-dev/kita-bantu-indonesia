const DrowpDownCheckList = ({
  dropDownName,
  dropDownList,
  shadow,
}: {
  dropDownName: string;
  dropDownList: string[];
  shadow?: string;
}) => {
  return (
    <div className="hs-dropdown [--auto-close:inside]">
      <button
        id="hs-dropdown-default"
        type="button"
        className={`${shadow} hs-dropdown-toggle py-3 px-4 items-center gap-x-2 text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none text-nowrap flex dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
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
        <ul className="max-w-sm flex flex-col max-h-52 overflow-y-scroll">
          {dropDownList.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white "
            >
              <div className="relative flex items-start w-full">
                <div className="flex items-center h-5">
                  <input
                    id="hs-list-group-item-checkbox-1"
                    name="hs-list-group-item-checkbox-1"
                    type="checkbox"
                    className="border-gray-200 rounded disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="hs-list-group-item-checkbox-1"
                  className="ms-3.5 block w-full text-sm text-gray-600 dark:text-neutral-500"
                >
                  {item}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DrowpDownCheckList;
