import React from "react";
const Pagination = (props) => {
  const pageLinks = [];
  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? "active" : "";
    pageLinks.push(
      <li
        className={`page-item ${active}`}
        key={i}
        onClick={() => props.nextPage(i)}
      >
        <a className="page-link ${active}">
          {i}
          <span className="sr-only">(current)</span>
        </a>
      </li>
    );
  }
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination justify-content-center">{pageLinks} </ul>
      </nav>
    </div>
  );
};

export default Pagination;
