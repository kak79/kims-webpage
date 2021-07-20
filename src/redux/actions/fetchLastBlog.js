const fetchLastBlog = () => {
  return (dispatch) => {
  fetch('http://127.0.0.1:3001/blogs')
  .then(r => r.json())
  .then(blogs => {
    dispatch({type: "LAST_BLOG", payload: blogs[blogs.length-1]})
    
  })
}
}

export {fetchLastBlog}