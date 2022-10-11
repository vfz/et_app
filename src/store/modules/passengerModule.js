export const passengerModule = {
    state: () => ({
        passengers: [],
        countPassengers: 1,
        tripId: 0,
        flightId: 0,
        placeNumber: [],
        isLogin: false,
        buyerInfo: {
            firstName: '',
            secondName: '',
            email: '',
            number: '',
        },
        promocode: '',
    }),
    mutations: {
        countPassengers(state, countPassengers) {
            state.countPassengers = countPassengers
            state.passengers = [...Array(countPassengers).keys()]
        },
        arraysPassengers(state, arraysPassengers) {
            state.passengers = arraysPassengers
        }
    },
    actions: {
        fetchCountPassengers(ctx) {
            const countPassengers = ctx.getters.getCountPassengers;
            ctx.commit('countPassengers', countPassengers);
        },
        getPassengersArrays(ctx) {
            const arraysPassengers = ctx.getters.getPassengersArrays;
            ctx.commit('arraysPassengers', arraysPassengers)
        }
    },
    getters: {
        getCountPassengers(state, getters) {
            return getters.adults + getters.childrens;
        },
        getPassengersArrays(state, getters) {
            return [...Array(getters.adults+getters.childrens).keys()]
        }
    },
}