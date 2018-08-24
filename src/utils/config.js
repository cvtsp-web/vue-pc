import { isExistLocalStorage } from '@/utils/utils'

/**
 * @author: wukangjun
 * @created: 2018.8.23 
 * server: localStorage.getItem('server')
 * middle: localStorage.getItem('middle_server)
 */
const _DEFAULT_SERVER = 'http://test.cvtsp.com/api';
const _DEFAULT_MIDDLE_SERVER = 'http://192.168.199.247:4000';
// 后端服务地址
const SERVER = isExistLocalStorage('server') ? localStorage.getItem('server') : _DEFAULT_SERVER;
// 中间服务地址
const MIDDLE_SERVER = isExistLocalStorage('middle_server') 
? localStorage.getItem('middle_server') 
: _DEFAULT_MIDDLE_SERVER;

export default {
    SERVER,
    MIDDLE_SERVER, 
    STATIC_SERVER: ''
}