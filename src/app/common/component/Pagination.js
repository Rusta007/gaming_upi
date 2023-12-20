import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ReactPaginate from "react-paginate";

function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
  startIndex,
  endIndex,
  totalEntries
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 px-4 py-2 pb-6">
      <div className="text-sm text-gray-400">
        Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of {totalEntries} entries
      </div>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        previousLabel={<FaChevronLeft size={20} className="text-[#9BABC5]" />}
        nextLabel={<FaChevronRight size={20} className="text-[#9BABC5]" />}
        breakLabel={"..."}
        containerClassName={"flex gap-3 items-center"}
        activeClassName={"!bg-[#438677] !text-[#f7fafa]"}
        pageClassName={
          "w-[29px] h-[27px] text-[#b3bfd3] cursor-pointer flex justify-center items-center rounded-md text-[14px] border border-[#b3bfd3]"
        }
        onPageChange={(selectedPage) => handlePageChange(selectedPage.selected + 1)}
        initialPage={currentPage - 1}
      />
    </div>
  );
}

export default Pagination;
