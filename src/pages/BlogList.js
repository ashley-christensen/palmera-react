import BlogPost from "../components/BlogPost";
import Pagination from '../components/Pagination';
import React, { useState, useMemo } from "react";
import blogs from '../blogData.json';


const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
 const [currentPage, setCurrentPage] = useState(1);
 const [pageSize, setPageSize] = useState(15);

 const currentPaginationData = useMemo(() => {
  const startPage = (currentPage - 1) * pageSize;
  const finalPage = startPage + pageSize;
  return blogs.posts.slice(startPage, finalPage);
 }, [currentPage, pageSize]);

 const updateRowsPerPage = (rows) => {
  setPageSize(rows);
  updatePage(1);
 };
 const updatePage = (page) => {
  setCurrentPage(page);
 };

 return (
  <div className="mt-5">
   <div>
    <h2 className='header-sections text-center display-6 mb-4'>Blog</h2>
   </div>
   <Pagination
    currentPage={currentPage}
    totalCount={blogs.posts.length}
    pageSize={pageSize}
    pageSizeOptions={PAGE_SIZES}
    onPageChange={updatePage}
    onPageSizeOptionChange={updateRowsPerPage}
   />
   <ul

    aria-label="blog list"
   >
    {currentPaginationData.map((blog) => (
     <BlogPost
      key={blog.id}
      author={blog.author}
      title={blog.title}
      excerpt={blog.excerpt}
      image={blog.image}
     />
    ))}
   </ul>
  </div>
 );
}

export default BlogList;