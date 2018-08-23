import DevHelper from './src/DevHelper.vue'

DevHelper.install = function(Vue, config) {
    const DevHelperComponent = Vue.extend(DevHelper);

    const div = document.createElement('div')
    div.setAttribute('id', 'devHelper');
    document.documentElement.appendChild(div);
    new DevHelperComponent().$mount('#devHelper');
}

export default DevHelper;
