export default {
    state: {
        fromStations: [],
        toStations: [],
        from: '',
        to: '',
        adults: 1,
        childrens: 0,
        dateArival: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }),
        dateBack: '',
        selectDate: false,
        selectDateBack: false,
        oneWay: true,
        flightThere: [],
        flightBack: [],
        busTriptId: "7",
        shemeMobile: [],
        shemeDesktop: []

    },
    mutations: {
        // функция для перестройки схемы автобуса в мобильную
        busMobile(state) {
            const flights = [].concat(state.flightThere, state.flightBack)
                // console.log(flights)
            const floors = flights.find(trip => trip.id_trip === state.busTriptId).bus_config

            let strMObile = {...floors }
            Object.keys(floors).map(fl => {

                let floorObject = {
                    ...floors[fl][1].slice(0).reverse()
                }

                //console.log(strMObile)
                for (let i = 2; i <= 5; i++) {

                    let floorObject1 = {
                        ...floors[fl][i].slice(0).reverse()
                    }

                    for (var key in floorObject) {
                        floorObject[key] = [].concat(floorObject[key], floorObject1[key]);
                    }

                    // console.log(floorObject)
                }

                strMObile[fl] = floorObject

                state.shemeMobile = strMObile

            })
        },
        // функция для схемы автобуса на дексктопе
        busDesktop(state) {
            const flights = [].concat(state.flightThere, state.flightBack)
                // console.log(flights)
            const floors = flights.find(trip => trip.id_trip === state.busTriptId).bus_config
            state.shemeDesktop = floors

        },

        //обновить id рейса для которого нужно выводить Схему автобуса
        updatebBusTriptId(state, tripId) {
            state.busTriptId = tripId
        },
        updateFromStations(state, fromStations) {
            state.fromStations = fromStations.result
        },
        updateToStations(state, toStations) {
            state.toStations = toStations.result
        },
        updateFlightThere(state, flights) {
            state.flightThere = flights.result;
        },
        updateFlightBack(state, flights) {
            state.flightBack = flights.result;
        },
        updateOneWay(state, oneWay) {
            state.oneWay = oneWay;
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
        //обновить id рейса для которого нужно выводить Схему автобуса
        updatebBusTriptId(ctx, tripId) {
            ctx.commit('updatebBusTriptId', tripId)
            ctx.commit('busMobile')
            ctx.commit('busDesktop')
            ctx.commit('flightsSelectedSeats/setCurrentFlight', tripId)
        },
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
        //Получаем список рейсов (туда)
        async getFlightThere(ctx) {

            const validSearchThere = (!+ctx.state.from || !+ctx.state.to || !ctx.state.dateArival) ? false : true
            if (!validSearchThere) { return false }
            const from_okato = ctx.state.fromStations.find(station => station.id_from === ctx.state.from).okato
            const to_okato = ctx.state.toStations.find(station => station.id_to === ctx.state.to).okato

            const res = await fetch(ctx.rootState.API_URL + "?command=okato_trip&from_id=" + from_okato + "&to_id=" + to_okato + "&date_trip=" + ctx.state.dateArival);
            const FlightThere = await res.json();
            ctx.commit('updateFlightThere', FlightThere)
            ctx.commit('flightsSelectedSeats/setFlightThere', FlightThere)


        },
        //Получаем список рейсов (обратно)
        async getFlightBack(ctx) {
            const validSearchBack = (!+ctx.state.from || !+ctx.state.to || !ctx.state.dateBack || ctx.state.oneWay) ? false : true
            if (!validSearchBack) { return false }
            const from_okato = ctx.state.toStations.find(station => station.id_to === ctx.state.to).okato
            const to_okato = ctx.state.fromStations.find(station => station.id_from === ctx.state.from).okato

            const res = await fetch(ctx.rootState.API_URL + "?command=okato_trip&from_id=" + from_okato + "&to_id=" + to_okato + "&date_trip=" + ctx.state.dateBack);
            const FlightBack = await res.json();
            ctx.commit('updateFlightBack', FlightBack)
            ctx.commit('flightsSelectedSeats/setFlightBack', FlightBack);

        },

        // Ракировка откуда куда
        castling(ctx) {
            ctx.commit('castlingPoint')
            ctx.dispatch('getFlightThere')
            ctx.dispatch('getFlightBack')
        },
        UpdateOneWay(ctx, oneWay) {
            ctx.commit('updateOneWay', oneWay)
            ctx.dispatch('getFlightThere')
            ctx.dispatch('getFlightBack')
        },
        UpdateselectDate(ctx) {
            ctx.commit('newselectDate')
            ctx.dispatch('getFlightThere')
            ctx.dispatch('getFlightBack')
        },
        UpdateselectDateBack(ctx) {
            ctx.commit('newselectDateBack')
            ctx.dispatch('getFlightThere')
            ctx.dispatch('getFlightBack')
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
            ctx.dispatch('getFlightThere')
            ctx.dispatch('getFlightBack')
        },
        setFrom(ctx, id) {
            ctx.commit('updateFrom', id)
            ctx.dispatch('getFlightThere')
            ctx.dispatch('getFlightBack')
        },
        setTo(ctx, id) {
            ctx.commit('updateTo', id)
            ctx.dispatch('getFlightThere')
            ctx.dispatch('getFlightBack')
        },
        PlusAdult(ctx) { ctx.commit('plusAdult') },
        MinusAdult(ctx) { ctx.commit('minusAdult') },
        PlusChild(ctx) { ctx.commit('plusChild') },
        MinusChild(ctx) { ctx.commit('minusChild') }


    },
    modules: {},
    getters: {
        shemeMobile(state) {
            return state.shemeMobile
        },
        shemeDesktop(state) {
            return state.shemeDesktop
        },

        // mergeFlights(state) {
        //     let flights = state.flightThere.concat(state.flightBack);
        //     return flights
        // },
        busTriptId(state) {
            return state.busTriptId
        },

        flightBack(state) {
            return state.flightBack
        },

        flightThere(state) {
            return state.flightThere
        },
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
        oneWay(state) {
            return state.oneWay
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