export const flightsSelectedSeats = {
    state: () => ({
        flightThere: {},
        flightBack: {},
        currentFlight: {},
        selectedCountPlaces: 0,
        freePlaces: [],
    }),
    mutations: {
        setFreePlaces(state, freePlaces) {
            state.freePlaces = freePlaces;
        },
        setCurrentFlight(state, tripId) {
            const flights = [].concat(state.flightThere, state.flightBack)
            const currentFlight = flights.find(trip => trip.id_trip === tripId);
            state.currentFlight = currentFlight;
        },
        setFlightThere(state, flightThere) {
            state.flightThere = flightThere.result;
        },
        setFlightBack (state, flightBack) {
          state.flightBack = flightBack.result;
        },
        setSelectedCountPlaces (state, selectedCountPlaces) {
            state.selectedCountPlaces = selectedCountPlaces;
        },
    },
    namespaced: true,
}