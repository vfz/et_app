import Vue from "vue";

export const passengerModule = {
    state: () => ({
        passengers: [
            {
                id: 1,
                secondName: '',
                error: '',
                isAdult: true,
            }
        ],
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
        addArraysPassengers(state, id) {
            state.passengers.push(state.passengers[id])
        },
        updateSecondName(state, {value, id}) {
            state.passengers[id-1] = {secondName: value};
        },
        updateError(state, [error, id]) {
            state.passengers[id-1].error = error
        }
    },
    actions: {
        getPassengersArrays(ctx) {
            const agultCount = ctx.getters.adults;
            const childrenCount = ctx.getters.childrens;
            //прибавляется единица, так как по умолчанию выбран один человек
            const id = agultCount+childrenCount+1
            ctx.commit('addArraysPassengers', id)
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
        adults(getters) {
            return getters.adults
        },
        childrens(getters) {
          return getters.childrens
        }
    },
}