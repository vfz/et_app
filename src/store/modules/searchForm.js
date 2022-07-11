export default {
    state: {
        fromStations: [],
        toStations: [],
        from: '',
        to: '',
        adults: 1,
        childrens: 0,
        dateArival: '',
        dateBack: '',
        selectDate: false,
        selectDateBack: false,

        flightThere: [],
        flightBack: [],

    },
    mutations: {
        updateFromStations(state, fromStations) {
            state.fromStations = fromStations.result
        },
        updateToStations(state, toStations) {
            state.toStations = toStations.result
        },
        updateDateC(state, newDate) {
            if (state.selectDate) {
                state.dateArival = newDate;
                state.selectDate = false;
            }
            if (state.selectDateBack) {
                state.dateBack = newDate;
                state.selectDateBack = false
            }
        },
        updateDate(state, tomorow) {
            let D = new Date();
            if (tomorow == true) {
                D.setDate(D.getDate() + 1)
                let month = D.getMonth() + 1;
                let day = (D.getDate().toString().length === 1) ? '0' + D.getDate() : D.getDate();
                month = (month.toString().length === 1) ? '0' + month : month;
                state.dateArival = day + '.' + month + '.' + D.getFullYear()
            } else {
                let month = D.getMonth() + 1;
                let day = (D.getDate().toString().length === 1) ? '0' + D.getDate() : D.getDate();
                month = (month.toString().length === 1) ? '0' + month : month;
                state.dateArival = day + '.' + month + '.' + D.getFullYear()
            }

        },
        updateDateBack(state, tomorow) {
            let D = new Date();
            if (tomorow == true) {
                D.setDate(D.getDate() + 1)
                let month = D.getMonth() + 1;
                let day = (D.getDate().toString().length === 1) ? '0' + D.getDate() : D.getDate();
                month = (month.toString().length === 1) ? '0' + month : month;
                state.dateBack = day + '.' + month + '.' + D.getFullYear()
            } else {
                let month = D.getMonth() + 1;
                let day = (D.getDate().toString().length === 1) ? '0' + D.getDate() : D.getDate();
                month = (month.toString().length === 1) ? '0' + month : month;
                state.dateBack = day + '.' + month + '.' + D.getFullYear()
            }

        },
        newselectDate(state) {
            state.selectDate = !state.selectDate;
            state.selectDateBack = false
        },
        newselectDateBack(state) {
            state.selectDateBack = !state.selectDateBack;
            state.selectDate = false
        },
        DateFalse(state) {
            state.selectDate = false
        },
        updateFrom(state, id) {
            state.from = id
        },
        updateTo(state, id) {
            state.to = id
        },
        castlingPoint(state) {
            [state.from, state.to] = [state.to, state.from]
        },
        plusAdult(state) {
            state.adults += 1;
            if (state.adults > 7) {
                state.adults = 7;
            }
        },
        minusAdult(state) {
            state.adults -= 1;
            if (state.adults < 1) {
                state.adults = 1;
            }
        },
        plusChild(state) {
            state.childrens += 1;
            if (state.childrens > 5) {
                state.childrens = 5;
            }
        },
        minusChild(state) {
            state.childrens -= 1;
            if (state.childrens < 0) {
                state.childrens = 0;
            }
        }
    },
    actions: {
        //Получаем список станций прибытия
        async getToStations(ctx, from = '') {
            const res = await fetch(ctx.rootState.API_URL + "?command=to&from_id=" + from);
            const toStations = await res.json();
            ctx.commit('updateToStations', toStations)
        },
        //Получаем список станций отправления
        async getFromStations(ctx) {
            const res = await fetch(ctx.rootState.API_URL + "?command=from");
            const fromStations = await res.json();
            ctx.commit('updateFromStations', fromStations)
        },

        castling(ctx) {
            ctx.commit('castlingPoint')
        },
        UpdateselectDate(ctx) {
            ctx.commit('newselectDate')
        },
        UpdateselectDateBack(ctx) {
            ctx.commit('newselectDateBack')
        },
        selectDateFalse(ctx) {
            ctx.commit('DateFalse')
        },
        SetDateArival(ctx, f) {
            ctx.commit('updateDate', f)
        },
        SetDateBack(ctx, f) {
            ctx.commit('updateDateBack', f)
        },
        SetDate(ctx, newDate) {
            ctx.commit('updateDateC', newDate)
        },
        setFrom(ctx, id) {
            ctx.commit('updateFrom', id)
        },
        setTo(ctx, id) {
            ctx.commit('updateTo', id)
        },
        PlusAdult(ctx) { ctx.commit('plusAdult') },
        MinusAdult(ctx) { ctx.commit('minusAdult') },
        PlusChild(ctx) { ctx.commit('plusChild') },
        MinusChild(ctx) { ctx.commit('minusChild') }



    },
    modules: {},
    getters: {
        fromStations(state) {
            return state.fromStations
        },
        toStations(state) {
            return state.toStations
        },
        from(state) {
            return state.from
        },
        to(state) {
            return state.to
        },
        childrens(state) {
            return state.childrens
        },
        adults(state) {
            return state.adults
        },
        dateArival(state) {
            return state.dateArival
        },
        dateBack(state) {
            return state.dateBack
        },
        selectDate(state) {
            return state.selectDate
        },
        selectDateBack(state) {
            return state.selectDateBack
        }

    }

}