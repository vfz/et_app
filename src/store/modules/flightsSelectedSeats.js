export const flightsSelectedSeats = {
    state: () => ({
        freePlaces: [],
    }),
    mutations: {
        setFreePlaces(state, freePlaces) {
            state.freePlaces = freePlaces;
        }
    },
    namespaced: true,
}