/* eslint-disable react/prop-types */

const Pagination = ({onPageChange, currentPage, blogs, pageSize }) => {

    const totalPages = Math.ceil(blogs.length / pageSize);
    
    const renderPagenationLinks = () => {
        return Array.from({length: totalPages}, (_, i) => i+1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" onClick={() => onPageChange(pageNumber)} >{pageNumber}</a>
            </li>
        ))
    }

    return (
        <div className='flex justify-center items-center mt-5'>
            <ul className='flex justify-center items-center gap-4'>
                {/* prev page btn */}
                <li>
                    <button className='bg-slate-500 cursor-pointer px-3 py-1 rounded text-white hover:bg-orange-500' onClick={() => onPageChange(currentPage -1)} disabled={currentPage === 1}>Prev</button>
                </li>

                {/* Page Number Here */}
                <div className='pagination '>{renderPagenationLinks()}</div>

                {/* Next page btn */}
                <li>
                    <button className='bg-slate-500 cursor-pointer px-3 py-1 rounded text-white hover:bg-orange-500' onClick={() => onPageChange(currentPage +1)} disabled={currentPage === totalPages}>Next</button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
