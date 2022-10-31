import pl from "@fancyapps/ui/src/Fancybox/l10n/pl";

export const flightsSelectedSeats = {
    state: () => ({
        flightThere: [],
        flightBack: [],
        currentFlight: {},
        peopleCount: 0,
        selectedPlaces: [],
        freePlaces: [],
    }),
    mutations: {
        setFreePlaces(state, freePlaces) {
            state.freePlaces = freePlaces;
        },
        setFlightThere(state, flightThere) {
            state.flightThere = flightThere.result;
        },
        setFlightBack (state, flightBack) {
          state.flightBack = flightBack.result;
        },
        setCurrentFlight(state, currentFlight) {
            state.currentFlight = currentFlight
        },
        setSelectedPlace(state, place) {
            state.selectedPlaces.push(place)
        }
    },
    actions: {
        getSelectedFlight(ctx, flight) {
            ctx.commit('setCurrentFlight', flight)
        },
        getSelectedPlace(ctx, place) {
            ctx.commit('setSelectedPlace', place)
        },
    },
    getters: {
        getCurrentFlight(state) {
            return state.currentFlight
        }
    }
}