import React, { Component } from 'react'
import { fetchLastBlog } from '../redux/actions/fetchLastBlog';
import { connect } from 'react-redux'

class Latest extends Component {


  componentDidMount() {
    this.props.fetchLastBlog()
  }


  render() {
    
    return (
      <div>
        <h2>{this.props.blogs.title}</h2>
        <h4>{this.props.blogs.summary}</h4>
      </div>
    )
  }
}
export default connect((state) => {
  return {blogs: state.blogs}
}, {fetchLastBlog})(Latest);