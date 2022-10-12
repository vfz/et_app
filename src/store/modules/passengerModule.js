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
        formFields: {
            secondName: '',
            firstName: '',
            middleName: '',
            birthday: '',
            gender: '',
            citizenship: '',
            document: '',
            documentInfo: '',
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
        },
        updateSecondName(state, {value, id}) {
            // TODO внести id в качестве ключа, а value в качестве ключа обьекта для создания фамилии
            console.log(value, id, 'мутация')
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
        },
        updateSecondName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateSecondName', {value, id});
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