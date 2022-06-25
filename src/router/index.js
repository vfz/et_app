import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Flightselection from '@/views/Flight-selection.vue'
import TicketBooking from "@/views/Ticket-booking";
import PaymentSuccess from "@/views/Payment-success";
import PaymentError from "@/views/Payment-error";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/flight-selection/:from/:to',
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
    },
    {
        path: '/payment-error',
        name: 'Payment-error',
        component: PaymentError
    },
    {
        path: '/404',
        name: '404',
        component: NotFound
    },
    {
        path: '/flight-selection',
        redirect: '/flight-selection/1/190'
    },
    // {
    //     path: '*',
    //     redirect: '/404'
    // }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router