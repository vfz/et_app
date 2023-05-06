import Vue from 'vue'
import { element } from "mdb-ui-kit/src/js/mdb/util";

export default {
    state: {
        fromStations: [],
        toStations: [],
        from: '',
        from_rosbilet: '',
        from_evrotrans: '',
        to: '',
        to_rosbilet: '',
        to_evrotrans: '',
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
        flightThereAnother: [],
        flightBack: [],
        flightBackAnother: [],
        busTriptId: "7",
        shemeMobile: [],
        shemeDesktop: [],
        selectedSeat: [],
        isFlightsLoading: false,
        selectedFlightType: {
            there: true,
            thereAnother: true,
            back: true,
            backAnother: true,
        }
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
            state.from_evrotrans = state.fromStations.find(station => station.id_from === id && station.id_from_evrotrans).id_from_evrotrans
            state.from = id
            state.from_rosbilet = state.fromStations.find(station => station.id_from === id).id_from_rosbilet
        },
        updateTo(state, id) {

            state.to_evrotrans = state.toStations.find(station => station.id_to === id).id_to_evrotrans
            state.to = id
            state.to_rosbilet = state.toStations.find(station => station.id_to === id).id_to_rosbilet
        },
        castlingPoint(state) {
            [state.from, state.to] = [
                state.fromStations.find(station =>
                    station.name === state.toStations.find(station => station.id_to === state.to).name).id_from,
                state.toStations.find(station =>
                    station.name === state.fromStations.find(station => station.id_from === state.from).name).id_to,
            ]
            state.from_evrotrans = state.fromStations.find(station => station.id_from === state.from).id_from_evrotrans
            state.from_rosbilet = state.fromStations.find(station => station.id_from === state.from).id_from_rosbilet

            state.to_evrotrans = state.toStations.find(station => station.id_to === state.to).id_to_evrotrans
            state.to_rosbilet = state.toStations.find(station => station.id_to === state.to).id_to_rosbilet
        },
        updateDefaultsSeat(state, passengers) {

            let allFlights = []

            if (state.flightBack || state.flightThere || state.flightBackAnother || state.flightThereAnother) {
                allFlights = [
                    ...(state.flightBack || []).filter(flight => (flight.count_available_seats_trip >= passengers.length)),
                    ...(state.flightThere || []).filter(flight => (flight.count_available_seats_trip >= passengers.length)),
                    ...(state.flightBackAnother || []).filter(flight => (flight.count_available_seats_trip >= passengers.length)),
                    ...(state.flightThereAnother || []).filter(flight => (flight.count_available_seats_trip >= passengers.length))
                ];
            }

            state.selectedSeat = allFlights.map(flight => {

                return {
                    id_ticket: flight.ticket_id_2,
                    id_trip: flight.id_trip,
                    source: flight.source,
                    is_selected: false,
                    flight_type: flight.flightType,
                    id_from_point: flight.id_from_point,
                    id_to_point: flight.id_to_point,
                    id_from_city: flight.id_from_city,
                    id_to_city: flight.id_to_city,
                    date_trip: flight.date_trip,
                    time_trip: flight.time_trip,
                    flight_type: flight.flightType,
                    seats: [
                        //Берем первые N мест из рейса с достаточным кол-вом мест где N кол-во пассажиров
                        ...flight.seats_trip.split('^').slice(0, passengers.length)
                    ]
                }


            })

        },
        setDublicatedIdFlight(state, [busTripId, busTicketId]) {
            let allSelectedFlights = state.selectedSeat.filter((flight) => flight.is_selected)
                //находим дубликат по flight_id_trip
            let dublicatedIdFlight = state.selectedSeat.find((flight) => flight.id_trip === busTripId && flight.id_ticket !== busTicketId && flight.is_selected === false)
            if (dublicatedIdFlight) {
                //добавляем парамент is_dublicated_by_id_trip
                if (dublicatedIdFlight.is_dublicated_by_id_trip) {
                    dublicatedIdFlight.is_dublicated_by_id_trip = !dublicatedIdFlight.is_dublicated_by_id_trip
                } else {
                    dublicatedIdFlight.is_dublicated_by_id_trip = true
                }
            }
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

            if (state.flightBackAnother.filter(flight => (flight.id_trip === busTripId && flight.ticket_id_2 === busTicketId)).length > 0) {

                state.selectedSeat.filter(
                    flight1 => (state.flightBackAnother.map(flight => { return flight.id_trip }).includes(flight1.id_trip))
                ).filter((reis) => {
                    reis.is_selected = reis.is_selected ? false : reis.id_trip === busTripId && reis.id_ticket === busTicketId;
                })
            }

            if (state.flightThereAnother.filter(flight => (flight.id_trip === busTripId && flight.ticket_id_2 === busTicketId)).length > 0) {

                state.selectedSeat.filter(
                    flight1 => (state.flightThereAnother.map(flight => { return flight.id_trip }).includes(flight1.id_trip))
                ).filter((reis) => {
                    reis.is_selected = reis.is_selected ? false : reis.id_trip === busTripId && reis.id_ticket === busTicketId;
                })
            }
        },
        setSelectedFlightType(state) {
            const backFlights = state.selectedSeat.filter((flight) => flight.flight_type === 'back')
            const backAnotherFlights = state.selectedSeat.filter((flight) => flight.flight_type === 'backAnother')
            const thereFlights = state.selectedSeat.filter((flight) => flight.flight_type === 'there')
            const thereAnotherFlights = state.selectedSeat.filter((flight) => flight.flight_type === 'thereAnother')
            state.selectedFlightType.there = true
            state.selectedFlightType.thereAnother = true
            state.selectedFlightType.backAnother = true
            state.selectedFlightType.back = true

            if (backFlights.some(flight => flight.is_selected)) {
                state.selectedFlightType.back = true
                state.selectedFlightType.backAnother = false
                // return true
            } 

            if (backAnotherFlights.some(flight => flight.is_selected)) {
                state.selectedFlightType.backAnother = true
                state.selectedFlightType.back = false
                // return true
            } 

            if (thereFlights.some(flight => flight.is_selected)) {
                state.selectedFlightType.there = true
                state.selectedFlightType.thereAnother = false
                // return true
            }

            if (thereAnotherFlights.some(flight => flight.is_selected)) {
                state.selectedFlightType.thereAnother = true
                state.selectedFlightType.there = false
                // return true
            } 
            return true
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
        },
        updateAllFlightThere(state, allFlights) {
            state.flightThereAnother = allFlights
        },
        updateAllFlightBack(state, allFlights) {
            state.flightBackAnother = allFlights
        },
        updateFlightType(state, flightType) {
            if (flightType === 'there') {
                state.flightThere.forEach((item) => {
                    item.flightType = 'there'
                })
            }

            if (flightType === 'back') {
                state.flightBack.forEach((item) => {
                    item.flightType = 'back'
                })
            }

            if (flightType === 'thereAnother') {
                if (state.flightThereAnother) {
                    state.flightThereAnother.forEach((item) => {
                        item.flightType = 'thereAnother'
                    })
                }
            }


            if (flightType === 'backAnother') {
                state.flightBackAnother.forEach((item) => {
                    item.flightType = 'backAnother'
                })
            }
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
            const res = await fetch(ctx.rootState.API_PARTNERS_URL + "data/allto", {
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                        // 'Cookie': 'Cookie (en-US)',
                },
            });
            const toStations = await res.json();
            ctx.commit('updateToStations', toStations)

        },
        //Получаем список станций отправления
        async getFromStations(ctx) {
            const res = await fetch(ctx.rootState.API_PARTNERS_URL + "data/allfrom", {
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                        // 'Cookie': 'Cookie (en-US)',
                },
            });
            const fromStations = await res.json();
            ctx.commit('updateFromStations', fromStations)
        },

        //получение рейсов остальных провайдеров туда
        async getAllFlightThere(ctx) {
            const validSearchThere = (!+ctx.state.from || !+ctx.state.to || !ctx.state.dateArival) ? false : true
            if (!validSearchThere) { return false }
            // ctx.commit('setFlightsLoading', true)
            let fromId = ctx.state.fromStations.find(station => station.id_from === ctx.state.from).id_from_rosbilet
            let toId = ctx.state.toStations.find(station => station.id_to === ctx.state.to).id_to_rosbilet

            const res = await fetch(ctx.rootState.API_PARTNERS_URL + 'search?from=' + ctx.state.from + '&to=' + ctx.state.to + '&date=' + ctx.state.dateArival, {
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                            // 'Cookie': 'Cookie (en-US)',
                    },
                })
                .then(async(result) => {
                    let allFlights = await result.json()
                    if ((allFlights.error === '0' || allFlights.error === '1') && allFlights.result !== null) {
                        ctx.commit('updateAllFlightThere', allFlights.result)
                        ctx.commit('updateFlightType', 'thereAnother')
                        ctx.commit('updateDefaultsSeat', ctx.rootGetters.getPassengers)
                        // ctx.commit('setFlightsLoading', false)
                        return true
                    } else {
                        ctx.commit('updateAllFlightThere', [])
                        ctx.commit('updateFlightType', 'thereAnother')
                        // ctx.commit('setFlightsLoading', false)
                        return false
                    }
                })
                .catch((error) => {
                    ctx.commit('updateAllFlightThere', [])
                    ctx.commit('updateFlightType', 'thereAnother')
                    // ctx.commit('setFlightsLoading', false)
                    throw error
                })

        },
        //получение рейсов остальных провайдеров обратно
        async getAllFlightBack(ctx) {
            console.log('Invoking getAllFlightBack function...')
            console.log(ctx.state.oneWay)
            const validSearchBack = (!+ctx.state.from || !+ctx.state.to || !ctx.state.dateBack || ctx.state.oneWay) ? false : true
            console.log('Invoking getAllFlightBack function...')
            // ctx.commit('setFlightsLoading', true)
            if (!validSearchBack) { console.log('Invalid search back. Exiting function...'); return false }
            let fromId = ctx.state.toStations.find(toStation => toStation.name === ctx.state.fromStations.find(fromStation => fromStation.id_from_rosbilet === ctx.state.from_rosbilet).name).id_to //stationFrom.id_from_rosbilet
            let toId = ctx.state.fromStations.find(fromStation => fromStation.name === ctx.state.toStations.find(toStation => toStation.id_to_rosbilet === ctx.state.to_rosbilet).name).id_from //stationTo.id_to_rosbilet
            console.log('From ID:', fromId)
            console.log('To ID:', toId)

            const res = await fetch(ctx.rootState.API_PARTNERS_URL + 'search?from=' + toId + '&to=' + fromId + '&date=' + ctx.state.dateBack)
                .then(async(result) => {
                    console.log('Fetching all flights...')
                    let allFlights = await result.json()
                    if (allFlights.error === '0' && allFlights.result !== null) {
                        console.log('All flights:', allFlights.result)
                        ctx.commit('updateAllFlightBack', allFlights.result)
                        ctx.commit('updateFlightType', 'backAnother')
                        ctx.commit('updateDefaultsSeat', ctx.rootGetters.getPassengers)
                        // ctx.commit('setFlightsLoading', false)
                        console.log('Exiting function...')
                        return true
                    } else {
                        console.log('No flights found. Exiting function...')
                        ctx.commit('updateAllFlightBack', [])
                        ctx.commit('updateFlightType', 'backAnother')
                        // ctx.commit('setFlightsLoading', false)
                        return false
                    }
                })
                .catch((error) => {
                    console.error('Error:', error)
                    throw error
                })
        },
        //Получаем список рейсов (туда)÷
        async getFlightThere(ctx) {
            // ctx.commit('setFlightsLoading', true)
            const validTherePrice = (!+ctx.state.from || !+ctx.state.to) ? false : true
            if (validTherePrice) {
                const from_okato = ctx.state.fromStations.find(station => station.id_from === ctx.state.from).okato
                const to_okato = ctx.state.toStations.find(station => station.id_to === ctx.state.to).okato
                const resTherePrices = await fetch(ctx.rootState.API_URL + "?command=prices_okato_trip&from_id=" + from_okato + "&to_id=" + to_okato)
                const therePrices = await resTherePrices.json();
                ctx.commit('setDateArivalPrices', therePrices)
            }
            const validSearchThere = (!+ctx.state.from || !+ctx.state.to || !ctx.state.dateArival) ? false : true
            if (!validSearchThere) { return false }

            const from_okato = ctx.state.fromStations.find(station => station.id_from === ctx.state.from).okato
            const to_okato = ctx.state.toStations.find(station => station.id_to === ctx.state.to).okato
            const res = await fetch(ctx.rootState.API_URL + "?command=okato_trip&from_id=" + from_okato + "&to_id=" + to_okato + "&date_trip=" + ctx.state.dateArival)
                .then(async(result) => {
                    let flightThere = await result.json();
                    ctx.commit('updateFlightThere', flightThere)
                    ctx.commit('updateFlightType', 'there')
                    ctx.commit('updateDefaultsSeat', ctx.rootGetters.getPassengers)
                    // ctx.commit('setFlightsLoading', false)
                    return true
                })
                .catch((error) => {
                    throw error
                });
        },
        //Получаем список рейсов (обратно)
        async getFlightBack(ctx) {
            ctx.commit('setFlightsLoading', true)
            const validBackPrice = (!+ctx.state.from || !+ctx.state.to || !+ctx.state.oneWay) ? false : true
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
            const res = await fetch(ctx.rootState.API_URL + "?command=okato_trip&from_id=" + from_okato + "&to_id=" + to_okato + "&date_trip=" + ctx.state.dateBack)
                .then(async(result) => {
                    let flightBack = await result.json();
                    ctx.commit('updateFlightBack', flightBack)
                    ctx.commit('updateFlightType', 'back')
                    ctx.commit('updateDefaultsSeat', ctx.rootGetters.getPassengers)
                    // ctx.commit('setFlightsLoading', false)
                    return true
                })
                .catch((error) => {
                    throw error
                });

        },

        async loadingFlights(ctx){
            const validSearchThere = (!+ctx.state.from || !+ctx.state.to || !ctx.state.dateArival) ? false : true
            if (!validSearchThere) { return false }

            ctx.commit('setFlightsLoading', true)
            await ctx.dispatch('getFlightThere')
                .then(await ctx.dispatch('getFlightBack'))
                .then(await ctx.dispatch('getAllFlightThere'))
                .then(await ctx.dispatch('getAllFlightBack'))

            ctx.commit('setSelectedFlightType')
            // ctx.dispatch('getFlightThere')
            // ctx.dispatch('getFlightBack')
            // ctx.dispatch('getAllFlightThere')
            // ctx.dispatch('getAllFlightBack')

            ctx.commit('setFlightsLoading', false)
        },
        // Ракировка откуда куда
        castling(ctx) {
            // ctx.dispatch('getFlightThere')
            ctx.dispatch('loadingFlights')

            // ctx.dispatch('getFlightThere')
            // ctx.dispatch('getFlightBack')
            // ctx.dispatch('getAllFlightThere')
            // ctx.dispatch('getAllFlightBack')
        },
        UpdateOneWay(ctx, oneWay) {
            ctx.commit('updateOneWay', oneWay)
            // ctx.commit('setFlightsLoading', true)
            ctx.dispatch('loadingFlights')

            // function loadingFlights() {
            //     ctx.dispatch('getFlightThere')
            //     ctx.dispatch('getFlightBack')
            //     ctx.dispatch('getAllFlightThere')
            //     ctx.dispatch('getAllFlightBack')
            //     ctx.commit('setFlightsLoading', false)
            // }
            // setTimeout(loadingFlights, 4000)
        },
        UpdateselectDate(ctx) {
            ctx.commit('newselectDate')
            ctx.dispatch('loadingFlights')

            // ctx.dispatch('getFlightThere')
            // ctx.dispatch('getFlightBack')
            // ctx.dispatch('getAllFlightThere')
            // ctx.dispatch('getAllFlightBack')
        },
        UpdateselectDateBack(ctx) {
            ctx.commit('newselectDateBack')
            ctx.dispatch('loadingFlights')

            // ctx.dispatch('getFlightThere')
            // ctx.dispatch('getFlightBack')
            // ctx.dispatch('getAllFlightThere')
            // ctx.dispatch('getAllFlightBack')
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
            ctx.dispatch('loadingFlights')

            // ctx.dispatch('getFlightThere')
            // ctx.dispatch('getFlightBack')
            // ctx.dispatch('getAllFlightThere')
            // ctx.dispatch('getAllFlightBack')
        },
        setFrom(ctx, id) {
            ctx.commit('updateFrom', id)
            ctx.dispatch('loadingFlights')

            // ctx.dispatch('getFlightThere')
            // ctx.dispatch('getFlightBack')
            // ctx.dispatch('getAllFlightThere')
            // ctx.dispatch('getAllFlightBack')
        },
        setTo(ctx, id) {
            ctx.commit('updateTo', id)
            ctx.dispatch('loadingFlights')

            // ctx.dispatch('getFlightThere')
            // ctx.dispatch('getFlightBack')
            // ctx.dispatch('getAllFlightThere')
            // ctx.dispatch('getAllFlightBack')
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
            ctx.commit('setSelectedFlightType')
            ctx.commit('setDublicatedIdFlight', [busTripId, busTicketId])
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
        },
        getOnlyEvrotransFlightThere(state) {
            return state.flightThere.filter(flight => flight.source === 'evrotrans')
        },
        getOnlyEvrotransFlightBack(state) {
            return state.flightBack.filter(flight => flight.source === 'evrotrans')
        },
        flightThereAnother(state) {
            return state.flightThereAnother
        },
        flightBackAnother(state) {
            return state.flightBackAnother
        },
        selectedFlightType(state) {
            return state.selectedFlightType
        }

    }

}