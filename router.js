import Vue from 'vue'
import Router from 'vue-router'
import testcomp from 'components/testcomp.vue'
import numeric from 'components/numeric.vue'


Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/numeric',
                component: numeric
            },
            {
                path: '/test',
                component: testcomp
            }
        ]
    })
}