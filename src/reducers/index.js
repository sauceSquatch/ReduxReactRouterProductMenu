import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts.js';
import WoodReducer from './reducer_wood.js';

const rootReducer = combineReducers({
  posts: PostsReducer,
  woodSections: WoodReducer
});

export default rootReducer;
