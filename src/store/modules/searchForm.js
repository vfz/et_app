import Vue from 'vue'
import { element } from "mdb-ui-kit/src/js/mdb/util";

export default {
    state: {
        fromStations: [],
        toStations: [],
        from: '',
        to: '',
        dateArival: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }),
        dateBack: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }),
        dateArivalPrices: { '2000-12-25': '-' },
        dateBackPrices: { '2000-12-01': '-' },
        selectDate: false,
        selectDateBack: false,
        oneWay: true,
        flightThere: [],
        flightBack: [],
        busTriptId: "7",
        shemeMobile: [],
        shemeDesktop: [],
        selectedSeat: [],
        isFlightsLoading: false,

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
        updateDefaultsSeat(state, passengers) {

            const allFlights = [
                ...state.flightBack.filter(flight => (flight.count_available_seats_trip >= passengers.length)),
                ...state.flightThere.filter(flight => (flight.count_available_seats_trip >= passengers.length))
            ]

            state.selectedSeat = allFlights.map(flight => {

                return {
                    id_ticket: flight.ticket_id_2,
                    id_trip: flight.id_trip,
                    is_selected: false,
                    seats: [
                        //Берем первые N мест из рейса с достаточным кол-вом мест где N кол-во пассажиров
                        ...flight.seats_trip.split('^').slice(0, passengers.length)
                    ]
                }


            })

        },

        changeSeatList(state, { busTripId, seat, status, passengers }) {
            let selectedFlight = state.selectedSeat.filter(reis => (reis.id_trip === busTripId))[0]
            if (status) {
                selectedFlight.seats.splice(selectedFlight.seats.indexOf(seat), 1)
            }

            if (!status && passengers.length > selectedFlight.seats.length) {
                selectedFlight.seats.splice(0, 0, seat)
            }

            if (!status && passengers.length === selectedFlight.seats.length) {
                selectedFlight.seats.splice(0, 1, seat)
            }

        },
        setTrip(state, [busTripId, busTicketId]) {

            //если выбираемый рейс находится в ОБРАТНЫХ рейсах 
            if (state.flightBack.filter(flight => (flight.id_trip === busTripId && flight.ticket_id_2 === busTicketId)).length > 0) {

                state.selectedSeat.filter(
                    flight1 => (state.flightBack.map(flight => { return flight.id_trip }).includes(flight1.id_trip))
                ).filter((reis) => {
                    reis.is_selected = reis.is_selected ? false : reis.id_trip === busTripId && reis.id_ticket === busTicketId;
                })
            }

            //если выбираемый рейс находится в ПРЯМЫХ рейсах
            if (state.flightThere.filter(flight => (flight.id_trip === busTripId && flight.ticket_id_2 === busTicketId)).length > 0) {

                state.selectedSeat.filter(
                    flight1 => (state.flightThere.map(flight => { return flight.id_trip }).includes(flight1.id_trip))
                ).filter((reis) => {
                    reis.is_selected = reis.is_selected ? false : reis.id_trip === busTripId && reis.id_ticket === busTicketId;
                })
            }
        },
        setDateArrivalByQuery(state, dateArrivalQuery) {
            state.dateArival = dateArrivalQuery
        },
        setDateBackByQuery(state, dateBackQuery) {
            state.dateBack = dateBackQuery
        },
        setDateArivalPrices(state, therePrices) {
            state.dateArivalPrices = therePrices.result
        },
        setDateBackPrices(state, backPrices) {
            state.dateBackPrices = backPrices.result
        },
        setFlightsLoading(state, isFlightsLoading) {
            state.isFlightsLoading = isFlightsLoading
        },
        removeSeatById(state, id) {
            state.selectedSeat.filter(flight => {
                if (flight.is_selected) {
                    flight.seats.splice(id, 1)
                }
            })
        }
    },
    actions: {
        //обновить id рейса для которого нужно выводить Схему автобуса
        updatebBusTriptId(ctx, tripId) {
            ctx.commit('updatebBusTriptId', tripId)
            ctx.commit('busMobile')
            ctx.commit('busDesktop')

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
            ctx.commit('setFlightsLoading', true)
            const validTherePrice = (!+ctx.state.from || !+ctx.state.to) ? false : true
            if (validTherePrice) {
                const from_okato = ctx.state.fromStations.find(station => station.id_from === ctx.state.from).okato
                const to_okato = ctx.state.toStations.find(station => station.id_to === ctx.state.to).okato
                const resTherePrices = await fetch(ctx.rootState.API_URL + "?command=prices_okato_trip&from_id=" + from_okato + "&to_id=" + to_okato);
                const therePrices = await resTherePrices.json();
                ctx.commit('setDateArivalPrices', therePrices)
            }

            const validSearchThere = (!+ctx.state.from || !+ctx.state.to || !ctx.state.dateArival) ? false : true
            if (!validSearchThere) { return false }

            const from_okato = ctx.state.fromStations.find(station => station.id_from === ctx.state.from).okato
            const to_okato = ctx.state.toStations.find(station => station.id_to === ctx.state.to).okato
            const res = await fetch(ctx.rootState.API_URL + "?command=okato_trip&from_id=" + from_okato + "&to_id=" + to_okato + "&date_trip=" + ctx.state.dateArival);
            const FlightThere = await res.json();
            ctx.commit('updateFlightThere', FlightThere)
            ctx.commit('updateDefaultsSeat', ctx.rootGetters.getPassengers)
            ctx.commit('setFlightsLoading', false)
        },
        //Получаем список рейсов (обратно)
        async getFlightBack(ctx) {
            ctx.commit('setFlightsLoading', true)
            const validBackPrice = (!+ctx.state.from || !+ctx.state.to || ctx.state.oneWay) ? false : true
            if (validBackPrice) {
                const from_okato = ctx.state.toStations.find(station => station.id_to === ctx.state.to).okato
                const to_okato = ctx.state.fromStations.find(station => station.id_from === ctx.state.from).okato

                const resBackPrices = await fetch(ctx.rootState.API_URL + "?command=prices_okato_trip&from_id=" + from_okato + "&to_id=" + to_okato);
                const backPrices = await resBackPrices.json();
                ctx.commit('setDateBackPrices', backPrices)
            }
            const validSearchBack = (!+ctx.state.from || !+ctx.state.to || !ctx.state.dateBack || ctx.state.oneWay) ? false : true
            if (!validSearchBack) { return false }

            const from_okato = ctx.state.toStations.find(station => station.id_to === ctx.state.to).okato
            const to_okato = ctx.state.fromStations.find(station => station.id_from === ctx.state.from).okato
            const res = await fetch(ctx.rootState.API_URL + "?command=okato_trip&from_id=" + from_okato + "&to_id=" + to_okato + "&date_trip=" + ctx.state.dateBack);
            const FlightBack = await res.json();
            ctx.commit('updateFlightBack', FlightBack)
            ctx.commit('updateDefaultsSeat', ctx.rootGetters.getPassengers)
            ctx.commit('setFlightsLoading', false)

        },
        // Ракировка откуда куда
        castling(ctx) {
            ctx.commit('castlingPoint')
            ctx.dispatch('getFlightThere')
            ctx.dispatch('getFlightBack')
        },
        UpdateOneWay(ctx, oneWay) {
            ctx.commit('updateOneWay', oneWay)
            ctx.commit('setFlightsLoading', true)
            function loadingFlights() {
                ctx.dispatch('getFlightThere')
                ctx.dispatch('getFlightBack')
                ctx.commit('setFlightsLoading', false)
            }
            setTimeout(loadingFlights, 4000)
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
        changeSelectedPlace(ctx, [busTripId, seat, status]) {

            const allFlights = [
                ...ctx.state.flightBack.filter(flight => (flight.seats_trip.split('^').includes(seat) && flight.id_trip === busTripId)),
                ...ctx.state.flightThere.filter(flight => (flight.seats_trip.split('^').includes(seat) && flight.id_trip === busTripId))
            ]

            //Вызываем мутацию только если в seat переданн номер места и в выбраном рейсе выбранное место свободно
            //Чистим seat от всего что не цифра и проверяем не осталась ли пустая строка если строка не пустая вызываем мутацию 
            if (seat.replace(/[^\d]/g, '').trim() !== '' && allFlights.length > 0) {
                let passengers = ctx.rootGetters.getPassengers
                ctx.commit('changeSeatList', { busTripId, seat, status, passengers })
            }

        },
        chengeSelectTrip(ctx, [busTripId, busTicketId]) {
            ctx.commit('setTrip', [busTripId, busTicketId])
        },
    },
    modules: {},
    getters: {
        shemeMobile(state) {
            return state.shemeMobile
        },
        shemeDesktop(state) {
            return state.shemeDesktop
        },
        selectedSeat(state) {
            return state.selectedSeat
        },
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
        },
        dateArivalPrices(state) {
            return state.dateArivalPrices
        },
        dateBackPrices(state) {
            return state.dateBackPrices
        },
        isFlightsLoading(state) {
            return state.isFlightsLoading
        }

    }

}