import React, { Component } from 'react';
import Blogs from "./blog";
import NewBlog from './newBlog';
import {
  Route, Switch
} from 'react-router-dom';

class BlogContainer extends Component {

  state = {
    fetchBlogs: []
  }

  componentDidMount() {
    
      fetch('http://127.0.0.1:3001/blogs')
      .then(r => r.json())
      .then((blogsArray) => {
        this.setState({blogs: blogsArray})
      })
  }

  updateState = (arg) => {
    this.setState((prevState, prevProps) => {
      return {blogs: [...prevState.blogs, arg]}
    })
  }
  

  render () {
    return (
      <>
        <Switch>
          <Route exact path="/blogs/new" render={(routerProps) => <NewBlog sendData={this.updateState} {...routerProps} />} />
          <Route exact path="/blogs">
              <Blogs blogs={this.state.blogs} />
          </Route> 
        </Switch>
      </>
    );
  }

}

export { BlogContainer };