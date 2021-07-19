import React from "react";
import { connect } from 'react-redux'
import { fetchBlogs } from '../../redux/actions/fetchBlogs' 

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


const mapStateToProps = (state) => {
  return {
      blogs: state.blogs
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//       fetchBlogs: dispatch.fetchBlogs
//   };
// };

export default connect(mapStateToProps, {fetchBlogs})(Blogs);