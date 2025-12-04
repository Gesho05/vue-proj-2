import axios from 'axios';

// Only export the methods you actually use
export const get = (url, config) => axios.get(url, config);
export const post = (url, data, config) => axios.post(url, data, config);
export const put = (url, data, config) => axios.put(url, data, config);
export const delete_ = (url, config) => axios.delete(url, config);
