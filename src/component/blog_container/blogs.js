import React from "react";

const Blogs = (props) => {
  return(
    <>
      {props.blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>{blog.summary}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Blogs;