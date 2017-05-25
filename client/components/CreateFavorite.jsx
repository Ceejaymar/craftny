import React, { Component } from 'react';
import { ajax } from 'jquery';

class CreateFavorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: this.props.post.author,
      title: this.props.post.title,
      thumbnail: this.props.post.thumbnail,
      url: this.props.post.url
    }
  }

  handleClick(){
    ajax({
      url: 'api/favorites',
      type: 'POST',
      data: this.state
    })
  }

  render() {
    return (
      <button className="create-fav" onClick={this.handleClick.bind(this)}>favorite</button>
    )
  }
}

export default CreateFavorite;
