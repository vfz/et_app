import { counter } from "@fortawesome/fontawesome-svg-core"

export default {
    state: {
        passengers: [{
            id: 0,
            selectedSeats: [{
                id_ticket: 0,
                id_trip: 0,
                seat: 0
            }, ],
            secondName: '',
            firstName: '',
            middleName: '',
            birthday: '',
            gender: '',
            citizenship: '643',
            document: '0',
            documentInfo: '',
            isAdult: true,
            age: 0,
        }],
        documentTypes: [],
        citizenShips: [],
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
        haveErrors: false,
        promoCode: '',
        activeTab: 0,
    },
    mutations: {
        addPassenger(state, passenger) {
            state.passengers.push(passenger)
        },
        removePassenger(state, passenger) {
            state.passengers.splice(passenger, 1)
        },
        setDocumentTypes(state, documentTypes) {
            state.documentTypes = documentTypes
        },
        setCitizenShips(state, citizenShips) {
            state.citizenShips = citizenShips
        },
        updateSecondName(state, [value, id]) {
            state.passengers[id].secondName = value;
        },
        updateFirstName(state, [value, id]) {
            state.passengers[id].firstName = value
        },
        updateMiddleName(state, [value, id]) {
            state.passengers[id].middleName = value
        },
        updateBirthday(state, [value, id]) {
            state.passengers[id].birthday = value
        },
        updateGender(state, [value, id]) {
            state.passengers[id].gender = value
        },
        updateGenderSearchQuery(state, [value, id]) {
            state.passengers[id].genderSearchQuery = value;
        },
        updateCitizenship(state, [value, id]) {
            state.passengers[id].citizenship = value
        },
        updateCitizenshipSearchQuery(state, [value, id]) {
            state.passengers[id].citizenShipSearchQuery = value
        },
        updateDocument(state, [value, id]) {
            state.passengers[id].document = value
        },
        updateDocumentInfo(state, [value, id]) {
            state.passengers[id].documentInfo = value;
        },
        updateError(state, [id, errorText, formField]) {
            state.passengers[id].errors[formField] = errorText
        },
        updateSecondNameBuyer(state, secondName) {
            state.buyerInfo.secondName = secondName
        },
        updateFirstNameBuyer(state, firstName) {
            state.buyerInfo.firstName = firstName
        },
        updateEmailBuyer(state, email) {
            state.buyerInfo.email = email
        },
        updateNumberBuyer(state, number) {
            state.buyerInfo.number = number
        },
        updateErrorBuyer(state, [errorText, formField]) {
            state.buyerInfo.errors[formField] = errorText
        },
        updateDropdown(state, [id, dropdown]) {
            state.passengers[id].dropdowns[dropdown] = !state.passengers[id].dropdowns[dropdown]
        },
        updateHaveErrors(state, haveError) {
            state.haveErrors = haveError
        },
        updateAgePassenger(state, [age, id]) {
            state.passengers[id].age = age
        },
        activeTab(state, id) {
            state.activeTab = id
        },
        updateSelectedSeats(state, selectedSeats) {
            state.passengers.map((passenger, index) => {
                if (selectedSeats[1]) {
                    passenger.selectedSeats[0] = {
                        id_ticket: selectedSeats[1].id_ticket,
                        id_trip: selectedSeats[1].id_trip,
                        seat: selectedSeats[1].seats[index]
                    }
                    passenger.selectedSeats[1] = {
                        id_ticket: selectedSeats[0].id_ticket,
                        id_trip: selectedSeats[0].id_trip,
                        seat: selectedSeats[0].seats[index]
                    }
                } else {
                    passenger.selectedSeats[0] = {
                        id_ticket: selectedSeats[0].id_ticket,
                        id_trip: selectedSeats[0].id_trip,
                        seat: selectedSeats[0].seats[index]
                    }
                }
            })
        }
    },
    actions: {
        //Обновление данных пассажиров
        addPassenger(ctx, isAdult) {
            if (
                (ctx.state.passengers.filter(passenger => passenger.isAdult === true).length === 7 && isAdult) ||
                (ctx.state.passengers.filter(passenger => passenger.isAdult === false).length === 5 && !isAdult)
            ) {
                return false;
            } else {
                const id = ctx.state.passengers.length
                const passenger = {
                    id: id,
                    selectedSeats: [{
                        id_ticket: 0,
                        id_trip: 0,
                        seat: 0,
                    }, ],
                    secondName: '',
                    firstName: '',
                    middleName: '',
                    birthday: '',
                    gender: '',
                    citizenship: '643',
                    document: isAdult ? '0' : '4',
                    documentInfo: '',
                    isAdult: isAdult,
                    age: 0
                }
                ctx.commit('addPassenger', passenger)
                ctx.commit('updateDefaultsSeat', ctx.rootGetters.getPassengers)
            }
        },
        removePassenger(ctx, isAdult) {
            if (
                (ctx.state.passengers.filter(passenger => passenger.isAdult === true).length === 1 && isAdult) ||
                (ctx.state.passengers.filter(passenger => passenger.isAdult === false).length === 0 && !isAdult)
            ) {
                return false;
            }
            // TODO доделать удаление пользователя
            function getIndex(passenger) {
                if (passenger.isAdult === isAdult) {
                    return passenger
                }
            }
            const passenger = ctx.state.passengers.findIndex(getIndex)
            ctx.commit('removePassenger', passenger)
            ctx.commit('updateDefaultsSeat', ctx.rootGetters.getPassengers)
        },
        removePassengerById(ctx, id) {
            const modal = document.getElementById('btn-close' + id)
            modal.click()
            ctx.commit('removePassenger', id)
            ctx.commit('activeTab', id - 1)
        },
        setActiveTab(ctx, id) {
            ctx.commit('activeTab', id)
        },
        updateSecondName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateSecondName', [value, id]);
        },
        updateFirstName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateFirstName', [value, id]);
        },
        updateMiddleName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateMiddleName', [value, id]);
        },
        updateBirthday(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateBirthday', [value, id]);
        },
        updateGender(ctx, event) {
            const value = event.target.value;
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateGender', [value, id])
        },
        updateCitizenship(ctx, event) {
            const value = event.target.value;
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateCitizenship', [value, id])
        },
        updateDocument(ctx, event) {
            const value = event.target.value;
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateDocument', [value, id])
        },
        searchDocument(ctx, event) {
            const value = event.target.value;
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateDocumentSearchQuery', [value, id])
        },
        updateDocumentInfo(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateDocumentInfo', [value, id]);
        },
        toggleDropdown(ctx, event) {
            const input = event.target.id.replace(/[0-9]/g, '')
            const id = event.target.id.replace(/[^0-9]/g, "");
            let dropdown = ''
            if (input === 'citizenship') {
                dropdown = 'isShowCitizenship'
                ctx.commit('updateDropdown', [id, dropdown])
            }
            if (input === 'document') {
                dropdown = 'isShowDocument'
                ctx.commit('updateDropdown', [id, dropdown])
            }
            if (input === 'gender') {
                dropdown = 'isShowGender'
                ctx.commit('updateDropdown', [id, dropdown])
            }
        },
        fetchSelectedSeat(ctx) {
            let selectedSeat = ctx.getters.selectedSeat
            let selectedTrips = selectedSeat.filter(object => object.is_selected === true)
            ctx.commit('updateSelectedSeats', selectedTrips)
        },
        validateForm(fieldType, value, additional = true) {
            if (fieldType === 'secondName') {
                if (value === '') {
                    return 'заполните фамилию'
                }
            }
            if (fieldType === 'firstName') {
                if (value === '') {
                    return 'заполните имя'
                }
            }
            if (fieldType === 'middleName') {
                if (value === '') {
                    return 'заполните отчество'
                }
            }
            if (fieldType === 'citizenship') {
                if (value === '') {
                    return 'заполните гражданство'
                }
            }
            if (fieldType === 'gender') {
                if (value !=='0' && value !=='1') {
                    return 'Выбирите пол'
                }
            }
            if (fieldType === 'birthday') {
                if (value === '') {
                    return 'Укажиите дату рождения'
                }
                let today = new Date();
                let birthDate = new Date(value);
                let age = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                let d = today.getDay() - birthDate.getDay();

                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                if ( age === 0 ) {
                    m = 12 + m;
                    if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
                        m--;
                    }
                }
                if (age < 0) {
                    return 'Укажиите дату рождения корректно'
                }

                if(!additional && age>12){
                    return 'Детский билет до 12 лет'
                }
                if(additional && age>100){
                    return 'Вам больше 100 лет?'
                }


            }
            if (fieldType === 'documentInfo') {
                // Проверка паспорта РФ
                if(additional === '0'){
                    const regexpPassport = /^\d{10}$/
                    if (!regexpPassport.test(value)) {
                        return 'Серия и номер паспорта состоит из 10 цифр'
                    }
                }
                // Проверка загранпаспорта РФ
                if (additional === '2') {
                    const regexpPassport = /^\d{9}$/
                    if (!regexpPassport.test(value)) {
                        return 'Серия и номер паспорта состоит из 9 цифр'
                    }
                }
                //Проверка свидетельства о рождении и паспорт гражданина СССР
                if (additional === '4' || additional === '11'){
                    let regexpDoc = /^[IVXLCDM]{1,3}[А-Я^]{2}[0-9]{6}$/g
                    if (regexpDoc.test(value)) {
                        return false
                    }
                    else {
                        return 'Введите корректные данные (IIДН123456)'
                    }
                }
                //Проверка Военного билета военнослужащего или куранта военной образовательной организации
                if (additional === '1' || additional === '5' || additional === '8') {
                    let regexpDoc = /[А-Я^]{2}[0-9]{7}$/g
                    if (regexpDoc.test(value)) {
                        return false
                    }
                    else {
                        return 'Введите корректные данные (AC9876543)'
                    }
                }
            }

            return false
        },
        //Обновление данных покупателя
        updateSecondNameBuyer(ctx, event) {
            const value = event.target.value
            ctx.commit('updateSecondNameBuyer', value)
        },
        updateFirstNameBuyer(ctx, event) {
            const value = event.target.value
            ctx.commit('updateFirstNameBuyer', value)
        },
        updateEmailBuyer(ctx, event) {
            const value = event.target.value
            ctx.commit('updateEmailBuyer', value)
        },
        updateNumberBuyer(ctx, event) {
            const value = event.target.value
            ctx.commit('updateNumberBuyer', value)
        },
        //Загрузка с API
        async fetchDocumentType(ctx) {
            try {
                const response = await fetch(ctx.rootState.API_URL + '?command=type_doc')
                const documentTypes = await response.json();
                //Очистить строку от &nbsp;
                documentTypes.result.forEach(function(documentType, index) {
                    documentType.name = documentType.name.replaceAll('&nbsp;', ' ')
                });
                ctx.commit('setDocumentTypes', documentTypes.result)
            } catch (error) {
                console.log(error, 'ошибка тип документа')
            }
        },
        async fetchCitizenShip(ctx) {
            try {
                const response = await fetch(ctx.rootState.API_URL + '?command=nationality')
                const citizenShips = await response.json();
                ctx.commit('setCitizenShips', citizenShips.result)
            } catch (error) {
                console.log(error, 'ошибка гражданство')
            }
        },
    },
    getters: {
        getPassengers(state) {
            return state.passengers;
        },
        getChildrensCount(state) {
            return state.passengers.filter(passenger => passenger.isAdult === false).length;
        },
        getAdultsCount(state) {
            return state.passengers.filter(passenger => passenger.isAdult === true).length;
        },
        getDocumentsTypes(state) {
            return state.documentTypes
        },
        getCitizenshipByCode: (state) => (code) => {
            return [...state.citizenShips].filter(citizenShip => citizenShip.code === code)
        },
        getCitizenships(state) {
            return state.citizenShips
        },
        getDocumentTypes(state) {
            return state.documentTypes
        },
        getDocumentById: (state) => (id) => {
            return [...state.documentTypes].filter(documentType => documentType.name.toLowerCase().includes(state.passengers[id].documentSearchQuery.toLowerCase()))
        },
        getPassengerDocumentById: (state) => (id) => {
            return state.passengers[id].document
        },
        getIsLogin(state) {
            return state.isLogin
        },
        getBuyerInfo(state) {
            return state.buyerInfo
        },
        getHaveErrors(state) {
            return state.haveErrors
        },
        getAgePassengerById: (state) => (id) => {
            return state.passengers[id].age
        },
        getActiveTab(state) {
            return state.activeTab
        },
        getEmptyFieldsFormPassengers(state) {
            return state.passengers.find(passenger => {
                return !passenger.firstName || !passenger.secondName || !passenger.middleName || !passenger.birthday || !passenger.gender || !passenger.document || !passenger.citizenship || !passenger.documentInfo
            })
        },
        getEmptyFieldsFormBuyer(state) {
            return !state.buyerInfo.firstName || !state.buyerInfo.secondName || !state.buyerInfo.email || !state.buyerInfo.number
        }
    },
}