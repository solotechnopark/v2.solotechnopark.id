import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import React, { useState } from "react";

function Pagination({ totalPage, currentPage }) {
  const [page, setPage] = useState(1);
  const [state, dispatch] = useAppContext();

  const Page = () => {
    const result = [];

    for (let i = 0; i < totalPage; i++) {
      result.push(
        <li key={i}>
          <Link
            href="#"
            className={`px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === i + 1 ? "bg-gray-100" : "bg-white"
            }`}
          >
            {i + 1}
          </Link>
        </li>
      );
    }

    return result;
  };

  const prev = (e) => {
    e.preventDefault();

    page > 1 && setPage(page - 1);
    page > 1 &&
      // setPagination({
      //   ...pagination,
      //   currentPage: page - 1,
      // });

      window.scrollTo(0, 0);
  };

  const next = (e) => {
    e.preventDefault();

    page < totalPage && setPage(page + 1);
    page < totalPage &&
      // setPagination({
      //   ...pagination,
      //   currentPage: page + 1,
      // });
      window.scrollTo(0, 0);
  };

  return (
    <nav aria-label="Page navigation event">
      <ul className="inline-flex -space-x-px pt-10">
        <li>
          <Link
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={prev}
          >
            Previous
          </Link>
        </li>
        {Page()}
        <li>
          <Link
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={next}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
