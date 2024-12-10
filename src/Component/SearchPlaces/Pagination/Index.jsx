import React from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => (
    <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
            <button
                key={i + 1}
                className={currentPage === i + 1 ? 'active' : ''}
                onClick={() => setCurrentPage(i + 1)}
            >
                {i + 1}
            </button>
        ))}
    </div>
);

export default Pagination;
