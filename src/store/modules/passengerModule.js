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
        updateError(state, error) {
            state.error = error;
        }
    },
    actions: {
        async getPassengersArrays(ctx) {
            const arraysPassengers = ctx.getters.getPassengersArrays;
            await ctx.commit('arraysPassengers', arraysPassengers)
        },
        updateSecondName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateSecondName', {value, id});
        },
        validateNameField(ctx, event) {
            const value = event.target.value;
            //получение названия поля
            const field = event.target.id.replace(/[0-9]/g, '')
            if (field === 'secondName' && value === '') {
                ctx.commit('updateError', 'Заполните Фамилию');
            }
            else {
                ctx.commit('updateError', '');
            }
        }
    },
    getters: {
        getPassengers(state, getters) {
            return state.passengers;
        },
        getPassengersArrays(state, getters) {
            return [...Array(getters.adults+getters.childrens).keys()]
        },
        //происходит ошибка при появлении этого геттера. Из-за того что массив превращается обьект, он теряет ключ.
        getError(state) {
            return state.error;
        }
    },
}