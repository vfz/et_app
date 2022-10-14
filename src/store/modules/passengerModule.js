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
        promocode: '',
    }),
    mutations: {
        addArraysPassengers(state, arraysPassengers) {
            state.passengers.push(...arraysPassengers)
        },
        updateSecondName(state, {value, id}) {
            // state.passengers[id-1] = {id: Number(id),secondName: value}
            state.passengers[id-1].secondName = value;
        },
        updateError(state, [error, id]) {
            state.passengers[id-1].error = error
        }
    },
    actions: {
        async getPassengersArrays(ctx) {
            const arraysPassengers = [ctx.getters.getPassengersArrays];
            await ctx.commit('addArraysPassengers', arraysPassengers)
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
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            if (field === 'secondName' && value === '') {
                ctx.commit('updateError', ['заполните фамилию', id]);
            }
            if (field === 'secondName' && value !== '') {
                ctx.commit('updateError', ['', id])
            }
        }
    },
    getters: {
        getPassengers(state, getters) {
            return state.passengers;
        },
        getPassengersArrays(state, getters) {
            return {id: getters.adults+getters.childrens}
        }
    },
}