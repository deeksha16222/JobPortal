import React, {useState} from 'react';

export default function Pagination({ data, RenderComponent, title, pageLimit, dataLimit, currentPage, setCurrentPage }) {
    const [pages] = useState(Math.round(data?.length / dataLimit));

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
  
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    const getPaginationGroup = () => {
       let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
       return new Array(pageLimit)?.fill().map((_, idx) => start + idx + 1);
    };
  console.log(currentPage, "currentpage")
    return (
  <div>

    <div className="pagination">
    <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        <span>&laquo;</span>
      </button>

      
      {getPaginationGroup()?.map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}
      
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        <span>&raquo;</span>
      </button>
    </div>
  </div>
);
  }