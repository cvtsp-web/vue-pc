
/**
 * 监听异常，报错
 */
export default {
    install(Vue, config) {
        Vue.config.errorHandler = function(err, vm, info) {
            console.log(err)
        }
    }
}