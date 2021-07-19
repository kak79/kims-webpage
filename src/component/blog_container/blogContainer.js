import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchBlogs } from '../../redux/actions/fetchBlogs' 
import Blogs from "./blogs";
import NewBlog from './newBlog';
import {
  Route, Switch
} from 'react-router-dom';

class BlogContainer extends Component {

  componentDidMount() {
    console.log('A')
    this.props.fetchBlogs()
    console.log('C')
  }

  render () {
    return (
      <>
        <Switch>
          <Route exact path="/blogs/new" render={(routerProps) => <NewBlog sendData={this.componentDidMount} {...routerProps} />} />
          <Route exact path="/blogs">
              <Blogs blogs={this.props.blogs} />
          </Route> 
        </Switch>
      </>
    );
  }

}

export default connect((state) => {
  return {blogs: state.blogs}
}, {fetchBlogs})(BlogContainer);
