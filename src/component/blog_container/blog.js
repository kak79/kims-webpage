import React from "react";

const Blog = (props) => {


  return(
    <div>
      <h2>{props.title}</h2>
      <h4>{props.summary}</h4>
    </div>
  )
}

export default Blog;