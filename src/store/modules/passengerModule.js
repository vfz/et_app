import { counter } from "@fortawesome/fontawesome-svg-core"

export default {
    state: {
        passengers: [{
            id: 0,
            selectedSeats: [
                {
                    id_ticket: 0,
                    id_trip: 0,
                    seat: 0
                },
            ],
            secondName: '',
            firstName: '',
            middleName: '',
            birthday: '',
            gender: '',
            genderSearchQuery: '',
            citizenship: 'РОССИЯ',
            citizenShipSearchQuery: 'РОССИЯ',
            document: '',
            documentSearchQuery: '',
            documentInfo: '',
            dropdowns: {
                isShowCitizenship: false,
                isShowGender: false,
                isShowDocument: false,
            },
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
            errors: {
                secondName: '',
                firstName: '',
                email: '',
                number: ''
            }
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
        updateDocumentSearchQuery(state, [value, id]) {
            state.passengers[id].documentSearchQuery = value
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
                }
                else {
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
                    selectedSeats: [
                        {
                            id_ticket: 0,
                            id_trip: 0,
                            seat: 0,
                        },
                    ],
                    secondName: '',
                    firstName: '',
                    middleName: '',
                    birthday: '',
                    gender: '',
                    genderSearchQuery: '',
                    citizenship: 'РОССИЯ',
                    citizenShipSearchQuery: 'РОССИЯ',
                    document: '',
                    documentSearchQuery: '',
                    documentInfo: '',
                    dropdowns: {
                        isShowCitizenship: false,
                        isShowGender: false,
                        isShowDocument: false,
                    },
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
            ctx.commit('activeTab', id-1)
        },
        setActiveTab(ctx,id) {
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
        updateGender(ctx, [value, id]) {
            ctx.commit('updateGender', [value, id])
            ctx.commit('updateGenderSearchQuery', [value, id])
        },
        searchGender(ctx, event) {
            const value = event.target.value;
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateGenderSearchQuery', [value, id])
        },
        updateCitizenship(ctx, [value, id]) {
            ctx.commit('updateCitizenship', [value, id])
            ctx.commit('updateCitizenshipSearchQuery', [value, id])
        },
        searchCitizenship(ctx, event) {
            const value = event.target.value;
            const id = event.target.id.replace(/[^0-9]/g, "");
            ctx.commit('updateCitizenshipSearchQuery', [value, id])
        },
        updateDocument(ctx, [value, id]) {
            ctx.commit('updateDocument', [value, id])
            ctx.commit('updateDocumentSearchQuery', [value, id])
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
        //Валидация для пассажиров
        validateCitizenship(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g, "");
            const formField = 'citizenship'
            if (value === '') {
                ctx.commit('updateHaveErrors', true)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните гражданство', formField]);
            }
            if (value !== '') {
                ctx.commit('updateHaveErrors', false)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            }
        },
        validateGender(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g, "");
            const formField = 'gender'
            if (value === '') {
                ctx.commit('updateHaveErrors', true)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните пол', formField]);
            }
            if (value !== '') {
                ctx.commit('updateHaveErrors', false)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            }
        },
        validateDocument(ctx, [value, id]) {
            const formField = 'document'
            let agePassenger = ctx.getters.getAgePassengerById(id)
            let isAdultPassenger = ctx.state.passengers[id].isAdult
            if (!agePassenger) {
                ctx.commit('updateHaveErrors', true)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'Укажите дату рождения пассажира', formField]);
                ctx.commit('updateDocument', ['', id])
                ctx.commit('updateDocumentSearchQuery', ['', id])
                return false
            }
            if (agePassenger < 14 && !isAdultPassenger) {
                if (value !== 'Свидетельство о рождении' && value !== 'Заграничный паспорт гражданина Российской Федерации' && value !== 'Заграничный паспорт иностранного гражданина') {
                    ctx.commit('updateHaveErrors', true)
                    ///аргументы (mutation, [id, errorText, formField ])
                    ctx.commit('updateError', [id, 'Если ребенку меньше 14 лет, укажите свидетельство о рождении, или заграничный паспорт гражданина Российской Федерации, или заграничный паспорт иностранного гражданина ', formField]);
                    return false
                }
            }
            if (agePassenger < 14 && !isAdultPassenger && value === '') {
                ctx.commit('updateHaveErrors', true)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните документ', formField]);
                return false
            }
            if (agePassenger > 14 && !value) {
                ctx.commit('updateHaveErrors', true)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните документ', formField]);
                return false
            }
            if (agePassenger > 14 && value === 'Свидетельство о рождении') {
                ctx.commit('updateHaveErrors', true)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'Вам больше 14. Укажите паспорт или другой иной документ', formField]);
                return false
            }
            ctx.commit('updateHaveErrors', false)
                ///аргументы (mutation, [id, errorText, formField ])fi
            ctx.commit('updateError', [id, '', formField]);
        },
        validateBirthday(ctx, event) {
            let value = event.target.value.split('-');
            // value = String(value[2]+value[1]+value[0]);
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g, "");
            const formField = 'birthday';
            const currentDate = new Date(); //текущая дата
            const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()); //текущая дата без времени
            const day = value[2]; //день рождения
            const month = value[1]; // месяц рождения
            const year = value[0] //год рождения
            if (value.length > 1 && (day.length === 2 || month.length === 2 || year.length === 4)) {
                ctx.commit('updateHaveErrors', false)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            } else {
                ctx.commit('updateHaveErrors', true)
                    ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните дату рождения в формате 01.01.2001', formField]);
            }
            const birthDay = new Date(year, month, day); //день рождения в формате date
            const birthDayCurrent = new Date(currentDateWithoutTime.getFullYear(), birthDay.getMonth(), birthDay.getDate()) //день рождения в этом году
            let age = currentDateWithoutTime.getFullYear() - birthDay.getFullYear()

            if (currentDateWithoutTime < birthDayCurrent) {
                age = age + 1
            }
            ctx.commit('updateAgePassenger', [age, id])
            let document = ctx.getters.getDocumentById(id)

            //валидация для ребенка
            if (ctx.state.passengers[id].isAdult === false) {
                if (age > 18) {
                    ctx.commit('updateHaveErrors', true)
                        ///аргументы (mutation, [id, errorText, formField ])
                    ctx.commit('updateError', [id, 'Пассажир не является ребенком', formField])
                    return false
                }
                if (age < 14) {
                    if (document === 'Паспорт гражданина Российской Федерации') {
                        ctx.commit('updateHaveErrors', true)
                            ///аргументы (mutation, [id, errorText, formField ])
                        ctx.commit('updateError', [id, 'До 14 лет, билеты оформляются по свидетельству о рождении', formField])
                    }
                    if (document === 'Свидетельство о рождении') {
                        ctx.commit('updateHaveErrors', false)
                            ///аргументы (mutation, [id, errorText, formField ])
                        ctx.commit('updateError', [id, '', formField])
                    }
                    if (!document) {
                        ctx.commit('updateHaveErrors', true)
                            ///аргументы (mutation, [id, errorText, formField ])
                        ctx.commit('updateError', [id, '', formField])
                    }
                    ctx.commit('updateHaveErrors', false)
                        ///аргументы (mutation, [id, errorText, formField ])
                    ctx.commit('updateError', [id, '', formField])
                }
                if (age < 0) {
                    ctx.commit('updateHaveErrors', true)
                        ///аргументы (mutation, [id, errorText, formField ])
                    ctx.commit('updateError', [id, 'Укажите корректно дату рождения', formField])
                    return false
                }
            }
            //валидация для взрослого
            if (ctx.state.passengers[id].isAdult === true) {
                if (age < 18 && age > 0) {
                    ctx.commit('updateHaveErrors', true)
                        ///аргументы (mutation, [id, errorText, formField ])
                    ctx.commit('updateError', [id, 'Данный пассажир является ребенком', formField])
                    return false
                }
                if (age < 0) {
                    ctx.commit('updateHaveErrors', true)
                        ///аргументы (mutation, [id, errorText, formField ])
                    ctx.commit('updateError', [id, 'Укажите корректно дату рождения', formField])
                    return false
                }
                if (age > 125) {
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateError', [id, 'Некорректная дата, вам больше 125 лет?', formField])
                }
            }
        },
        validateDocumentInfo(ctx, event) {
            //Исключить пробелы в значении
            const value = event.target.value.replace(/\s/g, '');
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g, "");
            const formField = 'documentInfo';
            let documentType = ctx.getters.getPassengerDocumentById(id)
            const regexpPassport = /^\d+$/
            if (value === '') {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateError', [id, 'заполните серию и номер документа', formField]);
            }
            if (!documentType) {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateError', [id, 'Выберите документ', formField]);
                ctx.commit('updateDocumentInfo', ['', id])
                return false
            }
            else {
                ctx.commit('updateHaveErrors', false)
                ctx.commit('updateError', [id, '', formField])
            }
            //Проверка паспорта РФ
            if (documentType === 'Паспорт гражданина Российской Федерации' && value.length > 10) {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
                return false
            }
            if (documentType === 'Паспорт гражданина Российской Федерации' && value.length < 10) {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
            }
            else {
                ctx.commit('updateHaveErrors', false)
                ctx.commit('updateError', [id, '', formField])
            }
            if (documentType === 'Паспорт гражданина Российской Федерации' && value.length === 10) {
                if (value.match(regexpPassport) !== null) {
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateError', [id, '', formField])
                }
                else {
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
                }
            }
            //Проверка паспорта Загранпаспорта
            if (documentType === 'Заграничный паспорт гражданина Российской Федерации' && value.length > 9) {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
                return false
            }
            if (documentType === 'Заграничный паспорт гражданина Российской Федерации' && value.length < 9) {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
            }
            if (documentType === 'Заграничный паспорт гражданина Российской Федерации' && value.length === 9) {
                if (value.match(regexpPassport) !== null) {
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateError', [id, '', formField])
                }
                else {
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
                }
            }
            //Проверка военного билета
            if (documentType === 'Военный билет военнослужащего срочной службы' || documentType === 'Удостоверение личности военнослужащего действительной службы') {
                let regexpSerial = /[А-Я]/g;
                let regexpNumber = /[0-9]/g;
                if (regexpNumber.test(value) && regexpSerial.test(value) && value.match(regexpSerial).length === 2 && value.match(regexpNumber).length === 7 && value.length === 9) {
                    ctx.commit('updateError', [id, '', formField])
                }
                else {
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateError', [id, documentType + ' указан неверно', formField])
                }
            }
            //Проверка свидетельства о рождении и //Проверка паспорта гражданина СССР
            if (documentType === 'Свидетельство о рождении' || documentType === 'Паспорт гражданина СССР') {
                let regexpNumber = /[0-9]/g;
                let regexpSerial = /[А-Я]/g;
                let regexpRomeNumber = /[IVXLCDM]/g
                if (regexpNumber.test(value) && regexpSerial.test(value) && value.match(regexpSerial).length === 2  && regexpRomeNumber.test(value) && value.match(regexpNumber).length === 6) {
                    ctx.commit('updateError', [id, '', formField])
                }
                else {
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateError', [id, documentType + 'указано неверно', formField])
                }
            }
        },
        //Валидация для покупателя
        validateSecondNameBuyer(ctx, event) {
            const value = event.target.value;
            const formField = 'secondName'
            if (value === '') {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateErrorBuyer', ['заполните фамилию', formField]);
            }
            if (value !== '') {
                ctx.commit('updateHaveErrors', false)
                ctx.commit('updateErrorBuyer', ['', formField])
            }
        },
        validateFirstNameBuyer(ctx, event) {
            const value = event.target.value;
            const formField = 'firstName'
            if (value === '') {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateErrorBuyer', ['заполните имя', formField]);
            }
            if (value !== '') {
                ctx.commit('updateHaveErrors', false)
                ctx.commit('updateErrorBuyer', ['', formField])
            }
        },
        validateEmailBuyer(ctx, event) {
            const value = event.target.value;
            const formField = 'email'
            if (value === '') {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateErrorBuyer', ['заполните почту', formField]);
            }
            if (value !== '') {
                ctx.commit('updateHaveErrors', false)
                ctx.commit('updateErrorBuyer', ['', formField])
            }
            if (!value.includes('@')) {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateErrorBuyer', ['Почта указана неверно', formField]);
            }
        },
        validateNumberBuyer(ctx, event) {
            const value = event.target.value;
            const formField = 'number'
            const regex = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/
            if (value === '') {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateErrorBuyer', ['заполните номер', formField]);
            }
            if (!regex.test(value)) {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateErrorBuyer', ['Неверно заполнен номер', formField])
            } else {
                ctx.commit('updateHaveErrors', false)
                ctx.commit('updateErrorBuyer', ['', formField])
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
        getCitizenshipsById: (state) => (id) => {
            return [...state.citizenShips].filter(citizenShip => citizenShip.name.toLowerCase().includes(state.passengers[id].citizenShipSearchQuery.toLowerCase()))
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
                return !passenger.firstName || !passenger.secondName || !passenger.middleName || !passenger.birthday || !passenger.gender ||  !passenger.document  || !passenger.citizenship || !passenger.documentInfo
            })
        },
        getEmptyFieldsFormBuyer(state) {
            return !state.buyerInfo.firstName || !state.buyerInfo.secondName || !state.buyerInfo.email || !state.buyerInfo.number
        }
    },
}