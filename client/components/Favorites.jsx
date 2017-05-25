import React, { Component } from 'react';
import axios from 'axios';
import DeleteFavorite from './DeleteFavorite';

class AllPosts extends Component {
  constructor() {
    super();
    this.state = { favorites: [] };
  }

  componentDidMount() {
    const that = this;
    axios.get('api/favorites')
    .then((response) => {
      that.setState({ favorites: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="main-header">Favorite Posts</h1>
        {
          this.state.favorites.map((post, idx) => {
            // console.log(post.id)
            return (
              <div key={idx} className="indiv-post">
                <div className="num-img">
                  <div className="list-num">{idx}</div>
                  <img src={post.thumbnail} />
                  <div className="title-auth" >
                    <a href={post.url}><h2>{post.title}</h2></a>
                    <h3 className="author">{post.author}</h3>
                  </div>
                </div>
                <DeleteFavorite id={post.id}/>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default AllPosts;
