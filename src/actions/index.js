import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_WOOD = 'FETCH_WOOD';

//
const WOOD_PRODUCTS_URL = "https://cdn.contentful.com/spaces/hyau6hjlnopm/entries/?access_token=7ee49aad1a1ccf8638f3e49b098e62c4ad5dcf4021a4a15548bfa483a2ed3b94&content_type=products";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=tacostacostacostacostacostacos';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  // const request = axios.get(`${ROOT_URL}`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchWoodData() {
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${WOOD_PRODUCTS_URL}`);
  
  return {
    type: FETCH_WOOD,
    payload: request
  };
}
