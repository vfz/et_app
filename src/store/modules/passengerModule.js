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
                citizenship: '',
                citizenShipSearchQuery: '',
                document: '',
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
        }
    },
    actions: {
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
                citizenship: '',
                document: '',
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
                isAdult: isAdult
            }
            ctx.commit('addPassenger', passenger)
            ctx.commit('changePassengerId', passenger)
        },
        removePassenger(ctx, isAdult) {
            //getIndex() выбирает
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
        updateGender(ctx,event) {
            //установка мужского пола для 1-го пассажира по умолчанию
            if (event === undefined) {
                const value = 'Мужской';
                const id = 0
                ctx.commit('updateGender', [value, id]);
            }
            else {
                const value = event.target.value;
                //исключить наименование и оставить только цифры в id при помощи replace
                const id = event.target.id.replace(/[^0-9]/g,"");
                ctx.commit('updateGender', [value, id]);
            }
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
        updateDocument(ctx,event) {
            //установка паспорта для 1-го пассажира по умолчанию
            if (event === undefined) {
                const value = 'Паспорт РФ';
                const id = 0
                ctx.commit('updateDocument', [value, id]);
            }
            else {
                const value = event.target.value;
                //исключить наименование и оставить только цифры в id при помощи replace
                const id = event.target.id.replace(/[^0-9]/g,"");
                ctx.commit('updateDocument', [value, id]);
            }
        },
        updateDocumentInfo(ctx, event) {
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            ctx.commit('updateDocumentInfo', [value, id]);
        },
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
                // console.log(document);
                if (currentDateWithoutTime < birthDayCurrent) {
                    age = age-1
                }
                // console.log(age, 'возраст')
                if (age < 14 && document === 'Паспорт гражданина Российской Федерации') {
                    ///аргументы (mutation, [id, errorText, formField ])
                    ctx.commit('updateError', [id, 'До 14 лет, билеты оформляются по свидетельству о рождении', formField])
                }
                if (age > 125) {
                    ctx.commit('updateError', [id, 'Некорректная дата, вам больше 125 лет?', formField])
                }
            }
        },
        validateDocumentInfo(ctx, event) {
            //TODO доделать валидацию для документа
            const value = event.target.value;
            //исключить наименование и оставить только цифры в id при помощи replace
            const id = event.target.id.replace(/[^0-9]/g,"");
            const formField = 'documentInfo';
            if (value === '') {
                ///аргументы (mutation, [id, errorText, formField ])
                ctx.commit('updateError', [id, 'заполните серию и номер документа', formField]);
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
        }

    },
}