export const passengerModule = {
    state: () => ({
        passengers: [],
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
        error: '',
        promocode: '',
    }),
    mutations: {
        arraysPassengers(state, arraysPassengers) {
            state.passengers = arraysPassengers
        },
        updateSecondName(state, {value, id}) {
            state.passengers[id] = {id: Number(id),secondName: value}
            // state.passengers[id]['secondName'] = value;
        },
        // updateIsValid(state, isValid) {
        //     state.isValid = isValid;
        // }
    },
    actions: {
        async getPassengersArrays(ctx) {
            const arraysPassengers = ctx.getters.getPassengersArrays;
            await ctx.commit('arraysPassengers', arraysPassengers)
        },
        getPassengerId(ctx) {

        },
        updateSecondName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateSecondName', {value, id});
        },
        // validateNameField(ctx, event) {
        //     const value = event.target.value;
        //     if (value === '') {
        //         ctx.commit('updateIsValid', false);
        //     }
        // }
    },
    getters: {
        getPassengers(state, getters) {
            return state.passengers;
        },
        getPassengersArrays(state, getters) {
            return [...Array(getters.adults+getters.childrens).keys()]
        },
        // getIsValid(state) {
        //     return state.isValid;
        // }
    },
}