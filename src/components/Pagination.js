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
        <li
          key={i}
          className="cursor-pointer"
          onClick={() => {
            setPage(i);
            dispatch({ type: "SET_CURRENT_PAGE", payload: i + 1 });
            window.scrollTo(0, 0);
          }}
        >
          <span
            href="#"
            className={`px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              state.isCurrentPage === i + 1 ? "bg-gray-100" : "bg-white"
            }`}
          >
            {i + 1}
          </span>
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

      dispatch({ type: "SET_CURRENT_PAGE", payload: page - 1 });

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
      dispatch({ type: "SET_CURRENT_PAGE", payload: page + 1 });

    window.scrollTo(0, 0);
  };

  return (
    <nav aria-label="Page navigation event">
      <ul className="inline-flex -space-x-px pt-10">
        <li>
          <Link
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={prev}
          >
            Previous
          </Link>
        </li>
        {Page()}
        <li>
          <Link
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
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
