import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Flightselection from '@/views/Flight-selection.vue'
import TicketBooking from "@/views/Ticket-booking";
import PaymentSuccess from "@/views/Payment-success";

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
    },
    {
        path: '/payment-success',
        name: 'Payment-success',
        component: PaymentSuccess
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router