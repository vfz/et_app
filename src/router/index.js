import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Flightselection from '@/views/Flight-selection.vue'
import TicketBooking from "@/views/Ticket-booking";
import PaymentSuccess from "@/views/Payment-success";
import PaymentError from "@/views/Payment-error";
import NotFound from "@/views/NotFound";
import Tickets from "@/views/Tickets";
import Contacts from "@/views/Contacts";
import Profile from "@/views/Profile";
import TicketRefund from "@/views/Ticket-refund";
import LostAndFound from "@/views/Lost-and-found";
import Jobs from "@/views/Jobs";
import FAQ from "@/views/FAQ";
import Europoints from "@/views/Europoints";
import Agents from "@/views/Agents";
import About from "@/views/About";
import JobDescription from "@/views/JobDescription";

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
        path: '/flight-selection/search/:from/:to',
        name: 'Flight-selection-search',
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
        path: '/tickets',
        name: 'Tickets',
        component: Tickets
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/ticket-refund',
        name: 'Ticket-refund',
        component: TicketRefund
    },
    {
        path: '/lost-and-found',
        name: 'Lost-and-found',
        component: LostAndFound
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs,
        props: true
    },
    {
        path: '/jobs/:id',
        name: 'JobDescription',
        component: JobDescription,
        props: true
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ,
    },
    {
        path: '/europoints',
        name: 'Europoints',
        component: Europoints
    },
    {
        path: '/agents',
        name: 'Agents',
        component: Agents
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/404',
        // name: '404',
        component: NotFound
    },
    {
        path: '/flight-selection',
        redirect: '/flight-selection/1/190'
    },
    {
        path: '*',
        redirect: '/404'
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router