export const flightsSelectedSeats = {
    state: () => ({
        flightThere: {},
        flightBack: {},
        currentFlight: {},
        peopleCount: 0,
        selectedCountPlace: 1,
        freePlaces: [],
    }),
    mutations: {
        setFreePlaces(state, freePlaces) {
            state.freePlaces = freePlaces;
        },
        setCurrentFlight(state, tripId) {
            const flights = [].concat(state.flightThere, state.flightBack)
            state.currentFlight = flights.find(trip => trip.id_trip === tripId);
        },
        setFlightThere(state, flightThere) {
            state.flightThere = flightThere.result;
        },
        setFlightBack (state, flightBack) {
          state.flightBack = flightBack.result;
        },
        setPeopleCount (state, peopleCount) {
            state.peopleCount = peopleCount;
        },
        setSelectedPlace(state, numberPlace) {

        }
    },
    namespaced: true,
}