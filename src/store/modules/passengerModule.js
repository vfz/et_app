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
        }
    },
    actions: {
        fetchCountPassengers(ctx) {
            console.log('helllo1')
            const countPassengers = ctx.getters.getCountPassengers;
            ctx.commit('countPassengers', countPassengers);
        }
    },
    getters: {
        getCountPassengers(state, getters) {
            return getters.adults + getters.childrens;
        }
    },
}