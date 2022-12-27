import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueYandexMetrika from 'vue-yandex-metrika'
import store from './store'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

Vue.component('fa', FontAwesomeIcon);


Vue.use(VueYandexMetrika, {
    id: 50682013,
    router: router,
    env: process.env.NODE_ENV
});

// Vue.config.productionTip = false

new Vue({
    router,
    store,
    VueYandexMetrika,
    render: h => h(App)
}).$mount('#app');