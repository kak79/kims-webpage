import React from "react";

const Blogs = (props) => {
  return(
    <>
      {props.blogs.map((blog) => {
        return (
          <>
            <h2>{blog.title}</h2>
            <h4>{blog.summary}</h4>
          </>
        )
      })}
    </>
  )
}

export default Blogs;