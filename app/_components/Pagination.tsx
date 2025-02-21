import React from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }: any) => {
  return (
    <nav
      className="flex items-center justify-center gap-x-4 pt-12 md:-translate-x-5"
      aria-label="Pagination"
    >
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Previous"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev: any) => Math.max(prev - 1, 1))}
      >
        <svg
          className="shrink-0 size-3.5"
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
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span>Previous</span>
      </button>
      <div className="flex items-center gap-x-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Next"
        onClick={() =>
          setCurrentPage((prev: any) => Math.min(prev + 1, totalPages))
        }
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <svg
          className="shrink-0 size-3.5"
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
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
