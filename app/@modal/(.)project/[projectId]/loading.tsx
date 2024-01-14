export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-bgBlack-800 bg-opacity-70 p-[1.5rem] transition-colors md:p-14">
      <div className="shadow relative mx-auto max-w-[600px] overflow-auto rounded-xl bg-bgBlack-400 p-6 md:w-[80%]">
        <div className="shadow-2xl w-[80%]rounded p-4">
          <div className="bg-gray-500 mb-3 h-3 w-[20%] animate-pulse rounded-full"></div>
          <div className="bg-gray-500 mb-3 h-3 w-[40%] animate-pulse rounded-full"></div>

          <div className="bg-gray-500 relative mb-4 flex h-60 animate-pulse items-center justify-center">
            <svg
              className="text-gray-200 dark:text-gray-600 h-10 w-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="bg-gray-500 mb-1 h-3 w-full animate-pulse rounded-md"></div>
          <div className="bg-gray-500 mb-1 h-3 w-full animate-pulse rounded-md"></div>
          <div className="bg-gray-500 mb-1 h-3 w-full animate-pulse rounded-md"></div>
          <div className="bg-gray-500 mb-1 h-3 w-full animate-pulse rounded-md"></div>

          <div className="mt-3 flex flex-wrap gap-2">
            <div className="bg-gray-500 h-3 w-16 animate-pulse rounded-full"></div>
            <div className="bg-gray-500 h-3 w-16 animate-pulse rounded-full"></div>
            <div className="bg-gray-500 h-3 w-16 animate-pulse rounded-full"></div>
            <div className="bg-gray-500 h-3 w-16 animate-pulse rounded-full"></div>
            <div className="bg-gray-500 h-3 w-16 animate-pulse rounded-full"></div>
            <div className="bg-gray-500 h-3 w-16 animate-pulse rounded-full"></div>
            <div className="bg-gray-500 h-3 w-16 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
