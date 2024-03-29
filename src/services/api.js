import axios from "axios";


// const base_url = 'http://kopakwetu.co.tz:8000/api/'
/*const base_url = 'http://127.0.0.1:8000/api/'*/
/*const base_url = 'http://192.168.43.127:8000/api/'*/
const base_url = 'http://192.168.100.55:8001/api/'


export default class API {
    static ax = axios
}

axios.defaults.baseURL = base_url
axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem("access")
axios.defaults.timeout.valueOf(86400000)
axios.interceptors.request.use(config => {
    const source = axios.CancelToken.source();
    config.cancelToken = source.token;
    setTimeout(() => source.cancel('Timed out after 30s'), 86400000);
    return config;
});