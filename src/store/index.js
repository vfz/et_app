import Vue from 'vue'
import Vuex from 'vuex'
import searchForm from './modules/searchForm'
import mapModal from './modules/mapModal';
import {flightsSelectedSeats} from "@/store/modules/flightsSelectedSeats";
import YmapPlugin from 'vue-yandex-maps'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        API_URL: 'https://evrotrans.net/APIet/',
    },
    mutations: {},
    actions: {},
    modules: {
        searchForm,
        mapModal,
        flightsSelectedSeats
    }
})