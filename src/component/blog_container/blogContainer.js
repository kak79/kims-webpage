import React from 'react';
import { APIStates, UseAPI } from '../apiStates';
import Blogs from "./blog";

import {
  Route, Switch
} from 'react-router-dom';

const BlogContainer = () => {

  const { state, error, data } = UseAPI('http://127.0.0.1:3001/blogs');

  switch (state) {
    case APIStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case APIStates.SUCCESS:
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
    default:
      return <p>loading..</p>;
  }
}

export { BlogContainer };