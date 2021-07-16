const fetchBlogs = () => {
  return (dispatch) => {
  fetch('http://127.0.0.1:3001/blogs')
  .then(r => r.json())
  .then(blogs => {
    dispatch({type: "SET_BLOGS", payload: blogs})
  })
}
}

export {fetchBlogs}