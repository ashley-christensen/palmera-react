
import React from "react";

function BlogPost({ author, title, excerpt, image }) {
 return (
  <li className="blogsWrapper">
   <div className="blog">
    <div className="imageWrapper">
     <img
      className="image"
      src={image}
      alt="beach"
     />
     <p variant="body">{author}</p>
    </div>

    <h5>{title}</h5>
    <p className="excerpt">{excerpt}</p>
   </div>
  </li>
 );
}


export default BlogPost;
