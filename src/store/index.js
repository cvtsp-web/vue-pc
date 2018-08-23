import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import home from './home'
Vue.use(Vuex)

export default function createStore() {
    return new Vuex.Store({
        modules: {
            login,
            home
        }
    });
}