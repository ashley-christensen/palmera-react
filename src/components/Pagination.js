import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { usePagination, DOTS } from '../hooks/usePagination';
import { nanoid } from 'nanoid';


const Pagination = ({
 onPageChange,
 totalCount,
 siblingCount = 1,
 currentPage,
 pageSize,
 onPageSizeOptionChange,
 pageSizeOptions,
}) => {
 const paginationRange = usePagination({
  currentPage,
  totalCount,
  siblingCount,
  pageSize,
 });

 if (currentPage === 0 || paginationRange.length < 2) {
  return null;
 }

 const onNext = () => {
  onPageChange(currentPage + 1);
 };

 const onPrevious = () => {
  onPageChange(currentPage - 1);
 };

 let lastPage = paginationRange[paginationRange.length - 1];

 return (
  <ul
   className="wrapper"

   aria-label="Blog post pagination list"
  >
   <li className="paginationItem">
    <button
     type="button"
     className="arrowButton left"
     aria-label="Goto previous page"
     onClick={onPrevious}
     disabled={currentPage === 1 ? true : false}

    >
     <ChevronLeftIcon />
    </button>
   </li>

   {paginationRange.map((pageNumber) => {
    const key = nanoid();

    if (pageNumber === DOTS) {
     return (
      <li key={key} className="dots">
       &#8230;
      </li>
     );
    }

    return (
     <li
      key={key}
      className="paginationItem"
      aria-current="false"
     >
      <button
       type="button"

       aria-label={`Goto page ${pageNumber}`}
       onClick={() => onPageChange(pageNumber)}
       style={{
        backgroundColor: currentPage === pageNumber ? "#ccc" : "",
       }}
      >
       {pageNumber}
      </button>
     </li>
    );
   })}

   <li className="paginationItem">
    <button
     type="button"
     className="arrowButton right"
     aria-label="Goto next page"
     onClick={onNext}
     disabled={currentPage === lastPage ? true : false}
    >
     <ChevronRightIcon />
    </button>
   </li>

   <select
    className="paginationSelector"

    aria-label="Select page size"
    value={pageSize}
    onChange={(e) => {
     onPageSizeOptionChange(e.target.value);
    }}
   >
    {pageSizeOptions.map((size) => (
     <option key={size} defaultValue={pageSize === size} value={size}>
      {size} per page
     </option>
    ))}
   </select>
  </ul>
 );
};

export default Pagination;