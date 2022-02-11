// axios
import axios from 'axios'

//import $store from '../store/store'
//import $router from '../router'

const axiosInstance = axios.create({
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
  }
});


axios.defaults.baseURL = "http://localhost:3000"//process.env.VUE_APP_API_URL;

axiosInstance.interceptors.request.use(function (config) {
    //TODO enable this before start using  this service
    //config.headers['Authorization'] = 'Bearer ' + $store.getters['GET_JWT']
    config.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    config.headers['Access-Control-Expose-Headers'] = 'X-Access-Token, X-Refresh-Token, X-Access-Token-Expire, X-Pagination-Current-Page, X-Pagination-Page-Count, X-Pagination-Per-Page, X-Pagination-Total-Count, X-Payload'
    return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => response, error => {
  const status = error.response ? error.response.status : null
  if (status === 401) {
    alert("Session expired! please login again");
    // $store.dispatch("addJWT", '');
    // $store.dispatch("addUserData", {});
    // $store.dispatch("addLoginStatus", false);
    // $router.push({ name: 'signin'})

  }
  return Promise.reject(error);

});

export default axios