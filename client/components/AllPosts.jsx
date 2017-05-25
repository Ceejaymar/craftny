import React, { Component } from 'react';
import axios from 'axios';
import CreateFavorite from './CreateFavorite';

class AllPosts extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    const that = this;
    axios.get('https://www.reddit.com/r/pics/top/.json')
    .then((response) => {
      // console.log(response.data.data.children)
      that.setState({ posts: response.data.data.children });
    });
  }

  render() {
    return (
      <div>
        <h1 className="main-header">All Posts</h1>
        {
          this.state.posts.map((post, idx) => {
            return (
              <div key={idx} className="indiv-post">
                <div className="num-img">
                  <div className="list-num">{idx}</div>
                  <img src={post.data.thumbnail} />
                  <div className="title-auth" >
                    <a href={post.data.url}><h2>{post.data.title}</h2></a>
                    <h3 className="author">{post.data.author}</h3>
                  </div>
                </div>
                <CreateFavorite  post={post.data} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default AllPosts;
