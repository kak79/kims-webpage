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


// const mapStateToProps = (state) => {
//   return {
//       blogs: state.blogs
//   };
// };

const mapDispatchToProps = (dispatch) => {
  // connect will call this function for us, and provide the dispatch function for us to call

  // we return an object with a key that will be the prop name

  // the value should be a function, whose job is to call the action creator, and then call dispatch and pass the return value of the action creator in

  //in this case, that return value is a function instead of an actual action (object with a 'type' key)

  // but when functions are dispatched, Thunk middleware will take care of calling those, and passing the dispatch function in, to be used after the async stuff
  
   return {
       fetchBlogs: () => dispatch(fetchBlogs())
   };
};

export default connect((state) => {
  return {blogs: state.blogs}
}, mapDispatchToProps)(BlogContainer);



