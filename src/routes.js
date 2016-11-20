import React from 'react';
import { Route, IndexRoute }from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import WoodIndex from './components/wood_index';

const Greeting = () => {
  return <div>Yo dawg!</div>
}

const Tacos = () => {
  return <div>Yo Tacos!</div>
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="wood" component={WoodIndex} /> 
    <Route path="hello" component={Greeting} /> 
    <Route path="tacos" component={Tacos} /> 
  </Route>
);
