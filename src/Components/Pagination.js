import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li className="pagination" key={number}>
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
