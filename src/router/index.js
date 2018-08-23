import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = resolve => require(['@/pages/login/index.js'], resolve)
const home = resolve => require(['@/pages/home/index.js'], resolve)

export default function createRouter() {
    return new Router({
        routes: [
            {path: '/', redirect: '/login', component: login},
            {name: 'login', path: '/login', component: login},
            {name: 'home', path: '/home', component: home}
        ]
    })
}
