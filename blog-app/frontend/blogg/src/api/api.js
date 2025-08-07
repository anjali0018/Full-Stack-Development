import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,  
});

export const register = (userData) => API.post('/register', userData);
export const login = (userData) => API.post('/login', userData);
export const fetchPosts = () => API.get('/posts');
export const fetchPostById = (id) => API.get(`/posts/${id}`);
export const createPost = (postData) => API.post('/posts', postData);
