import Vue from "vue";

export const passengerModule = {
    state: () => ({
        passengers: [
            {
                id: 0,
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
        addPassenger(state, passenger) {
            state.passengers.push(passenger)
        },
        removePassenger(state, passenger) {
            state.passengers.splice(passenger, 1)
        },
        changePassengerId(state, passenger) {
            state.passengers.forEach(function (passenger, index){
                passenger.id = index
            })
        },
        updateSecondName(state, [value, id]) {
            state.passengers[id].secondName = value;
        },
        updateError(state, [error, id]) {
            state.passengers[id].error = error
        }
    },
    actions: {
        addPassenger(ctx, isAdult) {
            const agultCount = ctx.getters.adults;
            const childrenCount = ctx.getters.childrens;
            //прибавляется единица, так как по умолчанию выбран один человек
            const id = agultCount+childrenCount-1
            const passenger = {id: id, isAdult: isAdult}
            ctx.commit('addPassenger', passenger)
            ctx.commit('changePassengerId', passenger)
        },
        removePassenger(ctx, isAdult) {
            const agultCount = ctx.getters.adults;
            const childrenCount = ctx.getters.childrens;
            //прибавляется единица, так как по умолчанию выбран один человек
            const id = agultCount+childrenCount
            //getIndex() выбирает
            function getIndex(passenger) {
                if (passenger.isAdult === isAdult) {
                    return passenger
                }
            }
            const passenger = ctx.state.passengers.findIndex(getIndex)
            ctx.commit('removePassenger', passenger)
        },
        updateSecondName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateSecondName', [value, id]);
        },
        validateNameField(ctx, event) {
            const value = event.target.value;
            //получение названия поля
            const field = event.target.id.replace(/[0-9]/g, '')
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            if (field === 'secondName' && value === '') {
                console.log('заполните фамилию')
                ctx.commit('updateError', ['заполните фамилию', id]);
            }
            if (field === 'secondName' && value !== '') {
                console.log('все корректно')
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