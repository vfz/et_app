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


    },
    mutations: {
        updateFromStations(state, fromStations) {
            state.fromStations = fromStations.result
        },
        updateToStations(state, toStations) {
            state.toStations = toStations.result
        },
        updateDate(state, setDate, tomorow) {
            if (state.selectDate) {
                state.dateArival = setDate; //tomorow ? 'завтра' : 'Сегодня' + tomorow; //
                state.selectDate = !state.selectDate
            };
            if (state.selectDateBack) {
                state.dateBack = setDate; //tomorow ? 'завтра' : 'Сегодня' + tomorow; //
                state.selectDateBack = !state.selectDateBack
            }
        },
        newselectDate(state) {
            state.selectDate = !state.selectDate
        },
        newselectDateBack(state) {
            state.selectDateBack = !state.selectDateBack
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
        async getToStations(ctx, from = '') {
            const res = await пше("https://evrotrans.net/APIet/?command=to&from_id=" + from);
            const toStations = await res.json();
            ctx.commit('updateToStations', toStations)
        },
        async getFromStations(ctx) {
            const res = await fetch("https://evrotrans.net/APIet/?command=from");
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
        SetDate(ctx, setDate, tomorow) {
            ctx.commit('updateDate', setDate, tomorow)
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