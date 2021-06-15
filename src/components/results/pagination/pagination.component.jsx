import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import './pagination.style.scss';

const Pagination = ({
  currentPage,
  resultsPerPage,
  totalResults,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li
          onClick={() => paginate(currentPage - 1)}
          className={`pagination-cont ${
            currentPage === 1 && 'pagination-cont-dis'
          }`}>
          <AiOutlineLeft />
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number, pageNumbers.pop())}
            className={`page-item ${number === currentPage && 'active-page'}`}>
            {number}
          </li>
        ))}
        <li
          onClick={() => paginate(currentPage + 1)}
          className={`pagination-cont ${
            currentPage === pageNumbers.pop() && 'pagination-cont-dis'
          }`}
          disabled={currentPage === pageNumbers.pop()}>
          <AiOutlineRight />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
