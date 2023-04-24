import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      // config.headers['token'] = getToken();
    }
    return config;
  },
  (error) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(error)
  ,
);

request.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default request;
