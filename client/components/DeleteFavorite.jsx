import React, { Component } from 'react';
import axios from 'axios';

class DeleteFavorite extends Component {
  constructor(props) {
    super(props)
    // console.log(.id)
    this.state = {
      id: this.props.id,
    }
  }

  delete(props){
    axios.delete(`/api/favorites/${this.state.id}`)
    .then()
  }

  render() {
    return (
      <button className="remove-fav" onClick={this.delete.bind(this)}>remove</button>
    )
  }
}

export default DeleteFavorite;
