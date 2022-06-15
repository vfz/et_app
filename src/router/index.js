import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Flightselection from '@/views/Flight-selection.vue'
import TicketBooking from "@/views/Ticket-booking";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/flight-selection',
        name: 'Flight-selection',
        component: Flightselection
    },
    {
        path: '/ticket-booking',
        name: 'Ticket-booking',
        component: TicketBooking
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router