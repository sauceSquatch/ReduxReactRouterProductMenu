import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

  componentWillMount() {
    console.log("this is a good time to load data");
    this.props.fetchPosts();
  }


  render() {
    return (
      <div>
        <h3>LIST OF WOOD SECTIONS</h3>
        <ul className="list-group"></ul>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return { posts: state.posts.all }
}

export default connect( mapStateToProps, { fetchPosts } )(PostsIndex);
