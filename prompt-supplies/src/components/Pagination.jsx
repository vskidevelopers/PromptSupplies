/* eslint-disable react/prop-types */

import ReactPaginate from "react-paginate";
import "./styles/pagination.css";

const Pagination = ({ items, itemsPerPage, pageCount, setItemOffset }) => {
  console.log("items in pagination >> ", items?.length);
  const handlePageClick = (event) => {
    console.log("event >> ", event);
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    console.log("newOffset >> ", newOffset);
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="»"
      onPageChange={(e) => handlePageClick(e)}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="«"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={2}
      className="pagination flex justify-center md:justify-end"
      pageClassName="page-item"
      nextClassName="page-item"
      previousClassName="page-item"
      pageLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      activeLinkClassName="active"
    />
  );
};

export default Pagination;
