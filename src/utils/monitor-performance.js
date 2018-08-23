export default {
    install(Vue, config) {
        console.log(getPerformaceTiming())
        Vue.config.performance = true;
    }
}

export const getPerformaceTiming = function() {
    const performance = window.performance;
    const t = performance.timing;
    const timers = {};

    timers.loadPage = secondDistance(t.loadEventEnd - t.navigationStart);
    timers.domReady = secondDistance(t.domComplete - t.responseEnd);
    return timers;
}

/**
 * 时间差（单位:s）
 * @param: String: 时间戳
 */
function secondDistance() {
    var firstArg = arguments.length > 0 && arguments[0];
    var now = new Date() * 1;

    if(firstArg) {
        return now - new Date(Math.abs(firstArg)) * 1;
    }
    throw new Error('first arguments must be!');
}