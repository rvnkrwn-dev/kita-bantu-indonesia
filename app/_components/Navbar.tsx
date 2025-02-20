type Props = {};

export const Navbar = (props: Props) => {
  return (
    <>
      {/* <!-- ========== HEADER ========== --> */}
      <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-[#00AAFF] p-2 border-b border-gray-200">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-x-1">
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
              href="/"
              aria-label="bantu"
            >
              <img src="/images/logo.png" alt="" className="h-12" />
            </a>

            {/* <!-- Collapse Button --> */}
            <button
              type="button"
              className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-50 hover:bg-gray-500/20 focus:outline-none focus:bg-gray-500/20 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-header-base-collapse"
              aria-expanded="false"
              aria-controls="hs-header-base"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-header-base"
            >
              <svg
                className="hs-collapse-open:hidden size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block shrink-0 hidden size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
            {/* <!-- End Collapse Button --> */}
          </div>

          {/* <!-- Collapse --> */}
          <div
            id="hs-header-base"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
            aria-labelledby="hs-header-base-collapse"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
              <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                <div className="grow">
                  <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                    <a
                        className="p-2 flex items-center text-sm font-normal bg-gray-500/20 text-gray-50 hover:bg-gray-500/20 rounded-lg focus:outline-none focus:bg-gray-500/20"
                        href="/"
                        aria-current="page"
                    >
                      <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
                        <path
                            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      </svg>
                      Beranda
                    </a>

                    {/* <!-- Dropdown --> */}
                    <div
                        className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                      <button
                          id="hs-header-base-dropdown"
                          type="button"
                          className="hs-dropdown-toggle w-full p-2 flex items-center text-sm font-normal text-gray-50 hover:bg-gray-500/20 rounded-lg focus:outline-none focus:bg-gray-500/20"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          aria-label="Dropdown"
                      >
                        <svg
                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                          <path d="m3 10 2.5-2.5L3 5"/>
                          <path d="m3 19 2.5-2.5L3 14"/>
                          <path d="M10 6h11"/>
                          <path d="M10 12h11"/>
                          <path d="M10 18h11"/>
                        </svg>
                        Kategori
                        <svg
                            className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </button>

                      <div
                          className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="hs-header-base-dropdown"
                      >
                        <div className="py-1 md:px-1 space-y-0.5">
                          <a
                              className="p-2 md:px-3 flex items-center text-sm text-gray-500 rounded-lg hover:bg-gray-500/20 focus:outline-none focus:bg-gray-500/20"
                              href="#"
                          >
                            About
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Dropdown --> */}

                    <a
                        className="p-2 flex items-center text-sm font-normal text-gray-50 hover:bg-gray-500/20 rounded-lg focus:outline-none focus:bg-gray-500/20"
                        href="/jobs"
                    >
                      <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      Temukan Pekerjaan
                    </a>

                    <a
                        className="p-2 flex items-center text-sm font-normal text-gray-50 hover:bg-gray-500/20 rounded-lg focus:outline-none focus:bg-gray-500/20"
                        href="#"
                    >
                      <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      Tentang Kami
                    </a>

                    <a
                        className="p-2 flex items-center text-sm font-normal text-gray-50 hover:bg-gray-500/20 rounded-lg focus:outline-none focus:bg-gray-500/20"
                        href="#"
                    >
                      <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                        <path d="M12 12h.01"/>
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                        <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
                        <rect width="20" height="14" x="2" y="6" rx="2"/>
                      </svg>
                      Artikel
                    </a>
                  </div>
                </div>

                <div className="my-2 md:my-0 md:mx-2">
                  <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300"></div>
                </div>

                {/* <!-- Button Group --> */}
                <div className="">
                  <a
                      className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-500/20"
                      href="#"
                  >
                    Masuk
                  </a>
                </div>
                {/* <!-- End Button Group --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Collapse --> */}
        </nav>
      </header>
    </>
  );
};
