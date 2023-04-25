import { counter } from "@fortawesome/fontawesome-svg-core"
import axios from 'axios'

export default {
    state: {
        passengers: [{
            id: 0,
            selectedSeats: [{
                id_ticket: 0,
                id_trip: 0,
                seat: 0,
                source: null,
                id_from_point: null,
                id_to_point: null,
                id_from_city: null,
                id_to_city: null,
                date_trip: null,
                time_trip: null,
                flight_type: null,
            },],
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
            errors: {
                secondName: 'Заполните фамилию',
                firstName: 'Заполните имя',
                middleName: 'Заполните отчество',
                birthday: 'Заполните дату рождения',
                gender: 'Выберите пол',
                citizenship: '',
                document: '',
                documentInfo: 'Серия и номер паспорта состоит из 10 цифр'
            }
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
                secondName: 'Заполните фамилию',
                firstName: 'Заполните имя',
                email: 'Введите корректно почту name@mail.ru',
                number: 'Введите корретно номер +7 (___)-___-__-__'
            }
        },
        haveErrors: true,
        promoCode: {
            value: '',
            discount: '',
            promoType: '',
            orderOrPassenger: '',
            countPassenger: '',
            error: '',
        },
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
                        seat: selectedSeats[1].seats[index],
                        sourse: selectedSeats[1].source,
                        flight_type: selectedSeats[1].flight_type,
                        is_selected: selectedSeats[1].is_selected,
                        flight_type: selectedSeats[1].flight_type,
                        id_from_point: selectedSeats[1].id_from_point,
                        id_to_point: selectedSeats[1].id_to_point,
                        id_to_city: selectedSeats[1].id_to_city,
                        date_trip: selectedSeats[1].date_trip,
                        time_trip: selectedSeats[1].time_trip,
                    }
                    passenger.selectedSeats[1] = {
                        id_ticket: selectedSeats[0].id_ticket,
                        id_trip: selectedSeats[0].id_trip,
                        seat: selectedSeats[0].seats[index],
                        sourse: selectedSeats[0].source,
                        flight_type: selectedSeats[0].flight_type,
                        is_selected: selectedSeats[0].is_selected,
                        flight_type: selectedSeats[0].flight_type,
                        id_from_point: selectedSeats[0].id_from_point,
                        id_to_point: selectedSeats[0].id_to_point,
                        id_to_city: selectedSeats[0].id_to_city,
                        date_trip: selectedSeats[0].date_trip,
                        time_trip: selectedSeats[0].time_trip,
                    }
                } 
                else {
                    passenger.selectedSeats[0] = {
                        id_ticket: selectedSeats[0].id_ticket,
                        id_trip: selectedSeats[0].id_trip,
                        seat: selectedSeats[0].seats[index],
                        sourse: selectedSeats[0].source,
                        flight_type: selectedSeats[0].flight_type,
                        is_selected: selectedSeats[0].is_selected,
                        flight_type: selectedSeats[0].flight_type,
                        id_from_point: selectedSeats[0].id_from_point,
                        id_to_point: selectedSeats[0].id_to_point,
                        id_to_city: selectedSeats[0].id_to_city,
                        date_trip: selectedSeats[0].date_trip,
                        time_trip: selectedSeats[0].time_trip,
                    }
                }
            })
        },
        updateValidateError(state, [id, fieldType, value]) {
            state.passengers[id].errors[fieldType] = value
        },
        updateValidateErrorBuyer(state, [fieldType, value]) {
            state.buyerInfo.errors[fieldType] = value
        },
        updatePromocodeValue(state, promoCodeValue) {
            state.promoCode.value = promoCodeValue
        },
        updatePromocodeError(state, error) {
            state.promoCode.error = error
        },
        updatePromocodeResult(state, result) {
            state.promoCode.discount = result.discount
            state.promoCode.promoType = result.promoType
            state.promoCode.orderOrPassenger = result.orderOrPassenger
            state.promoCode.countPassenger = result.countPassenger
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
                        sourse: null,
                        flight_type: null,
                    },],
                    secondName: '',
                    firstName: '',
                    middleName: '',
                    birthday: '',
                    gender: '',
                    citizenship: '643',
                    document: isAdult ? '0' : '4',
                    documentInfo: '',
                    isAdult: isAdult,
                    age: 0,
                    errors: {
                        secondName: 'Заполните фамилию',
                        firstName: 'Заполните имя',
                        middleName: 'Заполните отчество',
                        birthday: 'Заполните дату рождения',
                        gender: 'Выберите пол',
                        citizenship: '',
                        document: '',
                        documentInfo: 'Серия и номер паспорта состоит из 10 цифр'
                    }
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
            ctx.commit('removeSeatById', id)
            ctx.commit('activeTab', id - 1)
        },
        setActiveTab(ctx, id) {
            ctx.commit('activeTab', id)
        },
        addRussianNumberPrefix(ctx) {
            let currentNumber = ctx.state.buyerInfo.number
            if (!currentNumber) {
                ctx.commit('updateHaveErrors', true)
                ctx.commit('updateNumberBuyer', '+7')
            }
        },
        async applyPromocode(ctx) {
            let value = ctx.state.promoCode.value
            if (!value) {
                ctx.commit('updatePromocodeError', 'Заполните промокод')
                return false
            }
            const config = {
                method: 'post',
                url: 'https://api.evrotrans.net/APIet/promo.php',
                data: 'promo=' + value
            }
            await axios.request(config).then((response) => {
                console.log(response)
                let error = response.data.Error
                let result = response.data.Result
                if (error === '1') {
                    ctx.commit('updatePromocodeError', response.data.Error_description)
                }
                if (error === '0') {
                    ctx.commit('updatePromocodeError', '')
                    ctx.commit('updatePromocodeResult', result)
                }
            })
                .catch((error) => {
                    console.log(error)
                })
        },
        validatePromocode(ctx, event) {
            let value = event.target.value
            if (value === '') {
                ctx.commit('updatePromocodeError', 'Заполните промокод')
                ctx.commit('updatePromocodeValue', '')
            }
            if (value) {
                ctx.commit('updatePromocodeValue', value)
                ctx.commit('updatePromocodeError', '')
            }
        },
        validateFormBuyer(ctx, [fieldType, event]) {
            const value = event.target.value;
            if (fieldType === 'secondName') {
                if (value === '') {
                    ctx.commit('updateSecondNameBuyer', '')
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateErrorBuyer', [fieldType, 'Заполните фамилию'])
                }
                else {
                    ctx.commit('updateSecondNameBuyer', value)
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateErrorBuyer', [fieldType, ''])
                }
            }
            if (fieldType === 'firstName') {
                if (value === '') {
                    ctx.commit('updateFirstNameBuyer', '')
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateErrorBuyer', [fieldType, 'Заполните имя'])
                }
                else {
                    ctx.commit('updateFirstNameBuyer', value)
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateErrorBuyer', [fieldType, ''])
                }
            }
            if (fieldType === 'email') {
                let regexpEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if (regexpEmail.test(value)) {
                    ctx.commit('updateEmailBuyer', value)
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateErrorBuyer', [fieldType, ''])
                }
                else {
                    ctx.commit('updateEmailBuyer', '')
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateErrorBuyer', [fieldType, 'Введите корректно почту name@mail.ru'])
                }
            }
            if (fieldType === 'number') {
                let regexpNumber = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/
                if (regexpNumber.test(value)) {
                    ctx.commit('updateNumberBuyer', value)
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateErrorBuyer', [fieldType, ''])
                }
                else {
                    ctx.commit('updateNumberBuyer', value)
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateErrorBuyer', [fieldType, 'Введите корретно номер +7 (___)-___-__-__ '])
                }
            }
        },
        validateForm(ctx, [id, fieldType, event, additional = true]) {
            const value = event.target.value
            //проверка фамилии
            if (fieldType === 'secondName') {
                if (value === '') {
                    ctx.commit('updateSecondName', ['', id])
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateError', [id, fieldType, 'Заполните фамилию'])
                }
                else {
                    ctx.commit('updateSecondName', [value, id])
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateError', [id, fieldType, ''])
                }
            }
            //проверка имени
            if (fieldType === 'firstName') {
                if (value === '') {
                    ctx.commit('updateFirstName', ['', id])
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateError', [id, fieldType, 'Заполните имя'])
                }
                else {
                    ctx.commit('updateFirstName', [value, id])
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateError', [id, fieldType, ''])
                }
            }
            //проверка отчества
            if (fieldType === 'middleName') {
                if (value === '') {
                    ctx.commit('updateMiddleName', ['', id])
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateError', [id, fieldType, 'Заполните отчество'])
                }
                else {
                    ctx.commit('updateMiddleName', [value, id])
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateError', [id, fieldType, ''])
                }
            }
            //проверка дня рождения
            if (fieldType === 'birthday') {
                if (value === '') {
                    ctx.commit('updateBirthday', ['', id])
                    ctx.commit('updateValidateError', [id, fieldType, 'Заполните дату рождения'])
                    return false
                }
                let today = new Date();
                let birthDate = new Date(value);
                let age = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                let d = today.getDay() - birthDate.getDay();

                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                if (age === 0) {
                    m = 12 + m;
                    if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
                        m--;
                    }
                }
                if (age < 0) {
                    ctx.commit('updateBirthday', [value, id])
                    ctx.commit('updateValidateError', [id, fieldType, 'Укажиите дату рождения корректно'])
                    return false
                }

                if (!additional && age > 12) {
                    ctx.commit('updateBirthday', [value, id])
                    ctx.commit('updateValidateError', [id, fieldType, 'Детский билет до 12 лет'])
                    return false
                }
                if (additional && age > 100) {
                    ctx.commit('updateBirthday', [value, id])
                    ctx.commit('updateValidateError', [id, fieldType, 'Вам больше 100 лет?'])
                    return false
                }
                ctx.commit('updateBirthday', [value, id])
                ctx.commit('updateHaveErrors', false)
                ctx.commit('updateValidateError', [id, fieldType, ''])
            }
            //проверка пола
            if (fieldType === 'gender') {
                if (value !== '0' && value !== '1') {
                    ctx.commit('updateGender', ['', id])
                    ctx.commit('updateValidateError', [id, fieldType, 'Выберите пол'])
                }
                else {
                    ctx.commit('updateGender', [value, id])
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateError', [id, fieldType, ''])
                }
            }
            //проверка гражданства
            if (fieldType === 'citizenship') {
                if (value === '') {
                    ctx.commit('updateCitizenship', ['', id])
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateError', [id, fieldType, 'Заполните гражданство'])
                }
                else {
                    ctx.commit('updateCitizenship', [value, id])
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateError', [id, fieldType, ''])
                }
            }
            // проверка типа документа
            if (fieldType === 'document') {
                let documentBefore = ctx.state.passengers[id].document
                let documentInfoBefore = ctx.state.passengers[id].documentInfo
                if (documentBefore !== value) {
                    ctx.commit('updateDocumentInfo', [documentInfoBefore, id])
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateError', [id, 'documentInfo', 'Укажите новые данные'])
                }
                if (value === '') {
                    ctx.commit('updateDocument', ['', id])
                    ctx.commit('updateHaveErrors', true)
                    ctx.commit('updateValidateError', [id, fieldType, 'Заполните документ'])
                }
                else {
                    ctx.commit('updateDocument', [value, id])
                    ctx.commit('updateValidateError', [id, fieldType, ''])
                }
            }
            // проверка серии и номмера документа
            if (fieldType === 'documentInfo') {
                // Проверка паспорта РФ
                if (additional === '0') {
                    const regexpPassport = /^\d{10}$/
                    if (!regexpPassport.test(value)) {
                        ctx.commit('updateDocumentInfo', [value, id])
                        ctx.commit('updateHaveErrors', true)
                        ctx.commit('updateValidateError', [id, fieldType, 'Серия и номер паспорта состоит из 10 цифр'])
                    }
                    else {
                        ctx.commit('updateDocumentInfo', [value, id])
                        ctx.commit('updateHaveErrors', false)
                        ctx.commit('updateValidateError', [id, fieldType, ''])
                    }
                }
                // Проверка загранпаспорта РФ
                if (additional === '2') {
                    const regexpPassport = /^\d{9}$/
                    if (!regexpPassport.test(value)) {
                        ctx.commit('updateDocumentInfo', [value, id])
                        ctx.commit('updateHaveErrors', true)
                        ctx.commit('updateValidateError', [id, fieldType, 'Серия и номер паспорта состоит из 9 цифр'])
                    }
                    else {
                        ctx.commit('updateDocumentInfo', [value, id])
                        ctx.commit('updateHaveErrors', false)
                        ctx.commit('updateValidateError', [id, fieldType, ''])
                    }
                }
                //Проверка свидетельства о рождении
                if (additional === '4' || additional === '11') {
                    let regexpDoc = /^[IVXLCDM]{1,3}[А-Я^]{2}[0-9]{6}$/g
                    if (regexpDoc.test(value)) {
                        ctx.commit('updateDocumentInfo', [value, id])
                        ctx.commit('updateHaveErrors', false)
                        ctx.commit('updateValidateError', [id, fieldType, ''])
                    }
                    else {
                        ctx.commit('updateDocumentInfo', [value, id])
                        ctx.commit('updateHaveErrors', true)
                        ctx.commit('updateValidateError', [id, fieldType, 'Введите корректные данные (IIДН123456)'])
                    }
                }
                //Проверка Военного билета военнослужащего или курсанта военной образовательной организации
                if (additional === '1' || additional === '5' || additional === '8') {
                    let regexpDoc = /[А-Я^]{2}[0-9]{7}$/g
                    if (regexpDoc.test(value)) {
                        ctx.commit('updateDocumentInfo', [value, id])
                        ctx.commit('updateHaveErrors', false)
                        ctx.commit('updateValidateError', [id, fieldType, ''])
                    }
                    else {
                        ctx.commit('updateHaveErrors', true)
                        ctx.commit('updateValidateError', [id, fieldType, 'Введите корректные данные (АС9876543)'])
                    }
                }
                //прочие документы
                if (additional === '3' || additional === '6' || additional === '7' || additional === '9' || additional === '12' || additional === '10' || additional === '13' || additional === '14' || additional === '15') {
                    ctx.commit('updateDocumentInfo', [value, id])
                    ctx.commit('updateHaveErrors', false)
                    ctx.commit('updateValidateError', [id, fieldType, ''])
                }
            }

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
                documentTypes.result.forEach(function (documentType, index) {
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
        },
        getPromoCode(state) {
            return state.promoCode
        }
    },
}