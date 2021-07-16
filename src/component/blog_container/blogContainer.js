import React, { Component } from 'react';
import Blogs from "./blog";
import {
  Route, Switch
} from 'react-router-dom';

class BlogContainer extends Component {

  state = {
    fetchBlogs: []
  }

  
  

  render () {
    return (
      <>
        <Switch>
          <Route exact path="/blogs">
            {data.map( blog => 
              <Blogs 
                key={blog.id}
                title={blog.title}
                summary={blog.summary}
              />
            )}
          </Route> 
          {/* <Route exact path="/blogs/new">
              <NewBlog />
          </Route>           */}
        </Switch>
      </>
    );
  }

}

export { BlogContainer };