export const passengerModule = {
    state: () => ({
        passengers: [
            {
                id: 0,
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
                errors: {
                    secondName: '',
                    firstName: '',
                    middleName: '',
                    birthday: '',
                    gender: '',
                    citizenship: '',
                    document: '',
                    documentInfo: '',
                },
                dropdowns: {
                  isShowCitizenship: false,
                  isShowGender: false,
                  isShowDocument: false,
                },
                isAdult: true,
            }
        ],
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
        promoCode: '',
    }),
    mutations: {
        addPassenger(state, passenger) {
            state.passengers.push(passenger)
        },
        removePassenger(state, passenger) {
            state.passengers.splice(passenger, 1)
        },
        changePassengerId(state) {
            state.passengers.forEach(function (passenger, index){
                passenger.id = index
            })
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
        }
    },
    actions: {
        //Обновление данных пассажиров
        addPassenger(ctx, isAdult) {
            const adultCount = ctx.getters.adults;
            const childrenCount = ctx.getters.childrens;
            //прибавляется единица, так как по умолчанию выбран один человек
            const id = adultCount+childrenCount-1
            const passenger = {
                id: id,
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
                errors: {
                    secondName: '',
                    firstName: '',
                    middleName: '',
                    birthday: '',
                    gender: '',
                    citizenship: '',
                    document: '',
                    documentInfo: '',
                },
                dropdowns: {
                    isShowCitizenship: false,
                    isShowGender: false,
                    isShowDocument: false,
                },
                isAdult: isAdult
            }
            ctx.commit('addPassenger', passenger)
            ctx.commit('changePassengerId', passenger)
        },
        removePassenger(ctx, isAdult) {
            // TODO доделать удаление пользователя
            function getIndex(passenger) {
                if (passenger.isAdult === isAdult) {
                    return passenger
                }
            }
            const passenger = ctx.state.passengers.findIndex(getIndex)
            ctx.commit('removePassenger', passenger)
        },
        removePassengerById(ctx, id) {
            function getIndex(passenger) {
                if (passenger.id === id) {
                    return passenger
                }
            }
            const passenger = ctx.state.passengers.findIndex(getIndex)
            const modal = document.getElementById('btn-close'+id)
            modal.click()
            ctx.commit('removePassenger', passenger)
        },
        updateSecondName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateSecondName', [value, id]);
        },
        updateFirstName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateFirstName', [value, id]);
        },
        updateMiddleName(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateMiddleName', [value, id]);
        },
        updateBirthday(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateBirthday', [value, id]);
        },
        updateGender(ctx,[value, id]) {
            ctx.commit('updateGender', [value, id])
            ctx.commit('updateGenderSearchQuery', [value, id])
        },
        searchGender(ctx, event) {
            const value = event.target.value;
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateGenderSearchQuery', [value, id])
        },
        updateCitizenship(ctx, [value, id]) {
            ctx.commit('updateCitizenship', [value, id])
            ctx.commit('updateCitizenshipSearchQuery', [value, id])
        },
        searchCitizenship(ctx,event) {
            const value = event.target.value;
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateCitizenshipSearchQuery', [value, id])
        },
        updateDocument(ctx,[value,id]) {
            ctx.commit('updateDocument', [value, id])
            ctx.commit('updateDocumentSearchQuery', [value, id])
        },
        searchDocument(ctx, event) {
            const value = event.target.value;
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateDocumentSearchQuery', [value, id])
        },
        updateDocumentInfo(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateDocumentInfo', [value, id]);
        },
        toggleDropdown(ctx, event) {
            const input = event.target.id.replace(/[0-9]/g, '')
            const id = event.target.id.replace(/[^0-9]/g,"");
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
        updateNumberBuyer(ctx,event) {
            const value = event.target.value
            ctx.commit('updateNumberBuyer', value)
        },
        //Загрузка с API
        async fetchDocumentType(ctx) {
            try {
                const response = await fetch(ctx.rootState.API_URL+ '?command=type_doc')
                const documentTypes = await response.json();
                //Очистить строку от &nbsp;
                documentTypes.result.forEach(function (documentType, index) {
                    documentType.name = documentType.name.replaceAll('&nbsp;', ' ')
                });
                ctx.commit('setDocumentTypes', documentTypes.result)
            }
            catch (error) {
                console.log(error, 'ошибка тип документа')
            }
        },
        async fetchCitizenShip (ctx) {
            try {
                const response = await fetch(ctx.rootState.API_URL+ '?command=nationality')
                const citizenShips = await response.json();
                ctx.commit('setCitizenShips', citizenShips.result)
            }
            catch (error) {
                console.log(error, 'ошибка гражданство')
            }
        },
        //Валидация для пассажиров
        validateSecondName(ctx, event){
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            const formField = 'secondName'
            if (value === '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните фамилию', formField]);
            }
            if (value !== '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            }
        },
        validateFirstName(ctx, event){
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            const formField = 'firstName'
            if (value === '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните имя', formField]);
            }
            if (value !== '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            }
        },
        validateMiddleName(ctx, event){
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            const formField = 'middleName'
            if (value === '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните отчество', formField]);
            }
            if (value !== '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            }
        },
        validateCitizenship(ctx,event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            const formField = 'citizenship'
            if (value === '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните гражданство', formField]);
            }
            if (value !== '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            }
        },
        validateGender(ctx,event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            const formField = 'gender'
            if (value === '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните пол', formField]);
            }
            if (value !== '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            }
        },
        validateDocument(ctx,event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            const formField = 'document'
            if (value === '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните документ', formField]);
            }
            if (value !== '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            }
        },
        validateBirthday(ctx, event){
            // TODO доделать валидацию на невозможность выбрать несуществующую дату
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            const formField = 'birthday';
            if (value === '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните дату рождения', formField]);
            }
            if (value.length > 10 && value !== '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'дата рождения указана неверно', formField]);
            }
            else if (value.length <= 10 && value !== '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, '', formField])
            }
            if (value.length === 10) {
                const currentDate = new Date(); //текущая дата
                const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()); //текущая дата без времени
                const day = value.substr(0,2); //день рождения
                const month = value.substr(3,2) - 1; // месяц рождения
                const year = value.substr(6,10); //год рождения
                const birthDay = new Date(year,month,day); //день рождения в формате date
                const birthDayCurrent = new Date(currentDateWithoutTime.getFullYear(),birthDay.getMonth(), birthDay.getDate()) //день рождения в этом году
                let age = currentDateWithoutTime.getFullYear() - birthDay.getFullYear()

                const document = ctx.state.passengers[id].document
                if (currentDateWithoutTime < birthDayCurrent) {
                    age = age-1
                }
                if (age < 14 && document === 'Паспорт гражданина Российской Федерации') {
                    ///аргументы (mutation, [id, errorText, formField ])
                    ctx.commit('updateError', [id, 'До 14 лет, билеты оформляются по свидетельству о рождении', formField])
                }
                if (age > 125) {
                    ctx.commit('updateError', [id, 'Некорректная дата, вам больше 125 лет?', formField])
                }
            }
        },
        validateDocumentInfo(ctx, [event, documentType]) {
            //Исключить пробелы в значении
            const value = event.target.value.replace(/\s/g,'');
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            const formField = 'documentInfo';
            if (value === '') {
                ctx.commit('updateError', [id, 'заполните серию и номер документа', formField]);
            }
            //Проверка паспорта РФ
            if (documentType === 'Паспорт гражданина Российской Федерации' && value.length > 10) {
                ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
            }
            else if (documentType === 'Паспорт гражданина Российской Федерации' && value.length < 10) {
                ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
            }
            else if (documentType === 'Паспорт гражданина Российской Федерации' && value.length === 10) {
                ctx.commit('updateError', [id, '', formField])
            }
            //Проверка паспорта Загранпаспорта
            if (documentType === 'Заграничный паспорт гражданина Российской Федерации' && value.length > 9) {
                ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
            }
            else if (documentType === 'Заграничный паспорт гражданина Российской Федерации' && value.length < 9) {
                ctx.commit('updateError', [id, 'Серия и номер паспорта указаны некорректно', formField])
            }
            else if (documentType === 'Заграничный паспорт гражданина Российской Федерации' && value.length === 9 ) {
                ctx.commit('updateError', [id, '', formField])
            }
            //Проверка военного билета
            if (documentType === 'Военный билет военнослужащего срочной службы' || documentType === 'Удостоверение личности военнослужащего действительной службы') {
                let regexp = /[а-яё]/i;
                let serial = value.substr(0, 2)
                let number = value.substr(2, 9)
                if (regexp.test(serial)) {
                    ctx.commit('updateError', [id, '', formField])
                    if (number.length > 7) {
                        ctx.commit('updateError', [id, 'Номер военного билета указан неверно', formField])
                    }
                    else if (number.length < 7) {
                        ctx.commit('updateError', [id, 'Номер военного билета указан неверно', formField])
                    }
                    else if (number.length === 7) {
                        ctx.commit('updateError', [id, '', formField])
                    }
                }
                else {
                    ctx.commit('updateError', [id, 'Серия военного билета указана неверно', formField])
                }
            }
            //Проверка свидетельства о рождении
            if (documentType === 'Свидетельство о рождении') {
                let regexpNumber = /[0-9]/;
                let regexpSerial = /[а-яё]/i;
                let regexpRomeNumber = /[IVXLCDM]/
                if (!regexpNumber.test(value)) {
                    ctx.commit('updateError', [id, 'В свидетельстве о рождении неверно указан номер', formField])
                }
                else if (!regexpSerial.test(value)) {
                    ctx.commit('updateError', [id, 'В свидетельстве о рождении неверно указана серия', formField])
                }
                else if (!regexpRomeNumber.test(value)) {
                    ctx.commit('updateError', [id, 'Римские цифры в номере свидетельства о рождении указаны неверно', formField])
                }
                else {
                    ctx.commit('updateError', [id, '', formField])
                }
            }
            //Проверка паспорта гражданина СССР
            if (documentType === 'Паспорт гражданина СССР') {
                let regexpNumber = /[0-9]/;
                let regexpSerial = /[а-яё]/i;
                let regexpRomeNumber = /[IVXLCDM]/
                if (!regexpNumber.test(value)) {
                    ctx.commit('updateError', [id, 'В паспорте гражданина СССР неверно указан номер', formField])
                }
                else if (!regexpSerial.test(value)) {
                    ctx.commit('updateError', [id, 'В паспорте гражданина СССР неверно указана серия', formField])
                }
                else if (!regexpRomeNumber.test(value)) {
                    ctx.commit('updateError', [id, 'Римские цифры в номере паспорта гражданина СССР указаны неверно', formField])
                }
                else {
                    ctx.commit('updateError', [id, '', formField])
                }
            }
        },
        //Валидация для покупателя
        validateSecondNameBuyer (ctx, event) {
            const value = event.target.value;
            const formField = 'secondName'
            if (value === '') {
                ctx.commit('updateErrorBuyer', ['заполните фамилию', formField]);
            }
            if (value !== '') {
                ctx.commit('updateErrorBuyer', ['', formField])
            }
        },
        validateFirstNameBuyer (ctx, event) {
            const value = event.target.value;
            const formField = 'firstName'
            if (value === '') {
                ctx.commit('updateErrorBuyer', ['заполните имя', formField]);
            }
            if (value !== '') {
                ctx.commit('updateErrorBuyer', ['', formField])
            }
        },
        validateEmailBuyer(ctx, event) {
            const value = event.target.value;
            const formField = 'email'
            if (value === '') {
                ctx.commit('updateErrorBuyer', ['заполните почту', formField]);
            }
            if (value !== '') {
                ctx.commit('updateErrorBuyer', ['', formField])
            }
        },
        validateNumberBuyer(ctx, event) {
            const value = event.target.value;
            const formField = 'number'
            if (value === '') {
                ctx.commit('updateErrorBuyer', ['заполните номер', formField]);
            }
            if (value !== '') {
                ctx.commit('updateErrorBuyer', ['', formField])
            }
        }
    },
    getters: {
        getPassengers(state) {
            return state.passengers;
        },
        adults(getters) {
            return getters.adults
        },
        childrens(getters) {
          return getters.childrens
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
        getDropdownById: (state) => (id) => {
            return state.passengers[id].dropdowns
        }
    },
}