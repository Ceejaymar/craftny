import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Navbar from './components/Navbar';
import AllPosts from './components/AllPosts';
import Favorites from './components/Favorites';

import './main.css';

const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AllPosts} />
      <Route path="favorites" component={Favorites} />
    </Route>
  </Router>,
  document.getElementById('root')
)
