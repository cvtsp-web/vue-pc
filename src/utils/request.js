import axios from 'axios'
import CONFIG from '@/utils/config'

/**
 * customize yourself according to business requirements
 * @param {Object} axios:required parameters
 * axios: { method, url, data, params, response}
 * @link: axios
 */
var instance = axios.create({
    baseURL: CONFIG.SERVER,
    timeout: 30000,
    withCredentials: true,
    method: 'post',
    headers: {
        token: '',
        post: {'Content-Type': 'application/json'}
    }
 });
export function Request(options) {
    return axiosRequestMiddle(instance).apply(axios, arguments);
}

/**
 * node static resource server
 */
const instanceMiddle = axios.create({
    baseURL: CONFIG.MIDDLE_SERVER,
    withCredentials: true,
    method: 'post'
});
export function RequestNode(options) {
    return axiosRequestMiddle(instanceMiddle).apply(axios, arguments);
}


/**
 * @param {Function} fn: axios构造实例
 * @returns {Promise} 
 */
function axiosRequestMiddle(fn) {
    return function(options) {
        return fn(options)
        .then(mess => {
            return mess.data;
        })
        .catch(error => {
            console.log({
                title: 'http错误',
                url: 'options.url',
                message: error
            })
        })
    }
}