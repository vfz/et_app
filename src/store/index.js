import Vue from 'vue'
import Vuex from 'vuex'
import searchForm from './modules/searchForm'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        API_URL: 'https://evrotrans.net/APIet/',
    },
    mutations: {},
    actions: {},
    modules: {
        searchForm
    }
})